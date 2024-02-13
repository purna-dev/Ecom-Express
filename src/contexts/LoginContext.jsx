import React, { useEffect, useState } from 'react'

const LoginContext = React.createContext(null)


function LoginContextProvider({children}) {
 
    const [login,setlogin] = useState({
        username:'kminchelle',
        password:'0lelplR',
        // token:''
    })

    let [token,setToken] = useState(undefined)

    useEffect(()=>{

        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(login)
})
.then(res => res.json())
.then(async(data)=>{
    await setToken(data.token)
    console.log(data)
    // console.log(token)
    // setlogin({...login,Lusername:data.username,Lpassword:,token:data.token})
}).catch(err=>console.log(err));

    },[])

  return (
    <>
        <LoginContext.Provider value={{login,setlogin,token}}>
        {children}
        </LoginContext.Provider>
    </>
  )
}

export {LoginContext,LoginContextProvider}