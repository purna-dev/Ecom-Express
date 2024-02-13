import React, { useContext, useEffect, useState } from 'react'
import { CiLogin } from "react-icons/ci";
import { LoginContext } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const loginContext = useContext(LoginContext)
    const {login,token} = loginContext
    const navigate = useNavigate()
    const [userLogin,setuserLogin] = useState({
        username:'',
        password:''
    })

    const [isFilled,setisFilled] = useState({
        isUsername:false,
        isPassword:false
    })

    const [check,setcheck]= useState({
        isTrueUsername:false,
        isTruePassword:false,
        
    })

    const handleLogin = (e)=>{
        if(userLogin.username && userLogin.password){
            setisFilled({...isFilled,isUsername:false,isPassword:false})
            if(userLogin.username === login.username && userLogin.password === login.password){

                localStorage.setItem('token',token)
                navigate('/')

            }else {
                setcheck({...check,isTrueUsername:true,isTruePassword:true})

            }
            

        console.log(userLogin)
        }else if(!userLogin.username){
            setcheck({...check,isTrueUsername:false})

            setisFilled({...isFilled,isUsername:true})
            
        }else if(!userLogin.password){
            setcheck({...check,isTruePassword:false})

            setisFilled({...isFilled,isPassword:true})
        }



    }

    useEffect(()=>{
        console.log(loginContext)
        if(localStorage.getItem('token')){
            navigate('/')
        }


    },[])

  return (
    <div className='flex justify-center items-center w-full h-[100svh] bg-yellow-100'>

        <div className='w-[380px] p-10 bg-white font-poppins flex justify-center flex-col items-center rounded shadow-lg'>

        <h1 className='text-[1.3rem] font-semibold'>Login</h1>
        <span className='text-[0.9rem] w-[310px] m-3'>Hey, Enter provided login credential to get login to your account</span>

        <input type='text' onChange={(e)=>setuserLogin({...userLogin,username:e.target.value.trim()})} value={userLogin.username} className=' text-[0.9rem] text-[rgba(0,0,0,0.8)] p-[0.5rem] pl-3 pr-2 border border-[rgba(0,0,0,0.2)] rounded outline-none font-poppins placeholder:text-[0.9rem] w-[310px] placeholder:text-[rgba(0,0,0,0.6)]' name='username' placeholder='Enter username' required/>
        {isFilled.isUsername?<span className='text-[0.8rem] text-red-600 self-start mt-1'>Please enter username !</span>:''}
        {check.isTrueUsername?<span className='text-[0.8rem] text-red-600 self-start mt-1'>Invalid username !</span>:''}
        <input type='password' onChange={(e)=>setuserLogin({...userLogin,password:e.target.value.trim()})} className=' text-[0.9rem] mt-3 text-[rgba(0,0,0,0.8)] p-[0.5rem] pl-3 pr-2 border border-[rgba(0,0,0,0.2)] rounded outline-none font-poppins placeholder:text-[0.9rem] w-[310px] placeholder:text-[rgba(0,0,0,0.6)]' name='username' placeholder='Enter password' required/>
        {isFilled.isPassword?<span className='text-[0.8rem] text-red-600 self-start mt-1'>Please enter password !</span>:''}
        {check.isTruePassword?<span className='text-[0.8rem] text-red-600 self-start mt-1'>Invalid password !</span>:''}   
            <button onClick={handleLogin} className=' flex justify-center items-center bg-[var(--light-orange)] text-blue-950 p-3 rounded cursor-pointer mt-3 font-semibold text-[0.9rem] w-[310px]'>
                  Login<CiLogin size={21}  />
            </button>
            <p className='text-[0.9rem] mt-3 self-start text-blue-900 '>
                <span className=' font-medium text-slate-900'>username : </span>{login.username} <br></br><span className=' font-medium text-slate-900'>password : </span>{login.password}
            </p>

        </div>

    </div>
  )
}

export default Login