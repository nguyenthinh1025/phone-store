import React from 'react'
import { useFormik } from 'formik'
import { LoginAction, RegisterAction } from '../../redux/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../App';
import Swal from 'sweetalert2';
export default function Login () {
    const { msg, user } = useSelector(root => root.authReducer)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        onSubmit: (value) => {
            if (value.name === 'admin' && value.password === '1234') {
                localStorage.setItem('admin', 'admin')
                history.push('/admin')
                // eslint-disable-next-line no-restricted-globals
                location.reload()
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully!',
                    text: 'Login Successfully',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Xử lý khi người dùng nhấn OK

                    }
                })
            } else {
                console.log(value);
                const login = LoginAction(value)
                dispatch(login)
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully!',
                    text: 'Login Successfully',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Xử lý khi người dùng nhấn OK
                    }
                })
            }
        }
    })
    const formik1 = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            customer_phone: ""
        },
        onSubmit: (value) => {
            console.log(value);
            const action = RegisterAction(value);
            dispatch(action)
            Swal.fire({
                icon: 'success',
                title: 'Successfully!',
                text: 'Register Account Successfully',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Xử lý khi người dùng nhấn OK
                }
            })
        }
    })
    console.log(msg);
    return (
        <div>
            <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close" /></span>
                            </button>
                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Username *</label>
                                                    <input type="text" className="form-control" id="singin-email" name="name" onChange={formik.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="singin-password">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password" name="password" onChange={formik.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div style={{ color: 'red', fontSize: '25px' }}> {msg}</div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right" />
                                                    </button>


                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google" />
                                                            Login With Google
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f" />
                                                            Login With Facebook
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form onSubmit={formik1.handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="register-email">Username *</label>
                                                    <input className="form-control" id="register-email" name="name" onChange={formik1.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="email" onChange={formik1.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="password" onChange={formik1.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="register-password">Phone Number *</label>
                                                    <input className="form-control" id="register-password" name="customer_phone" onChange={formik1.handleChange} required />
                                                </div>{/* End .form-group */}
                                                <div style={{ color: 'red', fontSize: '25px' }}> {msg}</div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right" />
                                                    </button>

                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google" />
                                                            Login With Google
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f" />
                                                            Login With Facebook
                                                        </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                    </div>{/* End .tab-content */}
                                </div>{/* End .form-tab */}
                            </div>{/* End .form-box */}
                        </div>{/* End .modal-body */}
                    </div>{/* End .modal-content */}
                </div>{/* End .modal-dialog */}
            </div>
        </div>

    )
}
