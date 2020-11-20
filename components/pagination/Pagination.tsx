import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './Pagination.module.scss'

const Pagination = ({showPerPage , onPaginationChange, total}) => {
    
    const [counter, setCounter] = useState(1)

    const onButtonClick = (type) => {
        if(type === "prev") {
            if(counter === 1) {
                setCounter(1)
            } else {
                setCounter( counter - 1 )
            }
        } else if(type==="next") {
            if(Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }
    }

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)
    },[counter])

    return (
        <Row className={styles.pagination} >
            <div>
                Showing 1-16 of {total}
            </div>
            
            <div>
                <span>Page {counter} of {Math.ceil(total / showPerPage)}</span>
                <button onClick={() => onButtonClick("prev")}  className={styles.btnPrev} />
                <button onClick={() => onButtonClick("next")} className={styles.btnNext} />
            </div>
        </Row>
    )
}

export default Pagination
