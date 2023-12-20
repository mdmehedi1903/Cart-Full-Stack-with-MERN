import React, { useEffect, useState } from 'react';
import { CartListRequest, CreateCartRequest, RemoveCartRequest } from '../apiRequest/apiRequest';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast';



const CartList = () => {
    const [loader, setLoader] = useState("d-none")
    const [data, setData] = useState([]);

    const [refresh, setRefresh] = useState(0);

    useEffect(()=> {
        (async ()=> {
            setLoader("")
            let res = await CartListRequest(); 
            if(res.length===0){
                window.location.href="/"
            }
            setLoader("d-none")
            setData(res);
            
        })()
    },[refresh])
    
    
    
    const removeCart = async (id)=> {
        let res = await RemoveCartRequest(id);
        if(res==="Success"){
            toast.success("Successfully Removed!")
            setRefresh(Math.random())
        }else{
            toast.error("Failed to Remove!")
        }
    }


    return (
        <div className="container">
            <br/>
          <div className="row">

                {
                    data.map((item, index)=> {
                        return(
                            <div key={index} className="col-md-3">
                                <div className="card mb-4 box-shadow">
                                <img
                                    className="card-img-top"
                                    src={item.product['image']}
                                    alt=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.product['title']}</h5>
                                    {/* <p className="card-text">{item.product['short_des']}</p> */}
                                    <h3>Price: {item.product['price']}</h3>
                                    <button onClick={()=>{removeCart(item['productid'])}} className='btn btn-danger'>Remove Cart</button>
                                </div>
                                </div>
                            </div>
                        );
                    })
                } 

          </div>
          <FullScreenLoader visibility={loader}/>
          <Toaster position='bottom-center'/>
        </div>
      );
};

export default CartList;