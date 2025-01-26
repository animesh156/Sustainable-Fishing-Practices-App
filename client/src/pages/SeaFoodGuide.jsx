import { useState } from "react";

const seafoodData = [
  {
    name: "Atlantic Salmon",
    sustainability: "Avoid",
    method: "Farmed (open net pens)",
    season: "Year-round",
    image: "/atlantic_salmon.jpeg",
  },
  {
    name: "Pacific Sardines",
    sustainability: "Best Choice",
    method: "Wild-caught (purse seines)",
    season: "Spring-Summer",
    image: "/fish.jpg",
  },
  {
    name: "Shrimp (Imported)",
    sustainability: "Avoid",
    method: "Farmed",
    season: "Year-round",
    image: "/shrimp.jpg",
  },
  {
    name: "Albacore Tuna",
    sustainability: "Good Alternative",
    method: "Pole-and-line caught",
    season: "Summer-Fall",
    image: "/tuna.jpg",
  },
];

 function SeafoodGuide() {
  const [search, setSearch] = useState("");

  const filteredSeafood = seafoodData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Seafood Guide</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Discover sustainable seafood options to make eco-friendly choices.
        </p>
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search for seafood..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-64"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSeafood.map((seafood, index) => (
            <div
              key={index}
              className={` text-sky-500 rounded-2xl shadow-md p-6 text-center ${
                seafood.sustainability === "Avoid"
                  ? "border-red-500 border-2"
                  : seafood.sustainability === "Best Choice"
                  ? "border-green-500 border-2"
                  : "border-yellow-500 border-2"
              }`}
            >
              <img
                src={seafood.image}
                alt={seafood.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{seafood.name}</h3>
              <p className=" mb-2 text-fuchsia-500">
                Sustainability:{" "}
                <span className="font-semibold">{seafood.sustainability}</span>
              </p>
              <p className="text-amber-500 mb-2">
                Method: {seafood.method}
              </p>
              <p className="text-emerald-500">Season: {seafood.season}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default SeafoodGuide;