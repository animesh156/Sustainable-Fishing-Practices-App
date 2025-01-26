import { useNavigate } from "react-router-dom"
import {motion} from 'framer-motion'

const features = [
  {
    title: 'Sustainable Fishing Tips',
    description: 'Provide detailed information about fish species and their sustainability status.',
    image: '/lure.jpg',
    link: '/guide'
  },

  {
    title: 'Eco-Friendly Gear',
    description: 'Promote sustainable fishing gear.',
    image: '/fishing-net.jpg',
    link: '/gear'
  }
,
  {
    title: 'Fishing Regulations Map',
    description: 'Help users find local fishing regulations.',
    image: 'https://www.researchgate.net/publication/359447856/figure/fig3/AS:1180462177357824@1658455523276/World-map-of-the-FAO-major-fishing-areas-with-pie-charts-inset-within-each-region-showing.png',
    link: '/map'
  },

  {
    title: 'Fishing Impact',
    description: 'Help users find local fishing regulations.',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    link: '/overfishing.jpg'
  },


  {
    title: 'Community',
    description: 'Help users find local fishing regulations.',
    image: 'https://dlnr.hawaii.gov/wp-content/uploads/2022/08/Milolii-cbsfa-signing-scaled.jpeg',
    link: '/community'
  }


]


function Features() {
    const navigate = useNavigate()

    const animationSettings = {
      initial: { x: -200, opacity: 0 }, // Start off-screen to the left and invisible
      animate: { x: 0, opacity: 1 },   // Move into view and become visible
      transition: { type: 'spring', stiffness: 50 }, // Spring animation
    };

  return (
    <>

    <h1 className="md:text-5xl  bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent text-4xl md:mt-12 mt-8 text-center font-extrabold">Features</h1>

<div className="flex justify-evenly  mb-10 gap-x-5 gap-y-5 flex-wrap  mt-10">

{features.map((feature,index) => (
     <motion.div 
     {...animationSettings}
     transition={{ ...animationSettings.transition, delay: 0.2 }} // Add delay for staggered effect
     key={index}
     onClick={() => navigate(feature.link)}
      className="card bg-base-100 w-96 shadow-sm">
       <figure>
         <img
           src={feature.image}
           alt="img"
           className="w-full h-48 object-cover"
            />
       </figure>
       <div className="card-body text-center">
         <h2 className="text-lg font-semibold text-center">{feature.title}</h2>
         <p>{feature.description}</p>
         <div className="card-actions justify-center">
           <button className="btn btn-primary">Know More</button>
         </div>
       </div>
     </motion.div>
))}




</div>

    </>
  )
}

export default Features