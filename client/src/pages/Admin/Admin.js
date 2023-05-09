import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getListType } from '../../redux/action/brandAction';
import { DeletePhoneAction, GetListPhoneAction } from '../../redux/action/phoneAction';
import { history } from '../../App';

export default function Admin () {
    const dispatch = useDispatch();
    const { arrType } = useSelector(root => root.brandReducer);
    const { arrPhone } = useSelector(root => root.phoneReducer);
    useEffect(() => {
        const action = getListType();
        dispatch(action)
        const action1 = GetListPhoneAction();
        dispatch(action1)
    }, [arrPhone]);
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: (value) => {
            console.log(value);

        }
    })
    return (
        <div>
            <div>
                <div className="">
                    <main className="">
                        <div className="page-header text-center" style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}>
                            <div className="container">
                                <h1 className="page-title">Admin<span>Shop</span></h1>
                            </div>{/* End .container */}
                        </div>{/* End .page-header */}
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to='/admin'>Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Management</li>
                                </ol>
                                <NavLink to='addproduct'>
                                    <button className='' style={{ marginBottom: '40px', position: 'absolute', right: '40px', border: 'none', padding: '5px 10px', backgroundColor: 'pink' }}>Add new Product</button>
                                </NavLink>
                            </div>{/* End .container */}

                        </nav>{/* End .breadcrumb-nav */}


                        <div className="page-content" style={{ marginTop: '40px' }}>
                            <div className="cart">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table className="table table-cart table-mobile">
                                                <thead>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th></th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {arrPhone?.map((item, index) => {
                                                        return <tr key={index}>
                                                            <td>{++index}</td>
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

                                                            <td className="total-col">{item.quantity}</td>
                                                            <td className="remove-col"><button className="btn-remove"><i className="icon-edit" onClick={() => {
                                                                history.push(`/editproduct/${item.id}`)
                                                            }} /></button></td>
                                                            <td className="remove-col"><button className="btn-remove"><i className="icon-close" onClick={() => {
                                                                const action = DeletePhoneAction(item.id)
                                                                dispatch(action)
                                                            }} /></button></td>

                                                        </tr>
                                                    })}

                                                </tbody>
                                            </table>{/* End .table table-wishlist */}

                                        </div>{/* End .col-lg-9 */}

                                    </div>{/* End .row */}
                                </div>{/* End .container */}
                            </div>{/* End .cart */}
                        </div>{/* End .page-content */}
                    </main>{/* End .main */}

                </div>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
                {/* Mobile Menu */}


            </div>
        </div>
    )
}
