import Balancer from 'react-wrap-balancer'

const gears = [
  {
    name: "Biodegradable Nets",
    description:
      "These nets are made from biodegradable materials, reducing harm to marine life if lost at sea.",
    image: "/fishing-net.jpg",
    about: "https://www.sciencedirect.com/science/article/abs/pii/S0025326X24012773",
    shoppingUrl: "https://thepropsstore.com/shop/props/marin-fishing-net-white/"
  },
  {
    name: "Circle Hooks",
    description:
      "Designed to reduce bycatch, circle hooks are eco-friendly and improve catch-and-release survival rates.",
    image: "/circle-hooks.jpg",
    about: "https://www.dpi.nsw.gov.au/dpi/fishing/recreational-fishing/responsible-fishing/catch-and-release/circle-hooks-benefits-and-tips",
    shoppingUrl: "https://www.amazon.in/s?k=circle+hooks+fishing"
  },
  {
    name: "LED Lights for Nets",
    description:
      "LED lights attached to fishing nets reduce accidental catches of endangered species like turtles.",
    image: "/led.png",
    shoppingUrl: "https://www.amazon.in/s?k=LED+Lihts+for+nets+fishin&i=kitchen&crid=3D4I14QJEYEFS&sprefix=led+lihts+for+nets+fishin%2Ckitchen%2C263&ref=nb_sb_noss",
    about: "https://www.science.org/content/article/these-simple-green-lights-could-save-sharks-and-turtles-fishing-nets"
  },
  {
    name: "Turtle Excluder Devices (TEDs)",
    description:
      "TEDs allow turtles to escape from shrimp trawls while retaining the target catch.",
    image: "/turtle.jpg",
    about: "https://www.fisheries.noaa.gov/southeast/bycatch/turtle-excluder-devices",
    shoppingUrl: "https://www.desertcart.in/products/57603457-joy-fish-maryland-blue-crab-pot-trap-pvc-coated-wire-mesh-heavy-duty"
  },

  {
    name: "Lures",
    description:
      "TEDs allow turtles to escape from shrimp trawls while retaining the target catch.",
    image: "/lure.jpg",
    about:"https://fishingbooker.com/blog/most-common-types-of-fishing-lures-all-you-need-to-know/#:~:text=For%20those%20of%20you%20who,t%20necessarily%20work%20with%20another.",
    shoppingUrl: "https://www.amazon.in/s?k=lrues+fishing&crid=3RRODSS9EBYI2&sprefix=lures+fishing%2Caps%2C238&ref=nb_sb_noss_1"
  },

  {
    name: "Handline",
    description:
      "TEDs allow turtles to escape from shrimp trawls while retaining the target catch.",
    image: "/handline.jpeg",
    about:"https://www.fishing.net.nz/fishing-advice/how-to/handline-fishing/",
    shoppingUrl: "https://www.amazon.in/s?k=handline+fishing&crid=K70W7ZUIUVR2&sprefix=handline+fidhin%2Caps%2C242&ref=nb_sb_ss_ts-doa-p_2_15"
  },


];

function Gear() {
  return (
    <>
     
     <h1 className='text-center text-sky-500  md:text-4xl mt-4 mb-7 text-xl font-extrabold'>Catch Responsibly: The Best Sustainable Fishing Gear</h1>
      
      <div className="text-center md:mt-20 mx-auto  px-4">
        <h2 className="md:text-2xl text-xxl font-semibold text-yellow-500  mb-2">Why Choose Eco-Friendly Fishing Gears?</h2>
        <p className="text-lg gear">
          <Balancer>
          Sustainable fishing practices are essential for preserving marine ecosystems and ensuring the long-term health of our oceans. Eco-friendly fishing gears, such as biodegradable nets, circle hooks, and turtle excluder devices, help reduce bycatch, minimize environmental impact, and protect endangered species. By choosing these innovative tools, we can enjoy fishing while contributing to the conservation of marine life.
          </Balancer>
         
        </p>
      </div>

      <div className="flex mb-10 justify-evenly gap-y-4 gap-x-8 flex-wrap mt-10">
        {gears.map((gear, index) => (
          <div key={index} className="card bg-slate-50 dark:bg-neutral-900 w-80 hover:shadow-cyan-400 shadow-lg">
            <figure>
              <img
                className="w-full h-52 object-cover"
                src={gear.image}
                alt={gear.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{gear.name}</h2>
              <p>{gear.description}</p>
              <div className="card-actions justify-center">
                <a href={gear.shoppingUrl} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-success">Buy Now</button>
                </a>
                <a href={gear.about} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-info">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gear;


