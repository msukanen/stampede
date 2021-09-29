import './StampData.css'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const StampData = (props) => {
    const [name, setName] = useState(props.content.name)
    const [year, setYear] = useState(props.content.published)
    const [stamped, setStamped] = useState(props.content.stamped)
    const [price, setPrice] = useState(props.content.price)
    const [country, setCountry] = useState(props.content.country)

    return(<Container className="stamp-data p-0">
        <Row className="g-0 stamp-data-title">
            <Col>Name</Col>
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
            <Col>{price}&euro;</Col>
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
