import { Button, Col, Row } from "react-bootstrap";
import Layout from "../common/Layout";
import styles from "./TenantsList.module.scss"
import List from '../../public/data.json'
import Link from "next/link";
import Pagination from '../pagination/Pagination'
import { useState } from "react";


export default function TenantsList() {

    const [showPerPage, setShowPerPage] = useState(16)
    const [pagination, setPagination] = useState({
        start:0,
        end:showPerPage
    })

    const onPaginationChange = (start, end) => {
        setPagination({start: start , end: end})
    }

    const userList = List.slice(pagination.start,pagination.end).map((detail) => {
        return (
            <Row key={detail.id} className={styles.body}>
                <Col>Logo</Col>
                <Col>{detail.name}</Col>
                <Col>{detail.address}</Col>
                <Col>{detail.url}</Col>
                <Col>{detail.number}</Col>
            </Row>
        )
    })

    return (
        <Layout>
            <div >
                <div className='row justify-content-between'>
                    <div className={styles.left}>
                        Tenants (50)
                    </div>
                    <div className={styles.right}>
                        <input type="text" name="name" placeholder='Search Tenant/Admin' />   
                        <Link href='/tenantsDetail'><Button>New Tenant</Button></Link>
                    </div>
                </div>
                <hr />
                <Row className={styles.tr}>
                    <Col>Logo</Col>
                    <Col>Tenant Name</Col>
                    <Col>Address</Col>
                    <Col>URL</Col>
                    <Col>Phone. No</Col>
                </Row>
                <div>
                    {userList}
                </div>                
                
                {/* <p>Pagination</p>     */}
               <Pagination 
               showPerPage={showPerPage} 
               onPaginationChange={onPaginationChange}
               total={List.length}
               />

            </div>
        </Layout>
    )
}