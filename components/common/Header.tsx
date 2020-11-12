import Link from "next/link";
import { Navbar } from "react-bootstrap";
import styles from './header.module.scss'

export default function Main() {
    return (
            <Navbar className={styles.navbar} expand="lg" fixed='top'>
               <Link href='/'>
                <img
                    src="/logo.png"
                    className={styles.img}
                    alt="React Bootstrap logo"
                />
                 </Link>
                <Navbar.Collapse className="justify-content-end">
                    <div>
                    <img 
                    src="logo.svg" 
                    alt="Admin logo"
                    className={styles.headerLogo}
                    />
                        <Navbar.Text className={styles.headerText}>
                            Super Admin
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>
                </Navbar>  
    )
}