import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export const ProductDetail = () => {
    let { id } = useParams();
    let [data, setData] = useState("")
    let [quantity, setQuantity] = useState(1)
    let userId = useSelector((stor) => stor.Reducer.user.id)
    let navigate = useNavigate();

    const fetchProductDetail = () => {
        axios.get(`http://localhost:8090/products/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => console.log(error))
    }
    const handleCart = () => {
        let objcart = { ...data, qty: quantity, userid: userId }
        axios.get(`http://localhost:8090/cart?id=${data.id}&userid=${userId}`)
            .then((res) => {
                if (res.data.length <= 0) {
                    axios.post("http://localhost:8090/cart", objcart)
                        .then((res) => {
                            alert("Product added in cart")

                        })
                }
                else {
                    alert("Product alredy  present in cart")
                }
            })

    }
    useEffect(() => {
        if (userId == null)
            navigate("/login")
        fetchProductDetail();

    }, [])
    return (
        <div>
            <div className='col-md-10 mx-auto ' >
                <div className='flex_box '>
                    <div className='col-md-5 mx auto' >
                        <div className='detail_image'>
                            <img src={data.imageurl} alt={data.title} ></img>
                        </div>
                    </div>
                    <div className='col-md-7 mx auto detail_block'>
                        <h3 className='text-left title'>{data.title}</h3>
                        <h2 className='text-left'> &#8377;{data.price}</h2>
                        <div className='divfeature text-left'><div className='tag' >Select Size:</div>{data.size}</div>
                        <div className='divfeature text-left' > <div className='tag '>Color:</div><span className='divcolor' style={{ background: `${data.color}` }}></span></div>
                        <div className='divfeature text-left' ><span className='tag'>More Informaion</span>
                            <p>{data.description} </p></div>
                        <div>
                            <div className='tag' >Quantity</div>
                            <div className='text-left alert alert-warning'  >
                                <button className='btnqty' onClick={() => setQuantity(quantity + 1)} >+</button>
                                <input className='inputqty' disabled value={quantity} type="number" onChange={(e) => setQuantity(e.target.value)} ></input>
                                <button className='btnqty' onClick={() => quantity > 1 ? setQuantity(quantity - 1) : quantity}>-</button>
                            </div>
                        </div>
                        <div className=' col-md-5 mx-auto div_cart'>
                            <button onClick={handleCart} className='btn_cart' >ADD TO CART</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
