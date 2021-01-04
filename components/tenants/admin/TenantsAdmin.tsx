import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Layout from '../../common/Layout'
import styles from "./TenantsAdmin.module.scss"
import { useFormik } from 'formik'
import Link from 'next/link'


export default function TenantsAdmin() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            number: ''   
        },
        onSubmit: values => {
            console.log('form data', values)
        },
        validate: values => {
            let errors = {
               name: '',
               email: '',
               address: '',
               number: ''
            }

            if(!values.name) {
                errors.name = "Required"
            }
            if(!values.email) {
                errors.email = "Required"
            }
            if(!values.address) {
                errors.address = "Required"
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
                Tenant Admin
            </Row>               
            <hr />
            <Row className={styles.detail__head}>
                <div className={styles.detail__left}>
                    <p>Adding Admin for: Tenant Name</p>
                </div>
                <div className={styles.detail__right}>
                    <a href='#'>Invite By Email</a>
                </div>
            </Row>
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
                                <label htmlFor='email'>Email ID</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='email' 
                                    name='email' 
                                    placeholder='Enter The Email ID' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.email} />
                                    {formik.touched.email && formik.errors.email ? <span className={styles.error}>{formik.errors.email}</span> : null}
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
                                <Link href='/tenants'>
                                    <Button variant="outline-primary">Cancel</Button>
                                </Link>
                                <Button variant="outline-primary" type="submit">Save</Button>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Row>
            </form>

        </Layout>
    )
}
