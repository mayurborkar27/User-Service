import Link from "next/link";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Layout from "../common/Layout";
import CompanyUser from "./CompanyUser";
import CustomerUser from "./CustomerUser";
import styles from './UsersList.module.scss';
import data from '../../public/UserData.json';


export default function UsersList() {
    const [showTable, setShowTable] = useState(true)
    return (
        <Layout>
            <Row className={styles.TopHead}>
                <div>
                    {/* <Link href='/addNewTenants'>
                        <img className={styles.BackLogo} src='./backArrow.svg' />
                    </Link> */}
                    Select Tenant
                </div>
                <div className={styles.right}>
                    <input type="text" name="name" placeholder='Search User' />
                </div>
            </Row>               
            <hr />
            <Row>
                <div> 
                    <button className={styles.btn} onClick={() => setShowTable(true)}>
                        <img src='./CompanyUsersIcon.svg' />
                        <span  className={styles.text}>Company users ({data.length})</span>
                    </button>
                </div>
                <div>
                    <button className={styles.btn} onClick={() => setShowTable(false)}>
                       <img src='./CustomerUsersIcon.svg' />
                        <span className={styles.text}>Customer users (222)</span>
                    </button>
                </div>
            </Row>
             { showTable ? <CompanyUser /> : <CustomerUser />}
            
        </Layout>
    )
}
