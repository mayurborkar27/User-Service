import { Card, Col, Row } from "react-bootstrap";
import Layout from "../common/Layout";
import styles from "./Detail.module.scss"

export default function Detail(){
    return (  
        <Layout>
            <Row className={styles.left}>
                Tenant details
           </Row>               
            <hr />
            <Card className={styles.card}>
                <Row>
                    <Card.Img className={styles.pic} />
                    <Card.Body className={styles.detail}>
                        <div><span>Company Name</span><input type="Text" placeholder='Enter The Company Name' /></div>                                                              
                        <div><span>Address</span><input type="Text" placeholder='Enter The Address' /></div>
                        <div><span>URL</span><input type="Text" placeholder='Enter The URL' /> </div>
                        <div><span>Phone No. </span><input type="Text" placeholder='Enter The Phone No.' />   </div>  
                    </Card.Body>
                </Row>
            </Card>
        </Layout>
    )
}