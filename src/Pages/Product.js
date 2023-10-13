import React, { useEffect, useState } from 'react'
import '../product.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { funFetchProduct } from '../redux/ProductReducer/Action';
import Accordion from 'react-bootstrap/Accordion';
import { Spinner } from 'react-bootstrap';

export const Product = () => {
    const catParam = useParams();
    let catagory = "";
    if (Object.keys(catParam).length > 0)
        catagory = catParam.catagory;
    const livejsonServer = "http://localhost:8090" //https://first-0kkt.onrender.com
    const [filterColor, setFilterColor] = useState({
        param: []
    });
    // const [totalPage, setTotalPage] = useState([]);
    // const [page, setPage] = useState(1);

    let fetchApi = "";
    let filter = "";
    
    if (catagory !== null && catagory !== "") {
        fetchApi = `?catagory=${catagory}`
    }
    if (filterColor.param.length > 0) {

        filter = filterColor.param;
        if (fetchApi == "")
            fetchApi = "?" + filter
        else
            fetchApi = fetchApi + filter
    }
    let dispatch = useDispatch();
    let { isError, isLoading, data } = useSelector((store) => store.ProductReducer)
    let [product, setProduct] = useState([]);

    const fetchData = () => {

        dispatch(funFetchProduct(fetchApi))


    }

    // const handlePagination = (currentPage) => {
    //     if (currentPage >= 1 && currentPage <= data.length / 10 && currentPage != page)
    //         setPage(currentPage)

    // }

    useEffect(() => {
        fetchData();
    }, [filterColor,catagory])

    const handleChange = (e) => {

        const { value, checked, name } = e.target;
        const { param } = filterColor;
        let query = "";
        if (name == "color")
            query = "&color=";
        else if (name == "size")
            query = "&size="
        else if (name == "catagory")
            query = "&catagory="

        if (checked) {
            setFilterColor({
                param: [...param, query + value],
            });
        }
        else {
            setFilterColor({
                param: param.filter((e) => e !== query + value),
            });
        }

    }

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
                                        <input type="checkbox" className='form-check-input' value='mens'
                                            name="catagory" onChange={handleChange} />
                                        <label className='form-check-label'>Men</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' value='womens'
                                            name="catagory" onChange={handleChange}
                                        />
                                        <label className='form-check-label'>Women</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className='form-check-input' value='kids'
                                            name="catagory" onChange={handleChange}
                                        />
                                        <label className='form-check-label'>Kids</label>
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header>Color</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter_color'>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='red'
                                                name="color" onChange={handleChange}
                                            />
                                            <label className='form-check-label'><div style={{ backgroundColor: "red" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='navy'
                                                name="color" onChange={handleChange}
                                            />
                                            <label className='form-check-label'><div style={{ backgroundColor: "navy" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='black'
                                                name="color" onChange={handleChange}
                                            />
                                            <label className='form-check-label'><div style={{ backgroundColor: "black" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='pink'
                                                name="color" onChange={handleChange}
                                            />
                                            <label className='form-check-label'><div style={{ backgroundColor: "pink" }}></div></label>
                                        </div>

                                        <div className="form-check">
                                            <input type="checkbox" onChange={handleChange} className='form-check-input' value='yellow'
                                                name="color" />
                                            <label className='form-check-label'><div style={{ backgroundColor: "yellow" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" onChange={handleChange} className='form-check-input' value='purple'
                                                name="color" />
                                            <label className='form-check-label'><div style={{ backgroundColor: "purple" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" onChange={handleChange} className='form-check-input' value='grey'
                                                name="color" />
                                            <label className='form-check-label'><div style={{ backgroundColor: "grey" }}></div></label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" onChange={handleChange} className='form-check-input' value='white'
                                                name="color" />
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
                                            <input type="checkbox" className='form-check-input' value='1'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>1</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='2'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>2</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='3'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>3</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='4'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>4</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='5'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>5</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='6'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>6</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='7'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>7</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='8'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>8</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='9'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>9</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value='10'
                                                name="size" onChange={handleChange}
                                            />
                                            <label className='form-check-label'>10</label>
                                        </div>

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='col-md-10  mx-auto'>
                        {
                            isError ? (<div className="alert alert-danger" role="alert">T
                                Some thing went wrong !
                            </div>
                            )
                                : null
                        }
                        {isLoading && !isError
                            ? (<div className='mt-5'><Spinner animation="grow" variant="success" />
                                <Spinner animation="grow" variant="danger" /></div>)
                            : null
                        }

                        {
                            
                            data.length > 0 && (<div className='products'>
                                {
                                    data.map((item) => {
                                        return (
                                            <div className='product__single' key={item.id}>
                                                <Link className='linkp' to={`/product/detail/${item.id}`}>
                                                    <div className='image'>  <img src={item.imageurl} alt={item.title}></img></div>
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
                        {/*{
                            data.length > 0 && <div className='pagination'>

                                <span className={page > 1 ? "":"Pagi_disable"}
                                 onClick={()=>handlePagination(page - 1)}>◀</span>



                                {[...Array(data.length / 10)].map((_, i) => {
                                    return <span onClick={()=>handlePagination(i + 1)} >{i + 1}</span>
                                })}
                                <span className={page< data.length/10 ? "":"Pagi_disable"}
                                onClick={()=>handlePagination(page + 1)}>▶</span>
                            </div>
                        }*/}
                    </div>
                </div>
            </div>
        </div>
    )
}