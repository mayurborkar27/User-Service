import Link from 'next/link'
import styles from './sidebar.module.scss'

export default function Sideabar() {
    return(
            <div className={styles.sidebar}>
                <ul >
                    <Link href='/tenants'><li>Tenants</li></Link>
                    <Link href='/user'><li>Users</li></Link>
                    <Link href='/profile'><li>Profile</li></Link>
                    <Link href='/'><li >Logout</li></Link>
                </ul>
            </div>
       
    )
}