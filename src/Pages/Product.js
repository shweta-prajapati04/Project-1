import React, { useEffect, useState } from 'react'
import '../product.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { funFetchProduct } from '../redux/ProductReducer/Action';
import Accordion from 'react-bootstrap/Accordion';
import { Spinner } from 'react-bootstrap';

export const Product = () => {
    let { catagory } = useParams();
    let fetchApi = "";
    if (catagory != null && catagory != "") {
        fetchApi = `?catagory=${catagory}`
        //console.log(catagory)
    }
    let dispatch = useDispatch();
    let storeData = useSelector((store) => store.ProductReducer)
    let [product, setProduct] = useState([]);

    const fetchData = () => {
        dispatch(funFetchProduct)
        setProduct(storeData.data);

    }
    useEffect(() => {
        fetchData();
    }, [product])


    return (
        <div>
            <div className='col-md-10 mx-auto' >
                <div className='flex_box'>
                    <div className='col-md-3  mx-auto sidebar'>
                        <h4 className=''>Filter</h4>
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>catagory</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' value='mens' />
                                        <label className='form-check-label'>Men</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' value='women' />
                                        <label className='form-check-label'>Women</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' value='kids' />
                                        <label className='form-check-label'>Kids</label>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header>Color</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter_color'>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "red" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "navy" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "black" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "pink" }}></div></label>
                                        </div>

                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "yellow" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "purple" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "orange" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red' />
                                            <label className='form-check-label'><div style={{ backgroundColor: "white" }}></div></label>
                                        </div>

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" >
                                <Accordion.Header>Size</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter_size'>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='1' />
                                            <label className='form-check-label'>1</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='2' />
                                            <label className='form-check-label'>2</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='3' />
                                            <label className='form-check-label'>3</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='4' />
                                            <label className='form-check-label'>4</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='5' />
                                            <label className='form-check-label'>5</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='6' />
                                            <label className='form-check-label'>6</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='7' />
                                            <label className='form-check-label'>7</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='8' />
                                            <label className='form-check-label'>8</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='9' />
                                            <label className='form-check-label'>9</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='10' />
                                            <label className='form-check-label'>10</label>
                                        </div>

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='col-md-10  mx-auto'>
                        {
                            storeData.isError ? (<div className="alert alert-danger" role="alert">T
                                Some thing went wrong !
                            </div>
                            )
                                : null
                        }
                        {storeData.isLoading && !storeData.isError
                            ? (<div className='mt-5'><Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" /></div>)
                            : null
                        }

                        {
                            storeData.data.length > 0 && (<div className='products'>
                                {
                                    storeData.data.map((item) => {
                                        return (
                                            <div className='product__single' key={item.id}>
                                                <Link className='linkp' to='/product'>
                                                    <div className='image'>   <img src={item.imageurl} alt={item.title}></img></div>
                                                    <div className='title'>{item.title}</div>
                                                    <div className='price text-center'> &#8377; {item.price}</div>
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
        </div>
    )
}