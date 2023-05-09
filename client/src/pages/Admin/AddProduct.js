import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { CreatePhoneAction, GetPhoneIdAction, UpdatePhoneAction } from '../../redux/action/phoneAction';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import Swal from 'sweetalert2'
export default function AddProduct (props) {
    const { arrType } = useSelector(root => root.brandReducer);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            brand_id: 0,
            price: 0,
            description: '',
            image_url: '',
            quantity: '',
        },
        enableReinitialize: true,

        onSubmit: (value) => {
            console.log(value);
            const action = CreatePhoneAction(value)
            dispatch(action)
            Swal.fire({
                icon: 'success',
                title: 'Successfully!',
                text: 'Add New Product Completed Successfully',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Xử lý khi người dùng nhấn OK
                }
            })
        }
    })
    const uploadFile = (e) => {
        let file = e.target.files[0];
        let fileRef = ref(storage_bucket, file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const proress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is" + proress + "% done");
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    formik.setFieldValue("image_url", url)
                })
            }
        )
    }
    return (
        <div>

            <nav aria-label="breadcrumb" className="breadcrumb-nav" style={{ marginTop: '50px' }}>
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/admin'>Home</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Management</li>
                        <li className="breadcrumb-item active" aria-current="page" style={{ color: 'red' }}>{formik.values.name}</li>
                    </ol>

                </div>{/* End .container */}

            </nav>{/* End .breadcrumb-nav */}
            <div className="container" style={{ marginTop: '50px', marginLeft: '400px' }}>
                <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
                    <form onSubmit={formik.handleSubmit} method="POST">
                        <h3 className="text-center">Add Product</h3>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text"> Name:</label>
                                    <input type="text" name="name" className="form-control" onChange={formik.handleChange} required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Price: </label>
                                    <input type="number" name="price" className="form-control" onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Description:</label>
                                    <input type="text" name="description" className="form-control" onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Quantity:</label>
                                    <input type="text" name="quantity" className="form-control" onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div>{formik.values.image_url === '' ? <div></div> : <img src={formik.values.image_url} width={300} height={200} />}</div>
                                <div className="form-group">
                                    <label className="profile_details_text">Image:</label>
                                    <input type="file" name="image_url" className="form-control" onChange={uploadFile} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="profile_details_text">Brand:</label>
                            <select typeof='number' name="brand_id" onChange={formik.handleChange} className="form-control">
                                <option >Choose Brand</option>
                                {arrType.slice(0).map((item, index) => {
                                    return <option value={parseInt(item.id)}>{item.name}</option>

                                })}
                            </select>
                        </div>



                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" defaultValue="Submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </div >

    )
}
