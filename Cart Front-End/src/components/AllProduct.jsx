import React, { useEffect, useState } from 'react';
import { CreateCartRequest, ProductListRequest } from '../apiRequest/apiRequest';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast';
import { getToken } from '../utility/TokenHelper';


const AllProduct = () => {

    const [loader, setLoader] = useState("d-none")
    const [data, setData] = useState([]);

    useEffect(()=>{
        (async()=>{
            setLoader("")
            let res = await ProductListRequest();
            setLoader("d-none")
            setData(res);
            
        })()
    },[])

    
    const createCart = async (id)=> {
        if(getToken()){
            let res = await CreateCartRequest(id);
            if(res==="Success"){
                toast.success("Added to Cart!")
                setTimeout(()=> {
                    window.location.href="/cart"
                },2000)
            }else{
                toast.error("Failed to Add Cart!")
            }
        }else{
            window.location.href="/login"
        }
    }


    return (
        <div className="container">
            <br/>
          <div className="row">
            


            
                {
                    data.map((item,i)=> {
                        return(
                            <div key={i} className="col-md-3">
                                <div className="card mb-4 box-shadow">
                                <img 
                                    className="card-img-top"
                                    src={item['image']}
                                    alt={item['title']}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item['title']}</h5>
                                    {/* <p className="card-text">{item['short_des']}</p> */}
                                    <h3>Price: {item['price']}</h3>
                                    <button onClick={()=>{createCart(item['id'])}} className='btn btn-success'>Add to cart</button>
                                </div>
                                </div>
                          </div>
                        );
                    })
                }




          </div>
          <FullScreenLoader visibility={loader}/>
          <Toaster position="bottom-center"/>
        </div>
      );
};

export default AllProduct;