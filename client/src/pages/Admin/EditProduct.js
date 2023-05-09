import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { GetPhoneIdAction, UpdatePhoneAction } from '../../redux/action/phoneAction';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as Yup from "yup";
import { storage_bucket } from '../../firebase';
import Swal from 'sweetalert2';
export default function EditProduct (props) {
    const { arrType } = useSelector(root => root.brandReducer);
    const { id } = props.match.params;
    const dispatch = useDispatch()
    useEffect(() => {
        const action = GetPhoneIdAction(id)
        dispatch(action)
    }, []);
    const { phoneByID } = useSelector(root => root.phoneReducer)
    const formik = useFormik({
        initialValues: {
            name: phoneByID?.name,
            brand_id: phoneByID?.brand_id,
            price: phoneByID?.price,
            description: phoneByID?.description,
            image_url: phoneByID?.image_url,
            quantity: phoneByID?.quantity
        },
        enableReinitialize: true,

        onSubmit: (value) => {
            console.log(value);
            const action = UpdatePhoneAction(props.match.params.id, value)
            dispatch(action)
            Swal.fire({
                icon: 'success',
                title: 'Successfully!',
                text: 'Update Product Completed Successfully',
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
                        <h3 className="text-center">Edit Product</h3>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text"> Name:</label>
                                    <input type="text" name="name" className="form-control" value={formik.values.name} onChange={formik.handleChange} required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Price: </label>
                                    <input type="number" name="price" className="form-control" value={formik.values.price} onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Description:</label>
                                    <input type="text" name="description" className="form-control" value={formik.values.description} onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="form-group">
                                    <label className="profile_details_text">Quantity:</label>
                                    <input type="text" name="quantity" className="form-control" value={formik.values.quantity} onChange={formik.handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div><img src={formik.values.image_url} width={300} height={200} /></div>
                                <div className="form-group">
                                    <label className="profile_details_text">Image:</label>
                                    <input type="file" name="image_url" className="form-control" onChange={uploadFile} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="profile_details_text">Brand:</label>
                            <select name="brand_id" onChange={formik.handleChange} className="form-control">
                                <option value={formik.values.brand_id}>{phoneByID.brand?.name}</option>

                                {arrType.map((item, index) => {
                                    return <option value={item.id}>{item.name}</option>

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
