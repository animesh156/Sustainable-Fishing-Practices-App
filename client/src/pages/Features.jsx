import { useNavigate } from "react-router-dom"


function Features() {
    const navigate = useNavigate()

  return (
    <>

    <h1 className="md:text-5xl text-3xl md:mt-14 mt-8 text-center font-bold">Features</h1>

<div className="flex justify-center mb-10 space-y-3  md:space-y-0 flex-wrap md:space-x-2 mt-10">

<div 
onClick={() => navigate('/guide')}
 className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Sustainable Seafood</h2>
    <p>Provide detailed information about fish species and their sustainability status.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


<div
onClick={() => navigate('/impact')}
 className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Sustainable Seafood</h2>
    <p>Provide detailed information about fish species and their sustainability status.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div
onClick={() => navigate('/community')}
 className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Sustainable Seafood</h2>
    <p>Provide detailed information about fish species and their sustainability status.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Sustainable Seafood</h2>
    <p>Provide detailed information about fish species and their sustainability status.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>




</div>

    </>
  )
}

export default Features