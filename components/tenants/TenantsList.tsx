// import { Avatar } from "@material-ui/core";
import { Button, Table } from "react-bootstrap";
import Layout from "../common/Layout";
import styles from "./TenantsList.module.scss"
import List from '../../public/data.json'
import Link from "next/link";

export default function TenantsList() {

    const userList = List.map((detail) => {
        return (
            <tr key={detail.id}>
                <td></td>
                <td>{detail.name}</td>
                <td>{detail.address}</td>
                <td>{detail.url}</td>
                <td>{detail.number}</td>
            </tr>
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
                
                    <Table >
                        <thead className={styles.tr}>
                            <tr>
                                <th>Logo</th>
                                <th>Tenant Name</th>
                                <th>Address</th>
                                <th>URL</th>
                                <th>Phone. No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList}
                        </tbody>
                    </Table>
                
            </div>
        </Layout>
    )
}