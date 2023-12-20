import React, { useState } from 'react';
import { UserLogin } from '../apiRequest/apiRequest';
import toast, { Toaster } from 'react-hot-toast';
import FullScreenLoader from './FullScreenLoader';


const LoginForm = () => {
    const [loader, setLoader] = useState("d-none")

    const [formValue, setForm] = useState({
        useremail: ""
    })

    const onChange = (key,value) => {
        setForm((theValue=>({
            ...theValue,
            [key]: value
        })))
    }

    const onSubmit = async ()=> {
        if(formValue.useremail.length===0){
            toast.error("Email address required!")
        }else{
           setLoader("")
           let res = await UserLogin(formValue);
           setLoader("d-none")
           if(res==="Success"){
            toast.success("Verification Code has been sent!")
            setTimeout(()=>{
                window.location.href="/otp"
               }, 2000)
           }else{
            toast.error("Request Failed!")
           }

        }
    }

    return (
        <div className="container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='p-3 card'>
                        <h2>Login</h2>
                        <input onChange={(e)=>onChange('useremail', e.target.value)} type='email' className='form-control'/>
                        <button onClick={onSubmit} className='mt-2 btn btn-primary'>Submit</button>
                        
                    </div>
                </div>
            </div>

            <Toaster position='bottom-center'/>
            <FullScreenLoader visibility={loader}/>
        </div>
      );
    };

export default LoginForm;