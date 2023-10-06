
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Home = () => {
  let dispatch = useDispatch();
  let isLogin = useSelector((data) => data.Reducer.isLogin)

  return (
    <div >
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Forever_Sneakers_banners_1600x584.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/AyushMaan_NitPro_1600x584.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className='col-md-10 mx-auto'>
        <br>
        </br>
        <h1 className='formtitle'>SHOP  BY CATEGORIES</h1>
        <div className='grid_item'>
          <div>
            <Link className="linkp" to='/product/mens'>
              <img src="https://assets.ajio.com/medias/sys_master/root/20230601/u7Kf/6478b55cd55b7d0c6330ef1a/puma-white-lace-ups-men-x-ray-grilion-lace-up-sneakers.jpg" atl="men"></img>
              <h4>MEN</h4>
            </Link>
          </div>
          <div>
            <Link className="linkp" to='/product/womens'>
              <img src="https://m.media-amazon.com/images/I/61sVvhMA++L.jpg" atl="men"></img>
              <h4>WOMEN</h4>
            </Link>
          </div>
          <div>
            <Link className="linkp" to='/product/kids'>
              <img src="https://images.footlocker.com/content/dam/final/kidsfootlocker/site/homepage/2023/september/230830-kfl-shop-by-brand-4up-refresh-nike.jpg" atl="men"></img>
              <h4>KIDS</h4>
            </Link>
          </div>
        </div>
        <div className='col-md-10 mx-auto'>
          <h1 className='formtitle'>OFFERS</h1>
          <div className='grid_item2'>
          <div>
            <img src="https://i.pinimg.com/originals/4a/01/78/4a0178638eb269a35c45f021389b16dd.gif" alt="shoes"></img>
            </div>
            <div>
            <img src="https://png.pngtree.com/template/20221207/ourmid/pngtree-sale-shoes-banner-image_1920082.jpg" alt="shoes"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
