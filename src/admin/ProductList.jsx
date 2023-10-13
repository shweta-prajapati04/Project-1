import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const ProductList = () => {
    let isadmin = useSelector((data) => data.Reducer.user.isadmin)

    const livejsonServer = "http://localhost:8090"
    let [product, setProduct] = useState([]);
    let navigate = useNavigate();
    if (!isadmin) {
        navigate("/nopageaccess");
    }
    const [page, setPage] = useState(1);

    const fetchProduct = async () => {
        fetch(`${livejsonServer}/products/`)
            .then((res) => res.json())
            .then(json => {
                if (json.length > 0)
                    setProduct(json)

            })
    }
    useEffect(() => {
        fetchProduct();
    }, [product])
    const handlePagination = (currentPage) => {
        if (currentPage >= 1 && currentPage <= product.length / 10 && currentPage !== page)
            setPage(currentPage)

    }
    const handleDelete = (id) => {
        fetch(`${livejsonServer}/products/${id}`, {
            method: "DELETE",
        }).then(fetchProduct())

    }
    const handleUpdate = (id) => {
        navigate(`/masterproduct/${id}`)

    }
    return (

        <div>
            <div className='col-md-8 mx-auto'>
                <div className='alert' style={{ textAlign: "right" }}><Link style={{ color: "white", padding: "1rem", background: "#5e5758", textDecoration: "none" }} to="/masterproduct" >Add New Product</Link></div>
                {
                    product.length > 0 && (<table className='table table-sm table-striped' responsive ><thead><tr><th scope='col'>#</th>
                        <th scope='col'>Product</th> <th scope='col'>Price</th><th scope='col'>Color</th><th scope='col'>Category</th>
                        <th scope='col'>Update</th><th scope='col'>Delete</th>
                    </tr></thead><tbody>
                            {
                                product.slice(page * 10 - 10, page * 10).map((ele, index) => {
                                    return (

                                        <tr key={ele.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                {ele.title}
                                            </td>
                                            <td>
                                                {ele.price}
                                            </td>
                                            <td>
                                                <div style={{ background: ele.color, padding: "5px", border: "1px solid grey" }}></div>
                                            </td>
                                            <td>
                                                <div className='text-center'> {ele.catagory}</div>
                                            </td>
                                            <td>
                                                <button className='btn btn-outline-success' onClick={() => handleUpdate(ele.id)}  >Update</button>
                                            </td>
                                            <td>
                                                <button className='btn btn-outline-danger' onClick={() => handleDelete(ele.id)}  >Delete</button>
                                            </td>
                                        </tr>


                                    )
                                })

                            } </tbody></table>)
                }
                {
                    product.length > 0 &&
                    <div className='pagination'>

                        <span className={page > 1 ? "" : "Pagi_disable"}
                            onClick={() => handlePagination(page - 1)}>◀</span>



                        {[...Array(product.length / 10)].map((_, i) => {
                            return <span className={page == i + 1 ? "Page_Selected" : ""}
                                onClick={() => handlePagination(i + 1)} >{i + 1}</span>
                        })}
                        <span className={page < product.length / 10 ? "" : "Pagi_disable"}
                            onClick={() => handlePagination(page + 1)}>▶</span>
                    </div>
                }
            </div>
        </div >
    )
}
