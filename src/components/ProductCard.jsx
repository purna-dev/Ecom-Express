import React, { useContext, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { AddtoCard } from "../contexts/AddtoCart";
function ProductCard({products}) {
// console.log(products)\
const addtocartContext = useContext(AddtoCard)
const {cart,setcart} = addtocartContext
const handleAddToCart = (id,title,price)=>{

    console.log(id)
    const newObj = {
        id,
        title,
        price
    }

    if(id){
        setcart({...cart,noOfproducts:cart.noOfproducts+1,products:[...cart.products,newObj]})

    }
}

useEffect(()=>{
    console.log(cart)
},[cart.noOfproducts])

  return (
    <div>
      <div className="w-[260px] shadow-md border rounded font-poppins flex flex-col items-center">
        <div className="w-[250px] h-[250px] m-1">
          <img src={products.images[0]} className="w-full rounded-md" />
        </div>

        <div className="p-3 bg-white">
          <p className="text-[1.1rem] font-semibold">
            {products.title}
          </p>
          <p className="text-[0.7rem]">
          {products.description}
          </p>
          <p className="text-[0.9rem] pt-1 pb-1 font-medium"> $ {products.price}</p>

          <button onClick={()=>handleAddToCart(products.id,products.title,products.price)} className="flex gap-3 items-center bg-[var(--light-orange)] w-[235px] rounded p-2 justify-center text-[0.9rem] font-medium text-slate-950 mt-1" > <FaCartPlus size={19}/> Add To Card</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
