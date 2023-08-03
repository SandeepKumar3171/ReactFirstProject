import {AiOutlineStar} from "react-icons/ai"

function ProductCard({image,title,brand,price,rating,stock,discountPercentage,description}){
  
    return (
        <>
        <div className=" w-50 h-full p-1 justify-center shadow-xl hover:shadow-gray-700">
        <div className="w-50 h-50 "><img src={image} alt="productimage" /></div>
         <div className="w-50 h-50">
             <p className="text-3xl text-center font-semibold">{title}</p>
             <p className="text-xl font-semibold">Brand: <span className="text-red-500">{brand}</span></p>
            <p className="text-green-500 font-semibold text-xl">Rs.{price}</p>
            <p className="text-green-500 font-semibold">Discount {discountPercentage}%</p>
            <div className="flex"><p className="text-red-500 font-semibold">{rating}</p>
            <p className="bg-yellow-500 text-red-600 w-4 h-fit rounded-full">{<AiOutlineStar/>}</p>
            </div>
            <p className="font-medium text-blue-600">Stock: {stock}</p>
            
            <p className="text-lg font-medium">{description} <span className="opacity-4 text-slate-500">see more....</span> </p>
            
         </div> 
        </div>

       
        </>
    )
}

export default ProductCard;