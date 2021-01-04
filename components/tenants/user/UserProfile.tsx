import React from 'react'
import styles from './UserProfile.module.scss'
import { Button, Col, Row } from 'react-bootstrap'
import Layout from '../../common/Layout'
import { useFormik } from 'formik'

export default function UserProfile() {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            emailId: '',
            number: ''   
        },
        onSubmit: values => {
            console.log('form data', values)
        },
        validate: values => {
            let errors = {
                name: '',
                address: '',
                emailId: '',
                number: ''
            }

            if(!values.name) {
                errors.name = "Required"
            }
            if(!values.address) {
                errors.address = "Required"
            }
            if(!values.emailId) {
                errors.emailId = "Required"
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
                My Profile
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
                                <label htmlFor='name'>Name</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='name' 
                                    name='name' 
                                    placeholder='Enter The Name' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.name} />
                                    {formik.touched.name && formik.errors.name ? <span className={styles.error}>{formik.errors.name}</span> : null}
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
                                <label htmlFor='emailId'>Email Id</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='emailId' 
                                    name='emailId' 
                                    placeholder='Enter The emailId' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.emailId} />
                                    {formik.touched.emailId && formik.errors.emailId ? <span className={styles.error}>{formik.errors.emailId}</span> : null}
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


