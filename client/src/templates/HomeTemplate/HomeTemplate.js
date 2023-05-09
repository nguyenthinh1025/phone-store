import { Fragment } from "react";
import { NavLink, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";



export const HomeTemplate = (props) => {
    const { username, user } = useSelector(root => root.authReducer)
    console.log(username);
    const { arrOrder, history } = useSelector(root => root.orderReducer)
    const dispatch = useDispatch()
    const total = arrOrder?.reduce((a, b) => a + b.price * b.sl, 0)
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <div className="page-wrapper">
                <header className="header header-intro-clearance header-4">
                    <div className="header-top">
                        <div className="container" style={{ padding: '5px 0' }}>
                            <div className="header-left">
                                <a href="tel:#"><i className="icon-phone" />Call: +0123 456 789</a>
                            </div>{/* End .header-left */}
                            <div className="header-right">
                                <ul className="top-menu">
                                    <li>

                                        <ul>

                                            <li>{localStorage.getItem('username') === '' ? <a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a> : <div>Xin Chào : <span style={{ color: 'red' }}>{username} </span>/ <span style={{ cursor: 'pointer' }} onClick={() => {
                                                dispatch({
                                                    type: "LOGOUT"
                                                })
                                                const action = {
                                                    type: "LOGOU1"
                                                }
                                                dispatch(action)
                                            }}> Logout</span></div>}</li>
                                        </ul>
                                    </li>
                                </ul>{/* End .top-menu */}
                            </div>{/* End .header-right */}
                        </div>{/* End .container */}
                    </div>{/* End .header-top */}
                    <div className="header-middle">
                        <div className="container">
                            <div className="header-left">
                                <button className="mobile-menu-toggler">
                                    <span className="sr-only">Toggle mobile menu</span>
                                    <i className="icon-bars" />
                                </button>
                                <NavLink to='/' className="logo">
                                    <img src="assets/images/demos/demo-4/logo.png" alt="Molla Logo" width={105} height={25} />
                                </NavLink>
                            </div>{/* End .header-left */}
                            <div className="header-center">
                                <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                                    <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper search-wrapper-wide">
                                            <label htmlFor="q" className="sr-only">Search</label>
                                            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                                            <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                        </div>{/* End .header-search-wrapper */}
                                    </form>
                                </div>{/* End .header-search */}
                            </div>
                            <div className="header-right">

                                <div className="wishlist">
                                    <NavLink to={`/history/${user?.user?.customer_phone}`} title="Wishlist">
                                        <div className="icon">
                                            <i className="icon-heart-o" />
                                            <span className="wishlist-count badge">{history.length}</span>
                                        </div>
                                        <p>History Order</p>
                                    </NavLink>
                                </div>{/* End .compare-dropdown */}
                                <div className="dropdown cart-dropdown">
                                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }} className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <div className="icon">
                                            <i className="icon-shopping-cart" />
                                            <span className="cart-count">{arrOrder?.length}</span>
                                        </div>
                                        <p>Cart</p>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-cart-products">
                                            {arrOrder?.map((item, index) => {
                                                return <div className="product" key={index}>
                                                    <div className="product-cart-details">
                                                        <h4 className="product-title">
                                                            <div>{item.name}</div>
                                                        </h4>
                                                        <span className="cart-product-info">
                                                            <span className="cart-product-qty" style={{ paddingRight: '5px' }}>{item.sl} </span>
                                                            x ${item.price}
                                                        </span>
                                                    </div>{/* End .product-cart-details */}
                                                    <figure className="product-image-container">
                                                        <div className="product-image">
                                                            <img src={item.image_url} alt="product" />
                                                        </div>
                                                    </figure>
                                                    <div className="btn-remove" title="Remove Product" onClick={() => {
                                                        const action = {
                                                            type: "REMOVE_ITEM",
                                                            item
                                                        }
                                                        dispatch(action)
                                                    }}><i className="icon-close" /></div>
                                                </div>
                                            })}

                                        </div>{/* End .cart-product */}
                                        <div className="dropdown-cart-total">
                                            <span>Total</span>
                                            <span className="cart-total-price">${total?.toLocaleString()}</span>
                                        </div>{/* End .dropdown-cart-total */}
                                        <div className="dropdown-cart-action">
                                            <NavLink to='/cart' className="btn btn-primary">View Cart</NavLink>

                                        </div>{/* End .dropdown-cart-total */}
                                    </div>{/* End .dropdown-menu */}
                                </div>{/* End .cart-dropdown */}
                            </div>{/* End .header-right */}
                        </div>{/* End .container */}
                    </div>{/* End .header-middle */}
                    <div className="header-bottom sticky-header">
                        <div className="container">
                            <div className="header-left">
                                <div className="dropdown category-dropdown">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                                        Browse Categories <i className="icon-angle-down" />
                                    </a>
                                    <div className="dropdown-menu">
                                        <nav className="side-nav">
                                            <ul className="menu-vertical sf-arrows">
                                                <li className="item-lead"><a href="#">Daily offers</a></li>
                                                <li className="item-lead"><a href="#">Gift Ideas</a></li>
                                                <li><a href="#">Beds</a></li>
                                                <li><a href="#">Lighting</a></li>
                                                <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                                                <li><a href="#">Storage</a></li>
                                                <li><a href="#">Armchairs &amp; Chaises</a></li>
                                                <li><a href="#">Decoration </a></li>
                                                <li><a href="#">Kitchen Cabinets</a></li>
                                                <li><a href="#">Coffee &amp; Tables</a></li>
                                                <li><a href="#">Outdoor Furniture </a></li>
                                            </ul>{/* End .menu-vertical */}
                                        </nav>{/* End .side-nav */}
                                    </div>{/* End .dropdown-menu */}
                                </div>{/* End .category-dropdown */}
                            </div>{/* End .header-left */}
                            <div className="header-center">
                                <nav className="main-nav">
                                    <ul className="menu sf-arrows">
                                        <li className="megamenu-container active">
                                            <NavLink to='/' className="sf-with-ul">Home</NavLink>

                                        </li>

                                        <li>
                                            <NavLink to='/product' className="sf-with-ul">Product</NavLink>

                                        </li>
                                        <li>
                                            <NavLink to='/about' className="sf-with-ul">About</NavLink>

                                        </li>
                                        <li>
                                            <NavLink to='/blog' className="sf-with-ul">Blog</NavLink>

                                        </li>

                                    </ul>{/* End .menu */}
                                </nav>{/* End .main-nav */}
                            </div>{/* End .header-center */}
                            <div className="header-right">
                                <i className="la la-lightbulb-o" /><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                            </div>
                        </div>{/* End .container */}
                    </div>{/* End .header-bottom */}
                </header>{/* End .header */}
                <Component {...propsRoute} />
                <footer className="footer">
                    <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={{ backgroundImage: 'url(assets/images/demos/demo-4/bg-5.jpg)' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-10 col-md-8 col-lg-6">
                                    <div className="cta-heading text-center">
                                        <h3 className="cta-title text-white">Get The Latest Deals</h3>{/* End .cta-title */}
                                        <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>{/* End .cta-desc */}
                                    </div>{/* End .text-center */}
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                                            </div>{/* .End .input-group-append */}
                                        </div>{/* .End .input-group */}
                                    </form>
                                </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .cta */}
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget widget-about">
                                        <img src="assets/images/demos/demo-4/logo-footer.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                                        <div className="widget-call">
                                            <i className="icon-phone" />
                                            Got Question? Call us 24/7
                                            <a href="tel:#">+0123 456 789</a>
                                        </div>{/* End .widget-call */}
                                    </div>{/* End .widget about-widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="about.html">About Molla</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">How to shop on Molla</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="#">Payment Methods</a></li>
                                            <li><a href="#">Money-back guarantee!</a></li>
                                            <li><a href="#">Returns</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Terms and conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="#">Sign In</a></li>
                                            <li><a href="cart.html">View Cart</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Track My Order</a></li>
                                            <li><a href="#">Help</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .footer-middle */}
                    <div className="footer-bottom">
                        <div className="container">
                            <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>{/* End .footer-copyright */}
                            <figure className="footer-payments">
                                <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                            </figure>{/* End .footer-payments */}
                        </div>{/* End .container */}
                    </div>{/* End .footer-bottom */}
                </footer>{/* End .footer */}
            </div>{/* End .page-wrapper */}
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
            {/* Mobile Menu */}
            <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
            <div className="mobile-menu-container mobile-menu-light">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close" /></span>
                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                    </form>
                    <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                            <nav className="mobile-nav">
                                <ul className="mobile-menu">
                                    <li className="active">
                                        <NavLink to='/'>Home</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to='/product'>Shop</NavLink>

                                    </li>

                                    <li>
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="about.html">About</a>
                                                <ul>
                                                    <li><a href="about.html">About 01</a></li>
                                                    <li><a href="about-2.html">About 02</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                                <ul>
                                                    <li><a href="contact.html">Contact 01</a></li>
                                                    <li><a href="contact-2.html">Contact 02</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="faq.html">FAQs</a></li>
                                            <li><a href="404.html">Error 404</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Classic</a></li>
                                            <li><a href="blog-listing.html">Listing</a></li>
                                            <li>
                                                <a href="#">Grid</a>
                                                <ul>
                                                    <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                    <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                    <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                    <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Masonry</a>
                                                <ul>
                                                    <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                    <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                    <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                    <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Mask</a>
                                                <ul>
                                                    <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                    <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Single Post</a>
                                                <ul>
                                                    <li><a href="single.html">Default with sidebar</a></li>
                                                    <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                                    <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="elements-list.html">Elements</a>
                                        <ul>
                                            <li><a href="elements-products.html">Products</a></li>
                                            <li><a href="elements-typography.html">Typography</a></li>
                                            <li><a href="elements-titles.html">Titles</a></li>
                                            <li><a href="elements-banners.html">Banners</a></li>
                                            <li><a href="elements-product-category.html">Product Category</a></li>
                                            <li><a href="elements-video-banners.html">Video Banners</a></li>
                                            <li><a href="elements-buttons.html">Buttons</a></li>
                                            <li><a href="elements-accordions.html">Accordions</a></li>
                                            <li><a href="elements-tabs.html">Tabs</a></li>
                                            <li><a href="elements-testimonials.html">Testimonials</a></li>
                                            <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                            <li><a href="elements-portfolio.html">Portfolio</a></li>
                                            <li><a href="elements-cta.html">Call to Action</a></li>
                                            <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>{/* End .mobile-nav */}
                        </div>{/* .End .tab-pane */}
                        <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">
                                    <li><a className="mobile-cats-lead" href="#">Daily offers</a></li>
                                    <li><a className="mobile-cats-lead" href="#">Gift Ideas</a></li>
                                    <li><a href="#">Beds</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                                    <li><a href="#">Storage</a></li>
                                    <li><a href="#">Armchairs &amp; Chaises</a></li>
                                    <li><a href="#">Decoration </a></li>
                                    <li><a href="#">Kitchen Cabinets</a></li>
                                    <li><a href="#">Coffee &amp; Tables</a></li>
                                    <li><a href="#">Outdoor Furniture </a></li>
                                </ul>{/* End .mobile-cats-menu */}
                            </nav>{/* End .mobile-cats-nav */}
                        </div>{/* .End .tab-pane */}
                    </div>{/* End .tab-content */}
                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                    </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}
            {/* Sign in / Register Modal */}
            {/* End .modal */}
            <Login />
            <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">
                                    <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width={60} height={15} />
                                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                                    <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit"><span>go</span></button>
                                            </div>{/* .End .input-group-append */}
                                        </div>{/* .End .input-group */}
                                    </form>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                        <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                                    </div>{/* End .custom-checkbox */}
                                </div>
                            </div>
                            <div className="col-xl-2-5col col-lg-5 ">
                                <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    }} />
}