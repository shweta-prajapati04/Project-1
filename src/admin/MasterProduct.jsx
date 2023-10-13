import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link,  useNavigate, useParams, } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const MasterProduct = () => {
  let isadmin = useSelector((data) => data.Reducer.isadmin)


  const updateParam = useParams();
  const isUpdateid = Object.keys(updateParam).length;
  const livejsonServer = "http://localhost:8090"//https://first-0kkt.onrender.com"
  let navigate = useNavigate();
  if (isadmin)
    navigate("/nopageaccess");
  let [catagory, setCatagory] = useState("")
  let [name, setName] = useState("")
  let [imgurl, setImgUrl] = useState("")
  let [size, setSize] = useState("");
  let [color, setColor] = useState("")
  let [price, setPrice] = useState("")
  let [isnew, setIsNew] = useState(false);

  const addProduct = async (Product) => {

    fetch(`${livejsonServer}/products/`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(Product)
    }).then((rr) => navigate("/productlist"))

    //
  }
  const fetchProduct = () => {
    if (isUpdateid > 0) {
      fetch(`${livejsonServer}/products?id=${updateParam.pid}`)
        .then((res) => res.json())
        .then(json => {
          if (json.length > 0) {
            setCatagory(json[0].catagory);
            setName(json[0].title)
            setPrice(json[0].price)
            setSize(json[0].size)
            setColor(json[0].color)
            setImgUrl(json[0].imageurl)
            setIsNew(json[0].isnew)
          }
        })
    }
  }
  const updateProduct = (product) => {
    fetch(`${livejsonServer}/products/${updateParam.pid}`, {
      headers: { "content-type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(product)
    }).then(navigate("/productlist"))
  }

  useEffect(() => {
    fetchProduct();
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isnew)
    let prd = { catagory: catagory, title: name, price: price, size: size, imageurl: imgurl, color: color, isnew: isnew }

    if (isUpdateid > 0) {
      console.log("f")
      updateProduct(prd);
    }
    else {

      addProduct(prd);
    }


  }


  return (
    <div>
      <div className='col-md-7 mx-auto'>
        <form onSubmit={handleSubmit}>
          <table className='table'>
            <tr>
              <td>
                Product Catagory:
              </td>
              <td>
                <select required className='form-control mb-2' value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
                  name="catagory" id="catagory">
                  <option value="">Select</option>
                  <option value="mens">Mens</option>
                  <option value="womens">Womens</option>
                  <option value="kids">kids</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                Product Name:
              </td>
              <td>
                <input required type="text" className='form-control mb-2' value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                Product Price:
              </td>
              <td>
                <input required type="number" className='form-control mb-2' value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                Product ImageURL:
              </td>
              <td>
                <input type="text" className='form-control mb-2' onChange={(e) => setImgUrl(e.target.value)}
                  value={imgurl}
                ></input>

              </td>
            </tr>
            <tr>
              <td>
                Product Size:
              </td>
              <td>
                <select required className='form-control mb-2' value={size}
                  onChange={(e) => setSize(e.target.value)}
                  name="size" id="size">
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                Product Color:
              </td>
              <td>
                <select required className='form-control mb-2' value={color}
                  onChange={(e) => setColor(e.target.value)}
                  name="color" id="color">
                  <option value="">Select</option>
                  <option value="red">red</option>
                  <option value="navy">navy</option>
                  <option value="black">black</option>
                  <option value="grey">grey</option>
                  <option value="pink">pink</option>
                  <option value="yellow">yellow</option>
                  <option value="purple">purple</option>
                  <option value="white">white</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                New Arrival:
              </td>
              <td>
                <input type="checkbox" className='form-check-input mb-5' value={isnew}
                  onChange={(e) => setIsNew(e.target.value)}
                /><label> New Arrival </label>
              </td>
            </tr>
            <tr>
              <td>

              </td>
              <td>
                <img src={imgurl} alt="product" height="100px" width="100px" />
              </td>
            </tr>
            <tr>
              <td colSpan="6" className='text-center'>
                <input style={{ color: "black" }} type="submit" className='btn btn-outline-danger' ></input>
                <span stye={{ padding: "10px" }}> <Link className='btn btn-dark' to="/productlist">Cancle</Link> </span>
              </td>
            </tr>
          </table>
        </form>
      </div >
    </div >
  )
}
