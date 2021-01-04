import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './CompanyUser.module.scss'
import data from '../../public/UserData.json'
import Pagination from '../pagination/Pagination'
import { Button, Modal } from 'react-bootstrap';
export default function CompanyUser() {
    
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({
        id: 0,
        email:'',
        name: '',
        number: 0
    });
    const [showPerPage, setShowPerPage] = useState(16)
    const [pagination, setPagination] = useState({
        start:0,
        end:showPerPage
    })

    const onPaginationChange = (start, end) => {
        setPagination({start: start , end: end})
    }

    const userList = data.slice(pagination.start,pagination.end).map((detail) => {
        return (
            <Row key={detail.id} className={styles.body}>
                <Col>Logo</Col>
                <Col>{detail.name}</Col>
                <Col>{detail.email}</Col>
                <Col>{detail.number}</Col>
                <Col>
                <button className={styles.iconBtn} onClick={() => {setModalData(detail),setModalShow(true) }}>
                    <img src='./ViewIcon.svg'/>   
                </button>
                <button className={styles.iconBtn}>
                    <img src='./EditIcon.svg'/>
                </button>
                <button className={styles.iconBtn}>
                    <img src='./DeleteIcon.svg'/>
                </button>
                <button className={styles.iconBtn}>
                    <img src='./ForgotIcon.svg'/>
                </button>
                </Col>
            </Row>
        )
    })
  
    return (
        <div>
            <Row className={styles.tr}>
                <Col>Picture</Col>
                <Col>User Name</Col>
                <Col>Email ID</Col>
                <Col>Phone No.</Col>
                <Col></Col>
            </Row>
            <div className={styles.body1}>
                {userList}
            </div> 
            <Pagination 
               showPerPage={showPerPage} 
               onPaginationChange={onPaginationChange}
               total={data.length}
            /> 
            
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modaldata={modalData}
            />             
        </div>
    
    )
}


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={styles.modelTitle}><img src='./CompanyUsersIcon.svg' className="mr-2" />Company user</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Row>
                <Col md={3}>
                   <img src='./userimg.png' /> 
                </Col>

                <Col md={9}>
                    <div>
                        <label className={styles.lableStyle}>Name :</label> <span className={styles.spanStyle}>{props.modaldata.name}</span>
                    </div>
                    <div>
                        <label className={styles.lableStyle}>Address :</label> <span className={styles.spanStyle}> Lane 56, 3rd Main, Pune, Maharashtra 487652 </span>
                    </div>
                    <div>
                        <label className={styles.lableStyle}>Email ID :</label> <span className={styles.spanStyle}>{props.modaldata.email}</span>
                    </div>
                    <div>
                        <label className={styles.lableStyle}>Phone No. :</label> <span className={styles.spanStyle}>{props.modaldata.number}</span>
                    </div>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.customBtn} variant="outline-primary">Delete</Button>
          <Button variant="outline-primary" className={styles.customBtn}>Reset Password</Button>
          <Button variant="outline-primary" className={styles.customBtn}>Edit</Button>
        </Modal.Footer>
      </Modal>
    );
  }