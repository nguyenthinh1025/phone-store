import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { PayAction } from '../../redux/action/orderAction'
import Swal from 'sweetalert2'
export default function PageCart () {
    const { arrOrder } = useSelector(root => root.orderReducer)
    const { user } = useSelector(root => root.authReducer)
    const dispatch = useDispatch()
    const total = arrOrder?.reduce((a, b) => a + b.price * b.sl, 0)

    const arrProduct = arrOrder?.map(order => ({
        id: order.id,
        quantity: order.sl,
        price: order.sl * order.price,
    }))
    const formik = useFormik({
        initialValues: {
            customer_name: user?.user?.name,
            customer_phone: user?.user?.customer_phone,
            customer_email: user?.user?.email,
            products: arrProduct
        },
        onSubmit: (value) => {
            console.log(value);
            const action = PayAction(value);
            dispatch(action)
            Swal.fire({
                icon: 'success',
                title: 'Successfully!',
                text: 'Payment for Items in Cart Completed Successfully',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Xử lý khi người dùng nhấn OK
                }
            })
        }
    })
    return (
        <div>
            <div>
                <div className="page-wrapper">
                    <main className="main">
                        <div className="page-header text-center" style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}>
                            <div className="container">
                                <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
                            </div>{/* End .container */}
                        </div>{/* End .page-header */}
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink to='/product'>Shop</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                </ol>
                            </div>{/* End .container */}
                        </nav>{/* End .breadcrumb-nav */}
                        <div className="page-content">
                            <div className="cart">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <table className="table table-cart table-mobile">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrOrder?.map((item, index) => {
                                                        return <tr key={index}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <div>
                                                                            <img src={item.image_url} alt="Product image" />
                                                                        </div>
                                                                    </figure>
                                                                    <h3 className="product-title">
                                                                        <h3>{item.name}</h3>
                                                                    </h3>{/* End .product-title */}
                                                                </div>{/* End .product */}
                                                            </td>
                                                            <td className="price-col">${item.price}</td>
                                                            <td className="quantity-col">
                                                                <div className="cart-product-quantity" style={{ display: 'flex' }}>
                                                                    <button style={{ border: 'none', padding: '0 10px' }} onClick={() => {
                                                                        const action = {
                                                                            type: "CHANG_SL",
                                                                            item,
                                                                            sl: -1
                                                                        }
                                                                        dispatch(action)
                                                                    }}>-</button>
                                                                    <p style={{ padding: '0 10px' }}>{item.sl}</p>
                                                                    <button style={{ border: 'none', padding: '0 10px' }} onClick={() => {
                                                                        const action = {
                                                                            type: "CHANG_SL",
                                                                            item,
                                                                            sl: 1
                                                                        }
                                                                        dispatch(action)
                                                                    }}>+</button>
                                                                </div>{/* End .cart-product-quantity */}
                                                            </td>
                                                            <td className="total-col">${item.sl * item.price}</td>
                                                            <td className="remove-col"><button className="btn-remove"><i className="icon-close" onClick={() => {
                                                                const action = {
                                                                    type: "REMOVE_ITEM",
                                                                    item
                                                                }
                                                                dispatch(action)
                                                            }} /></button></td>
                                                        </tr>
                                                    })}

                                                </tbody>
                                            </table>{/* End .table table-wishlist */}

                                        </div>{/* End .col-lg-9 */}
                                        <aside className="col-lg-3">
                                            <div className="summary summary-cart">
                                                <h3 className="summary-title">Cart Total</h3>{/* End .summary-title */}
                                                <table className="table table-summary">
                                                    <tbody>
                                                        <tr className="summary-subtotal">
                                                            <td>Subtotal:</td>
                                                            <td>${total}</td>
                                                        </tr>{/* End .summary-subtotal */}




                                                        <tr className="summary-total">
                                                            <td>Total:</td>
                                                            <td>${total}</td>
                                                        </tr>{/* End .summary-total */}
                                                    </tbody>
                                                </table>{/* End .table table-summary */}
                                                <form onSubmit={formik.handleSubmit}>
                                                    {localStorage.getItem('username') === '' ? <NavLink to='/' className="btn btn-outline-primary-2 btn-order btn-block">LOGIN TO BUY</NavLink> : <button type='submit' className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</button>}
                                                </form>
                                            </div>{/* End .summary */}
                                            <NavLink to='/product' className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh" /></NavLink>
                                        </aside>{/* End .col-lg-3 */}
                                    </div>{/* End .row */}
                                </div>{/* End .container */}
                            </div>{/* End .cart */}
                        </div>{/* End .page-content */}
                    </main>{/* End .main */}
                    <footer className="footer">
                        <div className="footer-middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="widget widget-about">
                                            <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                                            <div className="social-icons">
                                                <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                                                <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                                                <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                                                <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                                                <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest" /></a>
                                            </div>{/* End .soial-icons */}
                                        </div>{/* End .widget about-widget */}
                                    </div>{/* End .col-sm-6 col-lg-3 */}
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="widget">
                                            <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                                            <ul className="widget-list">
                                                <li><a href="about.html">About Molla</a></li>
                                                <li><a href="#">How to shop on Molla</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="contact.html">Contact us</a></li>
                                                <li><a href="login.html">Log in</a></li>
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
                </div>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
                {/* Mobile Menu */}
                <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
                <div className="mobile-menu-container">
                    <div className="mobile-menu-wrapper">
                        <span className="mobile-menu-close"><i className="icon-close" /></span>
                        <form action="#" method="get" className="mobile-search">
                            <label htmlFor="mobile-search" className="sr-only">Search</label>
                            <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                        </form>
                        <nav className="mobile-nav">
                            <ul className="mobile-menu">
                                <li className="active">
                                    <a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index-1.html">01 - furniture store</a></li>
                                        <li><a href="index-2.html">02 - furniture store</a></li>
                                        <li><a href="index-3.html">03 - electronic store</a></li>
                                        <li><a href="index-4.html">04 - electronic store</a></li>
                                        <li><a href="index-5.html">05 - fashion store</a></li>
                                        <li><a href="index-6.html">06 - fashion store</a></li>
                                        <li><a href="index-7.html">07 - fashion store</a></li>
                                        <li><a href="index-8.html">08 - fashion store</a></li>
                                        <li><a href="index-9.html">09 - fashion store</a></li>
                                        <li><a href="index-10.html">10 - shoes store</a></li>
                                        <li><a href="index-11.html">11 - furniture simple store</a></li>
                                        <li><a href="index-12.html">12 - fashion simple store</a></li>
                                        <li><a href="index-13.html">13 - market</a></li>
                                        <li><a href="index-14.html">14 - market fullwidth</a></li>
                                        <li><a href="index-15.html">15 - lookbook 1</a></li>
                                        <li><a href="index-16.html">16 - lookbook 2</a></li>
                                        <li><a href="index-17.html">17 - fashion store</a></li>
                                        <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                                        <li><a href="index-19.html">19 - games store</a></li>
                                        <li><a href="index-20.html">20 - book store</a></li>
                                        <li><a href="index-21.html">21 - sport store</a></li>
                                        <li><a href="index-22.html">22 - tools store</a></li>
                                        <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                                        <li><a href="index-24.html">24 - extreme sport store</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="category.html">Shop</a>
                                    <ul>
                                        <li><a href="category-list.html">Shop List</a></li>
                                        <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                        <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                        <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                        <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                        <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                        <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                        <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="#">Lookbook</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="product.html" className="sf-with-ul">Product</a>
                                    <ul>
                                        <li><a href="product.html">Default</a></li>
                                        <li><a href="product-centered.html">Centered</a></li>
                                        <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                        <li><a href="product-gallery.html">Gallery</a></li>
                                        <li><a href="product-sticky.html">Sticky Info</a></li>
                                        <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                        <li><a href="product-fullwidth.html">Full Width</a></li>
                                        <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                    </ul>
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
                        <div className="social-icons">
                            <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                            <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                            <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                            <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                        </div>{/* End .social-icons */}
                    </div>{/* End .mobile-menu-wrapper */}
                </div>
            </div>
        </div>
    )
}
