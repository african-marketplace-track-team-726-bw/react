import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import './ItemEntry.css';

//blank object for item data
const blankState = {
    name: '',
    price: '',
    description: '',
    category: '',
    location: ''
};

const ItemEntry = () => {
//form state and yup validation
    const formik = useFormik({        
        initialValues: {...blankState},
        validationSchema: yup.object({
            name: yup.string().required().label('Name').min(2, 'Must be at least 2 characters.'),
            price: yup.number().required().label('Price').min(0.99, 'Price must be at least 0.99 USD'),
            description: yup.string().required().label('Description').min(2, 'must be at least 2 characters'),
            category: yup.string().oneOf(['animal product', 'cereal', 'bean']).required(),
            location: yup.string().min(3, 'Must be at lest 3 characters.').required()       
        }),
        // ⏬ formik automagically added form data values to obj, 'values'
        onSubmit: values => {
/* AXIOS */
            axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log('🌟 Data was posted!', res.data)
            })
            .catch(err => {
                console.log('⛔ An error occurred!', err)
            });
        }
    });

    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>

                    <form onSubmit = { formik.handleSubmit }>
                        <label htmlFor='name'>Product Name: </label>              
                        <input id='name' name='name' type='text' placeholder='Rosecoco Beans' onChange={ formik.handleChange } value={ formik.values.name } onBlur= {formik.handleBlur}/>
                        {formik.errors.name && formik.errors.name ? <span className='errorMsg'>{formik.errors.name}</span> : null}
                        
                        <br />

                        <label htmlFor='price'>Price: </label>
                        <input id='price' name='price' type='number' step='0.05' placeholder='10.00' onChange={ formik.handleChange } value={ formik.values.price } onBlur= {formik.handleBlur} />
                        {formik.errors.price && formik.errors.price ? <span className='errorMsg'>{formik.errors.price}</span> : null}

                        <br />

                        <label htmlFor='category'>Category: </label>
                        <select id='category' name='category' onChange={ formik.handleChange } value={ formik.values.category }onBlur= {formik.handleBlur} >
                            <option value=''>-- choose a category --</option>
                            <option value='animal product'>Animal Product</option>
                            <option value='bean'>Bean</option>
                            <option value='cereal'>Cereal</option>
                        </select>
                        {formik.errors.category && formik.errors.category ? <span className='errorMsg'>{formik.errors.category}</span> : null}
                        <br />

                        <label htmlFor='description'>Description: </label>
                        <textarea id='description' name='description' as='textarea' placeholder='describe this item in 1-2 sentences' onChange={ formik.handleChange } value={ formik.values.description } onBlur= {formik.handleBlur} />
                        {formik.errors.description && formik.errors.description ? <span className='errorMsg'>{formik.errors.description}</span> : null}
                        <br />

                        <label htmlFor='location'>Location: </label>
                        <input id='location' name='location' type='text' placeholder='KEN' onChange={ formik.handleChange } value={ formik.values.location } onBlur= {formik.handleBlur} />
                        {formik.errors.location && formik.errors.location ? <span className='errorMsg'>{formik.errors.location}</span> : null}
                        <br />

                        <button type='submit' disabled={ formik.isValid && formik.values !== formik.initialValues ? false : true }>Add Product</button>
                    </form>    
        </section>
    )
}

export default ItemEntry;