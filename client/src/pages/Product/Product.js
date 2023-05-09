import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getListType } from '../../redux/action/brandAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetListPhoneAction, GetPhoneIdTypeAction } from '../../redux/action/phoneAction';
import Swal from 'sweetalert2'
export default function Product () {
    const dispatch = useDispatch();
    const { arrType } = useSelector(root => root.brandReducer);
    const { arrPhone } = useSelector(root => root.phoneReducer);
    useEffect(() => {
        const action = getListType();
        dispatch(action)
        const action1 = GetListPhoneAction();
        dispatch(action1)
    }, []);
    console.log(arrPhone);

    const renderProduct = arrPhone.map((item, index) => {
        return <div className="product product-2">
            <figure className="product-media">
                <span className="product-label label-circle label-top">Top</span>
                <NavLink to={`/detail/${item.id}`}>
                    <img src="assets/images/demos/demo-4/products/product-6.jpg" alt="Product image" className="product-image" />
                </NavLink>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                </div>{/* End .product-action */}
                <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                </div>{/* End .product-action */}
            </figure>{/* End .product-media */}
            <div className="product-body">
                <div className="product-cat">
                    <a href="#">Headphones</a>
                </div>{/* End .product-cat */}
                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                <div className="product-price">
                    $199.99
                </div>{/* End .product-price */}
                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={{ width: '100%' }} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                </div>{/* End .rating-container */}
                <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: '#69b4ff' }}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{ background: '#ff887f' }}><span className="sr-only">Color name</span></a>
                    <a href="#" className="active" style={{ background: '#333333' }}><span className="sr-only">Color name</span></a>
                </div>{/* End .product-nav */}
            </div>{/* End .product-body */}
        </div>
    })


    return (
        <main className="main" >
            <div className="intro-slider-container mb-5">
                <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options="{
      &quot;dots&quot;: true,
      &quot;nav&quot;: false, 
      &quot;responsive&quot;: {
          &quot;1200&quot;: {
              &quot;nav&quot;: true,
              &quot;dots&quot;: false
          }
      }
  }">
                    <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-4/slider/slide-1.png)' }}>
                        <div className="container intro-content">
                            <div className="row justify-content-end">
                                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                                    <h3 className="intro-subtitle text-third">Deals and Promotions</h3>{/* End .h3 intro-subtitle */}
                                    <h1 className="intro-title">Beats by</h1>
                                    <h1 className="intro-title">Dre Studio 3</h1>{/* End .intro-title */}
                                    <div className="intro-price">
                                        <sup className="intro-old-price">$349,95</sup>
                                        <span className="text-third">
                                            $279<sup>.99</sup>
                                        </span>
                                    </div>{/* End .intro-price */}
                                    <a href="category.html" className="btn btn-primary btn-round">
                                        <span>Shop More</span>
                                        <i className="icon-long-arrow-right" />
                                    </a>
                                </div>{/* End .col-lg-11 offset-lg-1 */}
                            </div>{/* End .row */}
                        </div>{/* End .intro-content */}
                    </div>{/* End .intro-slide */}
                    <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-4/slider/slide-2.png)' }}>
                        <div className="container intro-content">
                            <div className="row justify-content-end">
                                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                                    <h3 className="intro-subtitle text-primary">New Arrival</h3>{/* End .h3 intro-subtitle */}
                                    <h1 className="intro-title">Apple iPad Pro <br />12.9 Inch, 64GB </h1>{/* End .intro-title */}
                                    <div className="intro-price">
                                        <sup>Today:</sup>
                                        <span className="text-primary">
                                            $999<sup>.99</sup>
                                        </span>
                                    </div>{/* End .intro-price */}
                                    <a href="category.html" className="btn btn-primary btn-round">
                                        <span>Shop More</span>
                                        <i className="icon-long-arrow-right" />
                                    </a>
                                </div>{/* End .col-md-6 offset-md-6 */}
                            </div>{/* End .row */}
                        </div>{/* End .intro-content */}
                    </div>{/* End .intro-slide */}
                </div>{/* End .intro-slider owl-carousel owl-simple */}
                <span className="slider-loader" />{/* End .slider-loader */}
            </div>{/* End .intro-slider-container */}



            <div>

                <div className="mb-4" />{/* End .mb-4 */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="banner banner-overlay banner-overlay-light">
                                <a href="#">
                                    <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="Banner" />
                                </a>
                                <div className="banner-content">
                                    <h4 className="banner-subtitle"><a href="#">Smart Offer</a></h4>{/* End .banner-subtitle */}
                                    <h3 className="banner-title"><a href="#">Save $150 <strong>on Samsung <br />Galaxy Note9</strong></a></h3>{/* End .banner-title */}
                                    <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                                </div>{/* End .banner-content */}
                            </div>{/* End .banner */}
                        </div>{/* End .col-md-4 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="banner banner-overlay banner-overlay-light">
                                <a href="#">
                                    <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner" />
                                </a>
                                <div className="banner-content">
                                    <h4 className="banner-subtitle"><a href="#">Time Deals</a></h4>{/* End .banner-subtitle */}
                                    <h3 className="banner-title"><a href="#"><strong>Bose SoundSport</strong> <br />Time Deal -30%</a></h3>{/* End .banner-title */}
                                    <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                                </div>{/* End .banner-content */}
                            </div>{/* End .banner */}
                        </div>{/* End .col-md-4 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="banner banner-overlay banner-overlay-light">
                                <a href="#">
                                    <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="Banner" />
                                </a>
                                <div className="banner-content">
                                    <h4 className="banner-subtitle"><a href="#">Clearance</a></h4>{/* End .banner-subtitle */}
                                    <h3 className="banner-title"><a href="#"><strong>GoPro - Fusion 360</strong> <br />Save $70</a></h3>{/* End .banner-title */}
                                    <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
                                </div>{/* End .banner-content */}
                            </div>{/* End .banner */}
                        </div>{/* End .col-lg-4 */}
                    </div>{/* End .row */}
                </div>{/* End .container */}
                <div className="mb-3" />{/* End .mb-5 */}
                <div className="container new-arrivals">
                    <div className="heading heading-flex mb-3">
                        <div className="heading-left">
                            <h2 className="title">New Phone</h2>{/* End .title */}
                        </div>{/* End .heading-left */}
                        <div className="heading-right">
                            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                <li className="nav-item" onClick={() => {
                                    const action1 = GetListPhoneAction();
                                    dispatch(action1)
                                }}>
                                    <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                                </li>

                                {arrType?.map((item, index) => {
                                    return <li className="nav-item" key={index} onClick={() => {
                                        console.log(item.id);
                                        const action = GetPhoneIdTypeAction(item.id);
                                        dispatch(action)
                                    }}>
                                        <a className="nav-link" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">{item.name}</a>
                                    </li>
                                })}


                            </ul>
                        </div>{/* End .heading-right */}

                    </div>{/* End .heading */}
                    <div className="products">
                        <div className="row justify-content-center">
                            {arrPhone.map((item, index) => {
                                return <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-2">
                                        <figure className="product-media">
                                            <span className="product-label label-circle label-sale">Top</span>
                                            <NavLink to={`/detail/${item.id}`}>
                                                <img src={item.image_url} alt="Product image" className="product-image" />
                                            </NavLink>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist" />
                                            </div>{/* End .product-action */}
                                            <div className="product-action">
                                                <div style={{ cursor: 'pointer' }} className="btn-product btn-cart" title="Add to cart" onClick={() => {
                                                    const action = {
                                                        type: "ADD_TO_CART",
                                                        item
                                                    }
                                                    dispatch(action)
                                                    const Toast = Swal.mixin({
                                                        toast: true,
                                                        position: 'top-end',
                                                        showConfirmButton: false,
                                                        timer: 3000,
                                                        timerProgressBar: true,
                                                        didOpen: (toast) => {
                                                            toast.addEventListener('mouseenter', Swal.stopTimer)
                                                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                                                        }
                                                    })

                                                    Toast.fire({
                                                        icon: 'success',
                                                        title: `Add Product ${item.name} to Cart Successfully`
                                                    })
                                                }}><span>add to cart</span></div>
                                                <NavLink style={{ cursor: 'pointer' }} to={`/detail/${item.id}`} className="btn-product btn-quickview" title="Quick view"><span>quick view</span></NavLink>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <p>{item.brand?.name}</p>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><NavLink to={`/detail/${item.id}`}>{item.name}</NavLink></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">${item.price}</span>
                                            </div>{/* End .product-price */}
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: '40%' }} />{/* End .ratings-val */}
                                                </div>{/* End .ratings */}
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>{/* End .rating-container */}

                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>
                            })}

                        </div>{/* End .row */}
                    </div>
                </div>{/* End .container */}

            </div >
        </main >
    )
}
