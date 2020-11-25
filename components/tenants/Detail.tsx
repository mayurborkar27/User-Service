import { Button, Card, Col, Row } from "react-bootstrap";
import Layout from "../common/Layout";
import styles from "./Detail.module.scss"
import { useFormik } from 'formik'
import { Link } from "@material-ui/core";
 
export default function Detail(){

    const formik = useFormik({
        initialValues: {
            company_name: '',
            address: '',
            country: '',
            state: '',
            city: '',
            street: '',
            zipcode: '',
            url: '',
            number: ''        
        },
        onSubmit: values => {
            console.log('form data', values)
        },
        validate: values => {
            let errors = {}

            if(!values.company_name) {
                errors.company_name = "Required"
            }
            if(!values.address) {
                errors.address = "Required"
            }
            if(!values.country) {
                errors.country = "Required"
            }
            if(!values.state) {
                errors.state = "Required"
            }
            if(!values.city) {
                errors.city = "Required"
            }
            if(!values.street) {
                errors.street = "Required"
            }
            if(!values.zipcode) {
                errors.zipcode = "Required"
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
                Tenant details
            </Row>               
            <hr />
            <form onSubmit={formik.handleSubmit}>
                <Row className={styles.card}>
                    <Row>
                        <Col lg={3}>
                        <div className={styles.pic} >
                            <label htmlFor='input-file'>
                                <img className={styles.addLogo} src="/addLogo.svg" />
                            </label>
                            <input id='input-file' type='file'  />
                        </div>
                        </Col>
                            
                        <Col lg={9}>
                        <div className={styles.detail}>
                            <div className={styles.detail__div}>
                                <label htmlFor='company name'>Company Name</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='company name' 
                                    name='company_name' 
                                    placeholder='Enter The Company Name' 
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
                                <label htmlFor='country'>Country</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='country' 
                                    name='country' 
                                    placeholder='Enter The Country' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.country} />
                                    {formik.touched.country && formik.errors.country ? <span className={styles.error}>{formik.errors.country}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='state'>State</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='state' 
                                    name='state' 
                                    placeholder='Enter The State' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.state} />
                                    {formik.touched.state && formik.errors.state ? <span className={styles.error}>{formik.errors.state}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='city'>City</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='city' 
                                    name='city' 
                                    placeholder='Enter The City' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.city} />
                                    {formik.touched.city && formik.errors.city ? <span className={styles.error}>{formik.errors.city}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='street'>Street</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='street' 
                                    name='street' 
                                    placeholder='Enter The Street' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.street} />
                                    {formik.touched.street && formik.errors.street ? <span className={styles.error}>{formik.errors.street}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='zipcode'>Zipcode</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='zipcode' 
                                    name='zipcode' 
                                    placeholder='Enter The Zipcode' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.zipcode} />
                                    {formik.touched.zipcode && formik.errors.zipcode ? <span className={styles.error}>{formik.errors.zipcode}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='url'>URL</label>
                                <div className={styles.detail__input}>
                                <input 
                                    type="text" 
                                    id='url' 
                                    name='url' 
                                    placeholder='Enter The URL' 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    value={formik.values.url} />
                                    {formik.touched.url && formik.errors.url ? <span className={styles.error}>{formik.errors.url}</span> : null}
                                </div>
                                
                            </div>
                            <div className={styles.detail__div}>
                                <label htmlFor='number'>Phone No. </label>
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
                                <Button variant="outline-primary" type="submit">Submit</Button>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Row>
            </form>
        </Layout>
    )
}