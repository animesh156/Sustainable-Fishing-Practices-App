import  { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Example fish data
const fishData = [
  {
    name: "Atlantic Salmon",
    location: [60.472, -1.255], // Coordinates (latitude, longitude)
    sustainability: "Avoid",
    method: "Farmed (open net pens)",
    season: "Year-round",
    image:"/atlantic_salmon.jpeg"
  },
  {
    name: "Pacific Sardines",
    location: [34.0522, -118.2437], // Coordinates (Los Angeles, USA)
    sustainability: "Best Choice",
    method: "Wild-caught (purse seines)",
    season: "Spring-Summer",
    image: "/sardiness.jpg"
  },
  {
    name: "Albacore Tuna",
    location: [24.774, 46.738], // Coordinates (Near Saudi Arabia)
    sustainability: "Good Alternative",
    method: "Pole-and-line caught",
    season: "Summer-Fall",
    image: "/tuna.jpg"
  },

  
  {
    "name": "Atlantic Cod",
    "location": [44.648, -63.585], // Coordinates (Near Nova Scotia, Canada)
    "sustainability": "Avoid",
    "method": "Bottom trawling",
    "season": "Year-round",
    image: "/cod.jpg"
  },
  {
    "name": "Pacific Salmon",
    "location": [57.048, -135.318], // Coordinates (Near Alaska, USA)
    "sustainability": "Best Choice",
    "method": "Wild-caught",
    "season": "Spring-Summer",
    image: "/pacific_salmon.jpeg"
  },
  {
    name: "Mahi-Mahi",
    location: [20.798, -156.331], // Coordinates (Near Hawaii, USA)
    sustainability: "Good Alternative",
    method: "Troll-caught",
    season: "Year-round",
    image: "/mahi.jpeg"
  },
  {
    name: "Barramundi",
    location: [-12.463, 130.844], // Coordinates (Near Northern Australia)
    sustainability: "Best Choice",
    method: "Farmed in recirculating systems",
    season: "Year-round",
    image: "/Barramundi.jpeg"
  },
  {
    name: "Bluefin Tuna",
    location: [35.689, 139.692], // Coordinates (Near Japan)
    sustainability: "Avoid",
    method: "Longline caught",
    season: "Spring-Fall",
    image: "/bluefin_tuna.jpg"
  },
  {
    name: "Rainbow Trout",
    location: [39.113, -105.358], // Coordinates (Near Colorado, USA)
    sustainability: "Best Choice",
    method: "Farmed in freshwater ponds",
    season: "Year-round",
    image: "/trout.jpeg"
  },
 {
    name: "Yellowtail Amberjack",
    location: [33.868, 151.209], // Coordinates (Near Sydney, Australia)
    sustainability: "Good Alternative",
    method: "Farmed in sea cages",
    season: "Year-round",
    image: "/amberjack.jpeg"
  },
  {
    name: "Arctic Char",
    location: [64.963, -19.021], // Coordinates (Near Iceland)
    sustainability: "Best Choice",
    method: "Farmed in land-based systems",
    season: "Year-round",
    image: "/char.jpeg"
  },

  {
    name: "Rohu (Labeo rohita)",
    location: [22.5726, 88.3639], // Coordinates (Near Kolkata, West Bengal)
    sustainability: "Best Choice",
    method: "Farmed in freshwater ponds",
    season: "Year-round",
    image: "/rohu.jpeg"
  },
  {
    name: "Hilsa (Tenualosa ilisha)",
    location: [21.7679, 88.6633], // Coordinates (Near Sundarbans, West Bengal)
    sustainability: "Good Alternative",
    method: "Gillnet caught",
    season: "Monsoon (June-September)",
    image: "/hilsa.png"
  },
  {
    name: "Catla (Catla catla)",
    location: [26.8467, 80.9462], // Coordinates (Near Uttar Pradesh)
    sustainability: "Best Choice",
    method: "Farmed in freshwater ponds",
    season: "Year-round",
    image: "/catla.jpeg"
  },
  {
    name: "Pomfret (Pampus argenteus)",
    location: [18.5204, 73.8567], // Coordinates (Near Mumbai, Maharashtra)
    sustainability: "Good Alternative",
    method: "Trawl caught",
    season: "Winter (November-February)",
    image: "/pampus.jpeg"
  },
  {
    name: "Indian Mackerel (Rastrelliger kanagurta)",
    location: [9.9312, 76.2673], // Coordinates (Near Kochi, Kerala)
    sustainability: "Best Choice",
    method: "Purse seine caught",
    season: "Year-round",
    image: "/mackerel.jpeg"
  },
  {
    name: "Kingfish (Seer Fish)",
    location: [13.0827, 80.2707], // Coordinates (Near Chennai, Tamil Nadu)
    sustainability: "Good Alternative",
    method: "Hook-and-line caught",
    season: "Winter (November-February)",
    image: "/kingFish.jpeg"
  },
  {
    name: "Bombay Duck (Harpadon nehereus)",
    location: [19.0760, 72.8777], // Coordinates (Near Mumbai, Maharashtra)
    sustainability: "Avoid",
    method: "Bottom trawling",
    season: "Monsoon (June-September)",
    image: "/harpadon.jpg"
  },
 
  {
    name: "Pearl Spot (Etroplus suratensis)",
    location: [9.9312, 76.2673], // Coordinates (Near Kerala Backwaters)
    sustainability: "Best Choice",
    method: "Farmed in freshwater ponds",
    season: "Year-round",
    image: "/pearl.png"
  },
  {
    "name": "Tilapia (Oreochromis niloticus)",
    "location": [17.3850, 78.4867], // Coordinates (Near Hyderabad, Telangana)
    "sustainability": "Good Alternative",
    "method": "Farmed in freshwater ponds",
    "season": "Year-round",
    image: "/tilapia.png"
  }
];

// Custom icon for map markers
const fishIcon = new L.Icon({
  iconUrl: "/fishIcon.png", // Fish icon URL
  iconSize: [30, 30],
});

 function MapGuide() {
  const [search, setSearch] = useState("");

  const filteredFish = fishData.filter((fish) =>
    fish.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-3xl font-extrabold text-center mb-8">Fish Map Guide</h2>
        <p className="text-lg text-center font-semibold text-sky-400 mb-12">
          Explore where different fish species are found and learn about their
          sustainability.
        </p>
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search for fish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300  rounded-lg p-2 w-64"
          />
        </div>

        <div className="h-[500px] w-full relative">
          

        <MapContainer
  center={[22.3511148, 78.6677428]} // Center of India
  zoom={3} // Adjusted zoom level for India
  className="h-full w-full"
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  {filteredFish.map((fish, index) => (
    <Marker key={index} position={fish.location} icon={fishIcon}>
     <Popup>
  <div className="p-2 w-60 text-center">
    <img
      src={fish.image}
      alt="fish_img"
      className="w-full h-auto rounded-md mb-2"
    />
    <h3 className="text-lg font-bold mb-1">{fish.name}</h3>
    <p className="text-sm text-gray-700 mb-1">Sustainability: {fish.sustainability}</p>
    <p className="text-sm text-gray-700 mb-1">Method: {fish.method}</p>
    <p className="text-sm text-gray-700">Season: {fish.season}</p>
  </div>
</Popup>

    </Marker>
  ))}
</MapContainer>

        </div>
        

      </div>
    </section>
  );
}
 export default MapGuide;