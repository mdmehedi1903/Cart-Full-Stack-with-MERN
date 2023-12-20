import React, { useState } from 'react';
import { VerifyLogin } from '../apiRequest/apiRequest';
import { getEmail } from '../utility/TokenHelper';
import toast, { Toaster } from 'react-hot-toast';

const OTPForm = () => {



    const [otptest, setOTP] = useState({
        useremail: getEmail(),
        otp: ""
    });


    const onChange = (key,value) => {
        setOTP(getOld=>({
            ...getOld,
            [key]: value
        }))
    }


    const onClick = async ()=> {

            if(otptest.otp.length===0){
                toast.error("OTP Required!")
            }else{
                let result = await VerifyLogin(otptest)
                if(result==="Success"){
                    toast.success("Successfully Verified!")
                    setTimeout(()=>{
                        window.location.href="/cart"
                    },2000)
                }else{
                    toast.error("Invalid OTP!")
                }
            }

    }


    return (
        <div className="container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-5'>
                    <div className='p-3 card'>
                        <h2>OTP Verification</h2>
                        <input onChange={(e)=>onChange('otp',e.target.value)} type='email' className='form-control'/>
                        <button onClick={onClick} className='mt-2 btn btn-primary'>Submit</button>
                        
                    </div>
                </div>
            </div>
            <Toaster position='bottom-center'/>
        </div>
      );
    };


export default OTPForm;