import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'
import ProductCard from './ProductCard'
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AddtoCard } from '../contexts/AddtoCart';

function Home() {
    const navigate = useNavigate()
    const loginContext = useContext(LoginContext)
    const addtocartContext = useContext(AddtoCard)
    const {token} = loginContext
    const { cart, setcart, items }=addtocartContext

    const selectRange = useRef(null)

    const [products,setproducts] = useState([])
    const [searchitems,setsearchitems] =useState('') 
    const [filterbyprice,setfilterbyprice] = useState('')

    const totalPrice = cart.products.reduce( (TotalPrice, currentItem) => TotalPrice + currentItem.price,0,)

    const getProducts = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>{
            setproducts(data.products)

        }).catch(err=>console.log(err));
    }

    useEffect(()=>{
        const gettoken = localStorage.getItem('token')
        if(!localStorage.getItem('token')){
            navigate('/login')
        }

        getProducts()
        console.log(products)
        // console.log(items)
        // console.log(token)
    },[])

    useEffect(()=>{
        // console.log(searchitems)
        // console.log(selectRange.current[0].selected)
        selectRange.current[0].selected = true


        fetch(`https://dummyjson.com/products/search?q=${searchitems}`)
        .then(res => res.json())
        .then((data)=>{
            setproducts(data.products)
            

        }).catch(err=>console.log(err));





    },[searchitems])

    useEffect(()=>{
        
        // fetch(`https://dummyjson.com/products`)
        // .then(res => res.json())
        // .then((data)=>{
        //     setproducts(data.products)

        // }).catch(err=>console.log(err));
        // console.log(products)
        selectRange.current[0].selected = false

        if(!searchitems.length) selectRange.current[0].selected = false

        if(filterbyprice ==='12-100'){
            // console.log('20')
           
            // const newFilterArr = products.filter((item)=>{
            //     return item.price>=12 && item.price<=100
            // })
            console.log('not')
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=12 && item.price<=100
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        if(filterbyprice ==='100-300'){
            // console.log('20')
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=100 && item.price<=300
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        if(filterbyprice ==='300-600'){
            // console.log('20')
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=300 && item.price<=600
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        if(filterbyprice ==='600-1000'){
            // console.log('20')
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=600 && item.price<=1000
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        if(filterbyprice ==='1000-1500'){
            // console.log('20')
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=1000 && item.price<=1500
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        if(filterbyprice ==='1500-2000'){
            fetch(`https://dummyjson.com/products`)
            .then(res => res.json())
            .then((data)=>{
                const newFilterArr = data.products.filter((item)=>{
                        return item.price>=1500 && item.price<=2000
                    })
            console.log(newFilterArr)
            setproducts(newFilterArr)
                    
    
            }).catch(err=>console.log(err));
        }
        





    },[filterbyprice])



  return (
    <>

<div className='flex items-center justify-between md:flex-col md:mb-2'>

    

<div className='flex gap-2 items-center md:flex-col'>

<div className='p-3  ml-[7rem] flex items-center md:ml-[0]'>

            


<div className='border bg-[rgba(0,0,0,0.1)] border-[rgba(0,0,0,0)] border-r-0  p-[0.5rem] rounded-tl rounded-bl '>
<FiSearch size={22} color='rgba(0,0,0,0.7)'/>
    
</div>
<input type='text' onChange={e=>setsearchitems(e.target.value.trim())} value={searchitems} className=' text-[0.9rem] bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.8)] p-[0.5rem] pl-0 pr-2 border border-[rgba(0,0,0,0)] border-l-0 rounded-tr rounded-br outline-none font-poppins placeholder:text-[0.9rem] w-[360px] placeholder:text-[rgba(0,0,0,0.6)] md:w-[300px]' name='username' placeholder='Search Products' />
</div>

<div className=''>

<select onChange={e=>setfilterbyprice(e.target.value)} name='selectedPrice' ref={selectRange} defaultValue={'Filter By Price Range'} className='font-poppins text-[0.9rem] border bg-[rgba(0,0,0,0.1)] border-[rgba(0,0,0,0)]  p-[0.5rem] rounded pr-3 outline-none'>
  <option value="Filter By Price Range" disabled>Filter By Price Range</option>
  <option value="12-100">$12 - $100</option>
  <option value="100-300">$100 - $300</option>
  <option value="300-600">$300 - $600</option>
  <option value="600-1000">$600 - $1000</option>
  <option value="1000-1500">$1000 - $1500</option>
  <option value="1500-2000">$1500 - $2000</option>
  
</select>

</div>

</div>

<div className='flex items-center font-poppins mr-2 md:mr-0 md:mt-2'>

<div className='mr-7 p-2 flex gap-1 items-center bg-slate-900 text-white rounded text-[0.9rem]'>

<FaShoppingCart color='white' size={20}/>
( {cart.noOfproducts} )
</div>
<p className='p-2 bg-[rgba(0,0,0,0.1)] rounded-sm text-[0.9rem] font-semibold'>
Total : $ {totalPrice}
</p>

</div>

     

        
</div>
<hr></hr>
        <div className='flex flex-wrap p-2 gap-7 justify-center mt-3'>
        {products.map((data,index)=>(<ProductCard products={data} key={index} />))}
        </div>
    </>
  )
}

export default Home