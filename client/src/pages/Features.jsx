import { useNavigate } from "react-router-dom"

const features = [
  {
    title: 'Sustainable Fishing Tips',
    description: 'Provide detailed information about fish species and their sustainability status.',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    link: '/guide'
  },

  {
    title: 'Eco-Friendly Gear',
    description: 'Promote sustainable fishing gear.',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    link: '/gear'
  }
,
  {
    title: 'Fishing Regulations Map',
    description: 'Help users find local fishing regulations.',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    link: '/map'
  }
]


function Features() {
    const navigate = useNavigate()

  return (
    <>

    <h1 className="md:text-5xl text-3xl md:mt-14 mt-8 text-center font-bold">Features</h1>

<div className="flex justify-center mb-10 space-y-3  md:space-y-0 flex-wrap md:space-x-2 mt-10">

{features.map((feature,index) => (
     <div 
     key={index}
     onClick={() => navigate(feature.link)}
      className="card bg-base-100 w-80 shadow-sm">
       <figure>
         <img
           src={feature.image}
           alt="img" />
       </figure>
       <div className="card-body text-center">
         <h2 className="text-lg font-semibold text-center">{feature.title}</h2>
         <p>{feature.description}</p>
         <div className="card-actions justify-center">
           <button className="btn btn-primary">Know More</button>
         </div>
       </div>
     </div>
))}




</div>

    </>
  )
}

export default Features