import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const UpdateStampWindow = (props) => {
    const [name, setName] = useState(props.name)
    const [year, setYear] = useState(props.year)

    return(
        <Container>
            <Row><Col>
                Lets add/update {name && name}{!name && <>a stamp!</>}
            </Col></Row>
            <Row>
                <Col xs={2}>IMAGE</Col>
                <Col>
                    <Container>
                        <Row><Col>NAME</Col><Col><input type="text">{name}</input></Col></Row>
                        <Row><Col>YEAR</Col><Col><DatePicker selected={new Date()} /></Col></Row>
                        <Row><Col>COUNTRY</Col><Col><input type="text"></input></Col></Row>
                        <Row><Col>PRICE</Col><Col><input type="text"></input></Col></Row>
                        <Row><Col>STAMPED</Col><Col><input type="checkbox" name="stamped" id="stamped-cbox" /><label>is ruined?</label></Col></Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default UpdateStampWindow
