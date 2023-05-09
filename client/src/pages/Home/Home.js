import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getListType } from '../../redux/action/brandAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetListPhoneAction, GetPhoneIdTypeAction } from '../../redux/action/phoneAction';
import Swal from 'sweetalert2'
export default function Home () {
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

    const renderProduct = arrPhone?.map((item, index) => {
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
                <div className="container">
                    <h2 className="title text-center mb-4">Explore Popular Categories</h2>{/* End .title text-center */}
                    <div className="cat-blocks-container">
                        <div className="row">
                            {arrType?.slice(0, 6).map((item, index) => {
                                return <div className="col-6 col-sm-4 col-lg-2">
                                    <a href="category.html" className="cat-block">
                                        <figure style={{ height: '100px!important' }}>
                                            <span style={{ height: '100px!important' }}>
                                                <img src={item.image} style={{ height: '100px!important' }} alt="Category image" />
                                            </span>
                                        </figure>
                                        <h3 className="cat-block-title">{item.name}</h3>{/* End .cat-block-title */}
                                    </a>
                                </div>
                            })}

                        </div>{/* End .row */}
                    </div>{/* End .cat-blocks-container */}
                </div>{/* End .container */}
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
                            {arrPhone?.slice(0, 4).map((item, index) => {
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
                <div className="mb-6" />{/* End .mb-6 */}
                <div className="container">
                    <div className="cta cta-border mb-5" style={{ backgroundImage: 'url(assets/images/demos/demo-4/bg-1.jpg)' }}>
                        <img src="assets/images/demos/demo-4/camera.png" alt="camera" className="cta-img" />
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="cta-content">
                                    <div className="cta-text text-right text-white">
                                        <p>Shop Today’s Deals <br /><strong>Awesome Made Easy. HERO7 Black</strong></p>
                                    </div>{/* End .cta-text */}
                                    <a href="#" className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right" /></a>
                                </div>{/* End .cta-content */}
                            </div>{/* End .col-md-12 */}
                        </div>{/* End .row */}
                    </div>{/* End .cta */}
                </div>{/* End .container */}
                <div className="container">
                    <div className="heading text-center mb-3">
                        <h2 className="title">Deals &amp; Outlet</h2>{/* End .title */}
                        <p className="title-desc">Today’s deal and more</p>{/* End .title-desc */}
                    </div>{/* End .heading */}
                    <div className="row">
                        <div className="col-lg-6 deal-col">
                            <div className="deal" style={{ backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-1.jpg")' }}>
                                <div className="deal-top">
                                    <h2>Deal of the Day.</h2>
                                    <h4>Limited quantities. </h4>
                                </div>{/* End .deal-top */}
                                <div className="deal-content">
                                    <h3 className="product-title"><a href="product.html">Home Smart Speaker with  Google Assistant</a></h3>{/* End .product-title */}
                                    <div className="product-price">
                                        <span className="new-price">$129.00</span>
                                        <span className="old-price">Was $150.99</span>
                                    </div>{/* End .product-price */}
                                    <a href="product.html" className="btn btn-link"><span>Shop Now</span><i className="icon-long-arrow-right" /></a>
                                </div>{/* End .deal-content */}
                                <div className="deal-bottom">
                                    <div className="deal-countdown daily-deal-countdown" data-until="+10h" />{/* End .deal-countdown */}
                                </div>{/* End .deal-bottom */}
                            </div>{/* End .deal */}
                        </div>{/* End .col-lg-6 */}
                        <div className="col-lg-6 deal-col">
                            <div className="deal" style={{ backgroundImage: 'url("assets/images/demos/demo-4/deal/bg-2.jpg")' }}>
                                <div className="deal-top">
                                    <h2>Your Exclusive Offers.</h2>
                                    <h4>Sign in to see amazing deals.</h4>
                                </div>{/* End .deal-top */}
                                <div className="deal-content">
                                    <h3 className="product-title"><a href="product.html">Certified Wireless Charging  Pad for iPhone / Android</a></h3>{/* End .product-title */}
                                    <div className="product-price">
                                        <span className="new-price">$29.99</span>
                                    </div>{/* End .product-price */}
                                    <a href="login.html" className="btn btn-link"><span>Sign In and Save money</span><i className="icon-long-arrow-right" /></a>
                                </div>{/* End .deal-content */}
                                <div className="deal-bottom">
                                    <div className="deal-countdown offer-countdown" data-until="+11d" />{/* End .deal-countdown */}
                                </div>{/* End .deal-bottom */}
                            </div>{/* End .deal */}
                        </div>{/* End .col-lg-6 */}
                    </div>{/* End .row */}
                    <div className="more-container text-center mt-1 mb-5">
                        <a href="#" className="btn btn-outline-dark-2 btn-round btn-more"><span>Shop more Outlet deals</span><i className="icon-long-arrow-right" /></a>
                    </div>{/* End .more-container */}
                </div>{/* End .container */}
                <div className="container">
                    <hr className="mb-0" />
                    <div className="owl-carousel mt-5 mb-5 owl-simple" data-toggle="owl" data-owl-options="{
                  &quot;nav&quot;: false, 
                  &quot;dots&quot;: false,
                  &quot;margin&quot;: 30,
                  &quot;loop&quot;: false,
                  &quot;responsive&quot;: {
                      &quot;0&quot;: {
                          &quot;items&quot;:2
                      },
                      &quot;420&quot;: {
                          &quot;items&quot;:3
                      },
                      &quot;600&quot;: {
                          &quot;items&quot;:4
                      },
                      &quot;900&quot;: {
                          &quot;items&quot;:5
                      },
                      &quot;1024&quot;: {
                          &quot;items&quot;:6
                      }
                  }
              }">
                        <a href="#" className="brand">
                            <img src="assets/images/brands/1.png" alt="Brand Name" />
                        </a>
                        <a href="#" className="brand">
                            <img src="assets/images/brands/2.png" alt="Brand Name" />
                        </a>
                        <a href="#" className="brand">
                            <img src="assets/images/brands/3.png" alt="Brand Name" />
                        </a>
                        <a href="#" className="brand">
                            <img src="assets/images/brands/4.png" alt="Brand Name" />
                        </a>
                        <a href="#" className="brand">
                            <img src="assets/images/brands/5.png" alt="Brand Name" />
                        </a>
                        <a href="#" className="brand">
                            <img src="assets/images/brands/6.png" alt="Brand Name" />
                        </a>
                    </div>{/* End .owl-carousel */}
                </div>{/* End .container */}

                <div className="mb-5" />{/* End .mb-5 */}
                <div className="container for-you">
                    <div className="heading heading-flex mb-3">
                        <div className="heading-left">
                            <h2 className="title">Recommendation For You</h2>{/* End .title */}
                        </div>{/* End .heading-left */}
                        <div className="heading-right">
                            <a href="#" className="title-link">View All Recommendadion <i className="icon-long-arrow-right" /></a>
                        </div>{/* End .heading-right */}
                    </div>{/* End .heading */}
                    <div className="products">
                        <div className="row justify-content-center">
                            {arrPhone?.map((item, index) => {
                                return <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-2">
                                        <figure className="product-media">

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
                                                        item: item
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
                                                <a href="#">{item.brand?.name}</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><NavLink to={`/detail/${item.id}`}>{item.name}</NavLink></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">${item.price}</span>
                                            </div>{/* End .product-price */}

                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>
                            })}

                        </div>{/* End .row */}
                    </div>{/* End .products */}
                </div>{/* End .container */}
                <div className="mb-4" />{/* End .mb-4 */}
                <div className="container">
                    <hr className="mb-0" />
                </div>{/* End .container */}
                <div className="icon-boxes-container bg-transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rocket" />
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
                                        <p>Orders $50 or more</p>
                                    </div>{/* End .icon-box-content */}
                                </div>{/* End .icon-box */}
                            </div>{/* End .col-sm-6 col-lg-3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rotate-left" />
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
                                        <p>Within 30 days</p>
                                    </div>{/* End .icon-box-content */}
                                </div>{/* End .icon-box */}
                            </div>{/* End .col-sm-6 col-lg-3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-info-circle" />
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* End .icon-box-title */}
                                        <p>when you sign up</p>
                                    </div>{/* End .icon-box-content */}
                                </div>{/* End .icon-box */}
                            </div>{/* End .col-sm-6 col-lg-3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-life-ring" />
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
                                        <p>24/7 amazing services</p>
                                    </div>{/* End .icon-box-content */}
                                </div>{/* End .icon-box */}
                            </div>{/* End .col-sm-6 col-lg-3 */}
                        </div>{/* End .row */}
                    </div>{/* End .container */}
                </div>{/* End .icon-boxes-container */}
            </div >
        </main >
    )
}
