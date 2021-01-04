import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Layout from '../../common/Layout'
import styles from './UserDetail.module.scss'

export default function UserDetail() {
    return (
        <Layout>
            <Row className={styles.left}>
                Tenant Details
            </Row>               
            <hr />
            <div>
                <Row className={styles.tr}>
                    <Col>Logo</Col>
                    <Col>Company Name</Col>
                    <Col>Address</Col>
                    <Col>URL</Col>
                    <Col>Phone No.</Col>
                </Row>
                <div className={styles.body}>
                    <div>
                        <Row className="pt-3" >
                            <Col>
                                <img src="/img-logo.svg" />
                            </Col>
                            <Col>XXX Company</Col>
                            <Col>Lane 56, 3rd Main Pune</Col>
                            <Col>http://jsayxgikuhduyud</Col>
                            <Col>6478573667</Col>
                        </Row>
                        <div className={styles.body__btn}>
                            <Button variant="outline-primary" className={styles.btn}>Edit</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Row>
                <div className={styles.box}>
                    <div className={styles.box__header}>
                        <p className={styles.box__header1}>Company Users</p>
                        <p className={styles.box__count}>22</p>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.box__header}>
                        <p className={styles.box__header1}>Customer Users</p>
                        <p className={styles.box__count}>222</p>
                    </div>
                </div>
            </Row>
        </Layout>
    )
}


