import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

export const Cart = () => {
    let userid = useSelector((store) => store.Reducer.user.id);
    let [data, setData] = useState([])
    let navigate=useNavigate();
    //let [total, setTotal] = useState(0)
    let total = 0;
    const getCartData = () => {
        axios.get(`http://localhost:8090/cart?userid=${userid}`).
            then((res) => setData(res.data)).catch((error) => console.log(error))
    }
    const handleOrder = () => {
       data.forEach((ele) => {
            axios.delete(`https://first-0kkt.onrender.com/cart/${ele.id}`)
                .then((res) =>{
                    navigate("/orderplaced")
                } )
        })

    }
    useEffect(() => {
        getCartData();
        console.log(data);
    }, [])
    return (
        <div className='col-md-10 mx-auto '>
            <h6 className='formtitle'>My Cart</h6>
            <div className='flex_box' style={{ background: "white" }} >
                <div className='col-md-7' >
                    {
                        data.length > 0 && (<div className='cart_grid'>
                            {

                                data.map((ele) => {
                                    total += Number(ele.price);
                                    return (<div className='item'>

                                        <div className='divimg col-md-2 mx-auto'>  <img className='thumbnail' src={ele.imageurl} alt={ele.title}></img></div>
                                        <div className='col-md-10 mx-auto' style={{ display: "flow-root", padding: "0px 0px 0px 15px" }}>
                                            <h5>{ele.title}</h5>
                                            <h4>{ele.price}</h4>
                                            <h6>Qty:{ele.qty}</h6>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>)
                    }
                    <div className='col-md-5'>
                        <br></br>
                        <Link to="/product" className='linkp' >  <button className='btn_cart' >CONTINUE SHOPPING</button></Link>
                    </div>
                </div>
                {userid == null ? "" : (
                    <div className='col-md-4 mx-auto div_total'>
                        <div className='head'>PRICE DETAIL</div>
                        <div>
                            <h5> Price: ({data.length} Item)<span className='rightxt'>  &#8377; {total} </span></h5>
                            <h5> Discount:  <span className='rightxt'> -&#8377; 500 </span></h5>
                            <h5> Delivery Chagrges:  <span className='rightxt'> Free </span></h5>
                            <h5 style={{ border: "1px dotted gray" }}> <b>Total Amount:</b> <span className='rightxt'> &#8377; {total - 500} </span> </h5>
                            <button onClick={handleOrder} className='btn_order' >PLACE ORDER</button>
                        </div>
                    </div>)}
            </div>


        </div >
    )
}
