import React, { useEffect, useState } from 'react'

const AddtoCard = React.createContext(null)



function AddtoCartProvider({children}) {

    const [cart,setcart] = useState({
        noOfproducts:0,
        products:[]
    })

    const [items,setitems] = useState([])

    useEffect(()=>{
        console.log(cart)
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>{
            setitems(data.products)

        }).catch(err=>console.log(err));

    },[])


  return (
    <>
    <AddtoCard.Provider value={{cart,setcart,items}}>
        {children}
    </AddtoCard.Provider>
    </>
  )
}

export {AddtoCard,AddtoCartProvider}