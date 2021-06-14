import React, { useState } from 'react'
import { FormButton } from './FormButton'

export const Login = ({ setLogin }) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const loginhandler=()=>{
        if (user==="a" && pass === "a"){
            setLogin(true);
            setError("")
        }
        else{
            setError("Bad Username/Password")
        }
    }
    return (
        <div className="backdrop" style={{zIndex:1, backgroundColor:"white"}}>
            <div className="login">
                <div className="setprice text-center">
                    {error ? <div className="error">Hello Admin { error }!</div>:"Hello Admin!"}
                    <form>

                        <label className="credlogin">
                            Username :
                            <input style={{margin:'1vw'}} type='text' onChange={(e)=>{setUser(e.target.value)}}
                            value={user}/>
                        </label>
                        <label className="credlogin">
                            Password :
                            <input style={{margin:'1vw'}} type='text' onChange={(e)=>{setPass(e.target.value)}}
                            value={pass}/>
                        </label>

                    </form>
                    <button className="input" onClick={loginhandler}> Submit </button>
                </div>
            </div>
        </div>
    )
}

const Admin = () => {
    const [login, setLogin] = useState(false);
    
    
    return (
        <>
        {login===false &&<Login setLogin={setLogin}/>}
        <div className="admin">

            
            {login && <FormButton />}
        </div>
        </>
    )
}
export default Admin;