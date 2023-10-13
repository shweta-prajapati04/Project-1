
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Home = () => {
  let dispatch = useDispatch();
  let isLogin = useSelector((data) => data.Reducer.isLogin)

  return (
    <div >
      <div className='mx-auto' >

        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://www.campusshoes.com/cdn/shop/files/SANDALS_Desktop_Banner_1512x.jpg?v=1687182168"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.campusshoes.com/cdn/shop/files/School_SHOES_Desktop_Banner_cbf71cdd-ef00-4f06-8ca7-8432822c8f1d_1512x.jpg?v=1687181927"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.campusshoes.com/cdn/shop/files/Air_Capsule_pro_Collection_Desktop_Banner_1512x.jpg?v=1695384194"
              alt="Second slide"
            />

          </Carousel.Item>

        </Carousel>

      </div>

      <div className='col-md-10 mx-auto'>
        <section className="features-area ">
          <div className="container">
            <div className="row features-inner">

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                  <div className="f-icon">
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon1.png.webp" alt="" />
                  </div>
                  <h6>Free Delivery</h6>
                  <p>Free Shipping on all order</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                  <div className="f-icon">
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon1.png.webp" alt="" />
                  </div>
                  <h6>Return Policy</h6>
                  <p>Free Shipping on all order</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div class="single-features">
                  <div class="f-icon">
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon1.png.webp" alt="" />
                  </div>
                  <h6>24/7 Support</h6>
                  <p>Free Shipping on all order</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-features">
                  <div className="f-icon">
                    <img src="https://preview.colorlib.com/theme/karma/img/features/f-icon1.png.webp" alt="" />
                  </div>
                  <h6>Secure Payment</h6>
                  <p>Free Shipping on all order</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1 className='formtitle'>SHOP  BY CATEGORIES</h1>
        <div className=' col-md-12  grid_item'>

          <Link className="linkp " to='/product/mens'>
            <img className='hover_effect' src="https://assets.ajio.com/medias/sys_master/root/20230601/u7Kf/6478b55cd55b7d0c6330ef1a/puma-white-lace-ups-men-x-ray-grilion-lace-up-sneakers.jpg" atl="men"></img>
            <h4>MEN</h4>
          </Link>

          <Link className="linkp " to='/product/womens'>
            <img className='hover_effect' src="https://m.media-amazon.com/images/I/61sVvhMA++L.jpg" atl="men"></img>
            <h4>WOMEN</h4>
          </Link>

          <Link className="linkp" to='/product/kids'>
            <img className='hover_effect' src="https://images.footlocker.com/content/dam/final/kidsfootlocker/site/homepage/2023/september/230830-kfl-shop-by-brand-4up-refresh-nike.jpg" atl="men"></img>
            <h4>KIDS</h4>
          </Link>

        </div>

        <div className="col-md-12 mx-auto">
          <h1 className='formtitle'>New Arrival</h1>
          <div className='flex_arrival '>
            <div className='item clippath '>
            <Link to="/product">
              <img src="https://demo.templatesjungle.com/stylish/images/card-item6.jpg" alt="shoes"></img>
              </Link>
            </div>
            <div className='item clippath'>
            <Link to="/product">
              <img src="https://demo.templatesjungle.com/stylish/images/card-item7.jpg" alt="shoes"></img>
              </Link>
            </div>
            <div className='item clippath'>
            <Link to="/product">
              <img src="https://demo.templatesjungle.com/stylish/images/card-item8.jpg" alt="shoes"></img>
              </Link>
            </div>
            <div className='item clippath'>
            <Link to="/product">
              <img src="https://demo.templatesjungle.com/stylish/images/card-item9.jpg" alt="shoes"></img>
              </Link>
            </div>
            <div className='item clippath'>
            <Link to="/product">
              <img src="https://demo.templatesjungle.com/stylish/images/card-item10.jpg" alt="shoes"></img>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-12 mx-auto'>
          <h1 className='formtitle'>OFFERS</h1>
          <div className='grid_item2' >
            <img src="https://cdn.dribbble.com/users/1192538/screenshots/4245842/shoes2.gif" alt=""></img>
            <img src="https://i.pinimg.com/originals/eb/dd/03/ebdd035b560d6cc4483013b894544422.gif" alt=""></img>
          </div>
        </div>
      </div>
    </div>

  )
}
