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
                        {/* <div>
                            <div className={styles.pic}>
                                Pic
                            </div>

                            <div className={styles.detail}>
                                details
                            </div>
                        </div> */}
                        <Row>

                        <Card.Img className={styles.pic} />
                        <Card.Body >
                                <Card.Text className={styles.detail}>
                                    sadasd
                                </Card.Text>
                        </Card.Body>
                        </Row>
                    </Card>
        </Layout>
    )
}