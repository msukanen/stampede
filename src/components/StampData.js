import './StampData.css'
import { useState, } from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

export const StampData = (props) => {
    const [name]    = useState(props.content.name)
    const [year]    = useState(props.content.published)
    const [stamped] = useState(props.content.stamped)
    const [price]   = useState(props.content.price)
    const [country] = useState(props.content.country)
    const [sid]     = useState(props.content.sid)

    return(<Container className="stamp-data">
        <Row className="stamp-data-title">
            <Col>Name</Col>
            <Col>            {props.updater && <a href="./#" onClick={props.updater}>W</a>}</Col>
        </Row>
        <Row className="g-0 stamp-data-entry">
            <Col>{name}</Col>
        </Row>
        
        <Row className="g-0 stamp-data-title">
            <Col>Year Published</Col>
        </Row>
        <Row className="g-0 stamp-data-entry">
            <Col>{year}</Col>
        </Row>
        
        {stamped &&
        <Row className="g-0 stamp-data-title">
            <Col>Stamped</Col>
        </Row>}
        {stamped &&
        <Row className="g-0 stamp-data-entry">
            <Col>{stamped && <>&ndash;stamped&ndash;</>}</Col>
        </Row>}
        
        {price &&
        <Row className="g-0 stamp-data-title">
            <Col>Price</Col>
        </Row>}
        {price &&
        <Row className="g-0 stamp-data-entry">
            <Col>{price.toFixed(2)}&euro;</Col>
        </Row>}

        {country &&
        <Row className="g-0 stamp-data-title">
            <Col>Country</Col>
        </Row>}
        {country &&
        <Row className="g-0 stamp-data-entry">
            <Col>{country}</Col>
        </Row>}
    </Container>)
}

export default StampData
