import Header from './Header'
import Sideabar from './Sidebar'
import {Row , Col} from 'react-bootstrap'
import styles from './layout.module.scss'

export default function Layout(props) {
    return (
        <div className={styles.layout_wrapper}>
            <Header />
            <Row className={styles.layout_row}>
                <Col md={2}>
                   <Sideabar />
                </Col>
                <Col md={10} className={styles.bg}>
                   {props.children}
                </Col>
            </Row>
        </div>
    )
}