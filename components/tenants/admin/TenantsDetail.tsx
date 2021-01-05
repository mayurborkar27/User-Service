import Link from 'next/link';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Layout from '../../common/Layout';
import styles from './TenantsDetail.module.scss'
import List from '../../../public/data.json'
import { gql, useQuery } from "@apollo/client";

export const ALL_TENANTS_DETAIL = gql`
        query ClientGetResponse {
            Clients{
                clients{
                    primaryOperatorId
                    id
                    name
                    address{
                        country
                    }
                    contractLink
                }
            }
        }
  `;


export default function TenantsDetail({ id })  {
    const { loading, error, data } = useQuery(ALL_TENANTS_DETAIL);
    
    if (loading) return <>
    <span>Loading</span>
    </>;
    if (error) return (
        <>
        <span>Error</span>
        </>
    );

    const client = data.Clients.clients.map((client,index) => {
        if (id == client.primaryOperatorId ) {
            return (
                <Row className="pt-3" key={index} >
                    <Col>
                        <img src="/dumy logo.svg" />
                    </Col>
                    <Col>{client.name}</Col>
                    <Col>{client.address.country}</Col>
                    <Col>{client.contractLink}</Col>
                    <Col></Col>
                </Row> 
            )
        }
    })

    // const user = List.map((userDetail,index) => {
    //     if (id == userDetail.id) {
    //         return ( 
    //             <Row className="pt-3" key={index} >
    //                 <Col>
    //                     <img src="/dumy logo.svg" />
    //                 </Col>
    //                 <Col>{userDetail.name}</Col>
    //                 <Col>{userDetail.address}</Col>
    //                 <Col>{userDetail.url}</Col>
    //                 <Col>{userDetail.number}</Col>
    //             </Row>
    //             )
    //     }
    // })

    return (
        <Layout>
            <Row className={styles.left}>
                Tenants
            </Row>               
            <hr />
            <div>
                <p className={styles.head}>Detail</p>
                <Row className={styles.tr}>
                    <Col>Logo</Col>
                    <Col>Company Name</Col>
                    <Col>Address</Col>
                    <Col>URL</Col>
                    <Col>Phone No.</Col>
                </Row>
                <div className={styles.body}>
                    <div>
                        {/* {user} */}
                        {client}
                        <div className={styles.body__btn}>
                            <Button variant="outline-primary" className={styles.btn}>Edit</Button>
                            <Button variant="outline-primary" className={styles.btn}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className={styles.head}>Admin </p>
                <Row className={styles.tr}>
                    <Col>Profile Picture</Col>
                    <Col>Name</Col>
                    <Col>Email ID</Col>
                    <Col>Address</Col>
                    <Col>Phone No.</Col>
                </Row>
                <div className={styles.body}>
                    <Row className="pt-3">
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>

                    <div className={styles.body__btn}>
                        <Button variant="outline-primary" className={styles.btn}>Reset Password</Button>
                        <Link href='/adminTenants'>
                            <Button variant="outline-primary" className={styles.btn}>Add</Button>
                        </Link>
                        <Button variant="outline-primary" className={styles.btn}>Invite By Email</Button>
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


