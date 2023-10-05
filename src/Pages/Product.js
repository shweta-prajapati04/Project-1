import React, { useEffect, useState } from 'react'
import '../product.css'
import { Link, useParams } from 'react-router-dom';

export const Product = () => {
    let { catagory } = useParams();
    let fetchApi = "";
    if (catagory != null && catagory != "") {
        fetchApi = `?catagory=${catagory}`
        console.log(catagory)
    }
    let [product, setProduct] = useState([]);
    const fetchData = async () => {
        let data = await fetch(`http://localhost:8090/products${fetchApi}`);
        let res = await data.json();
        setProduct(res)
        console.log(res)
        // .then((res) => console.log(res.data))
    }
    useEffect(() => {
        fetchData();
    }, [catagory])

    return (
        <div>
            <div className='col-md-10 mx-auto' >
                <div className='col-md-10  mx-auto'>
                    {
                        product.length > 0 && (<div className='products'>
                            {
                                product.map((item) => {
                                    return (
                                        <div className='product__single' key={item.id}>
                                            <Link className='linkp' to='/product'>
                                                <div className='image'>   <img src={item.imageurl} alt={item.title}></img></div>
                                                <div className='title'>{item.title}</div>
                                                <div className='price'> &#8377; {item.price}</div>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}