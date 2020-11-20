import { Button, Card, Col, Row } from "react-bootstrap";
import Layout from "../common/Layout";
import styles from "./Detail.module.scss"
import { useFormik } from 'formik'
 
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
        }
    })

    return (  
        <Layout>
            <Row className={styles.left}>
                Tenant details
           </Row>               
            <hr />
            <form onSubmit={formik.handleSubmit}>
            <Card className={styles.card}>
                <Row>
                    <Card.Img className={styles.pic} />
                    <Card.Body className={styles.detail}>
                        <div>
                            <label htmlFor='company name'>Company Name</label>
                            <input type="text" id='company name' name='company_name' placeholder='Enter The Company Name' onChange={formik.handleChange} value={formik.values.company_name} />
                        </div>                                                              
                        <div>
                            <label htmlFor='address'>Address</label>
                            <input type="text" id='address' name='address' placeholder='Enter The Address' onChange={formik.handleChange} value={formik.values.address} />
                        </div>
                        <div>
                            <label htmlFor='country'>Country</label>
                            <input type="text" id='country' name='country' placeholder='Enter The Country' onChange={formik.handleChange} value={formik.values.country} />
                        </div>
                        <div>
                            <label htmlFor='state'>State</label>
                            <input type="text" id='state' name='state' placeholder='Enter The State' onChange={formik.handleChange} value={formik.values.state} />
                        </div>
                        <div>
                            <label htmlFor='city'>City</label>
                            <input type="text" id='city' name='city' placeholder='Enter The City' onChange={formik.handleChange} value={formik.values.city} />
                        </div>
                        <div>
                            <label htmlFor='street'>Street</label>
                            <input type="text" id='street' name='street' placeholder='Enter The Street' onChange={formik.handleChange} value={formik.values.street} />
                        </div>
                        <div>
                            <label htmlFor='zipcode'>Zipcode</label>
                            <input type="text" id='zipcode' name='zipcode' placeholder='Enter The Zipcode' onChange={formik.handleChange} value={formik.values.zipcode} />
                        </div>
                        <div>
                            <label htmlFor='url'>URL</label>
                            <input type="text" id='url' name='url' placeholder='Enter The URL' onChange={formik.handleChange} value={formik.values.url} />
                        </div>
                        <div>
                            <label htmlFor='number'>Phone No. </label>
                            <input type="text" id='number' name='number' placeholder='Enter The Phone No.' onChange={formik.handleChange} value={formik.values.number} />
                        </div>  
                        <Row className={styles.btn}>
                            <Button variant="outline-primary">Cancel</Button>
                            <Button variant="outline-primary" type="submit">Submit</Button>
                        </Row>
                    </Card.Body>
                </Row>
            </Card>
            </form>
        </Layout>
    )
}