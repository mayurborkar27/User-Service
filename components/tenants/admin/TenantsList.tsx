import { Button, Col, Row } from "react-bootstrap";
import Layout from "../../common/Layout";
import styles from "./TenantsList.module.scss"
import List from '../../../public/data.json'
import Link from "next/link";
import Pagination from '../../pagination/Pagination'
import { useState } from "react";
import { Avatar } from "@material-ui/core";
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


export default function TenantsList() {
    const [showPerPage, setShowPerPage] = useState(16)
    const [pagination, setPagination] = useState({
        start:0,
        end:showPerPage
    })

    const { loading, error, data } = useQuery(ALL_TENANTS_DETAIL);
    
    if (loading) return <>
    <span>Loading</span>
    </>;
    if (error) return 
        <>
        <span>Error</span>
        </>
    ;
    
    const onPaginationChange = (start, end) => {
        setPagination({start: start , end: end})
    }
    
    const clients = data.Clients.clients.map((client) => {
        return (
            <Link
                href='/detail/[client.primaryOperatorId]'
                as={`/detail/${client.primaryOperatorId}`}
                key={client.primaryOperatorId}>
                <Row key={client.primaryOperatorId} className={styles.body}>
                    <Col>
                            <Avatar /> 
                    </Col>
                    <Col>{client.name}</Col>
                    <Col>{client.address.country}</Col>
                    <Col>{client.contractLink}</Col>
                    <Col></Col>
                </Row>
            </Link>
        )
    })

    // const userList = List.slice(pagination.start,pagination.end).map((detail) => {
    //     return (
    //         <Link 
    //             href='/detail/[detial.id]'
    //             as={`/detail/${detail.id}`}
    //             key={detail.id}>
    //             <Row key={detail.id} className={styles.body}>
    //                 <Col>
    //                     <Avatar /> 
    //                 </Col>
    //                 <Col>{detail.name}</Col>
    //                 <Col>{detail.address}</Col>
    //                 <Col>{detail.url}</Col>
    //                 <Col>{detail.number}</Col>
    //             </Row>
    //         </Link>
    //     )
    // })

    return (
        <Layout>
            <div >
                <div className='row justify-content-between'>
                    <div className={styles.left}>
                        Tenants (50)
                    </div>
                    <div className={styles.right}>
                        <input type="text" name="name" placeholder='Search Tenant/Admin' />   
                        <Link href='/addNewTenants'>
                            <Button>New Tenant</Button>
                        </Link>
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
                <div className={styles.body1}>
                    {/* {userList} */}
                    {clients}
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