import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Sorry, your browser doesn&lsquo;t support embedded videos.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h1 className="md:text-5xl text-2xl font-bold ">
            Protect Our Oceans, Practice Sustainable Fishing
          </h1>
          <button
            onClick={() => navigate("/feature")}
            className="btn btn-error mt-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
