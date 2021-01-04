import React from 'react'
import styles from'./UserEdit.module.scss'
import Layout from '../../common/Layout'
import { useFormik } from 'formik'
import { Button, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function UserEdit() {
    
    const formik = useFormik({
        initialValues: {
            company_name: '',
            address: '',
            url: '',
            number: ''   
        },
        onSubmit: values => {
            console.log('form data', values)
        },
        validate: values => {
            let errors = {
                company_name: '',
                address: '',
                url: '',
                number: ''
            }

            if(!values.company_name) {
                errors.company_name = "Required"
            }
            if(!values.address) {
                errors.address = "Required"
            }
            if(!values.url) {
                errors.url = "Required"
            }
            if(!values.number) {
                errors.number = "Required"
            }

            return errors
        }
    })

    return (
        <Layout>
            <Row className={styles.left}>
                Edit Tenant
            </Row>               
            <hr />
            <form onSubmit={formik.handleSubmit}>
                <Row className={styles.card}>
                    <Row>
                        <Col md={3}>
                        <div className={styles.pic} >
                            <label htmlFor='input-file'>
                                <img className={styles.addLogo} src="/addLogo.svg" />
                            </label>
                            <input id='input-file' type='file'  />
                        </div>
                        </Col>
                            
                        <Col md={9}>
                        <div className={styles.detail}>
                            <div className={styles.detail__div}>
                                <label htmlFor='company_name'>Company Name</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='company_name' 
                                    name='company_name' 
                                    placeholder='Enter The company Name' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.company_name} />
                                    {formik.touched.company_name && formik.errors.company_name ? <span className={styles.error}>{formik.errors.company_name}</span> : null}
                                </div>    
                            </div>                                                              
                            <div className={styles.detail__div}>
                                <label htmlFor='address'>Address</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='address' 
                                    name='address' 
                                    placeholder='Enter The Address' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.address} />
                                    {formik.touched.address && formik.errors.address ? <span className={styles.error}>{formik.errors.address}</span> : null}
                                </div>    
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='url'>URL</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='url' 
                                    name='url' 
                                    placeholder='Enter The url' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.url} />
                                    {formik.touched.url && formik.errors.url ? <span className={styles.error}>{formik.errors.url}</span> : null}
                                </div>
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='number'>Phone No.</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='number' 
                                    name='number' 
                                    placeholder='Enter The Phone No.' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.number} />
                                    {formik.touched.number && formik.errors.number ? <span className={styles.error}>{formik.errors.number}</span> : null}
                                </div>
                            </div>
                           
                            <Row className={styles.btn}>
                                <Button variant="outline-primary">Cancel</Button>
                                <Button variant="primary" type="submit">Save</Button>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Row>
            </form>
        </Layout>
    )
}


