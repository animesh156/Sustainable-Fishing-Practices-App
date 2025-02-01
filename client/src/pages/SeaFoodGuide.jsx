import { useEffect, useState } from "react";
import axios from "axios";

function SeafoodGuide() {
  const [fishData, setFishData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:6245/api/fish");

        // Limit the data to 80 fish items
        setFishData(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching fish data:", error);
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  if(isLoading){
    return  <div className="flex justify-center items-center h-96">
    <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
  </div>
  }

  return (
    <>
      <h1 className="md:text-4xl text-2xl mt-3 font-bold text-center mb-8 text-blue-800">
        Sustainable Seafood Guide
      </h1>
      <p className="md:text-2xl text-center  font-bold mb-8">
        Discover sustainable seafood choices for a healthier ocean.
      </p>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-4">
        {fishData.map((fish) => (
          <div
            key={fish.id}
            className="card bg-gray-300 dark:bg-neutral-900 w-96 shadow-sm"
          >
            <figure>
              <img
                src={fish.img_src_set?.["1.5x"] || "/cod.jpeg"}
                alt={fish.meta?.name || "Fish Image"}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {fish.name || "Unknown Fish"}</h2>
              <p>
                {" "}
                Family: {fish.meta.scientific_classification?.family || "N/A"}
              </p>
              <p>
                Domain: {fish.meta.scientific_classification?.domain || "N/A"}
              </p>
              <p>
                {" "}
                Kingdom: {fish.meta.scientific_classification?.kingdom || "N/A"}
              </p>
              <div className="card-actions justify-end">
                <a href={fish.url}>
                  <button className="btn btn-primary">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeafoodGuide;
