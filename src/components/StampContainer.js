import './StampContainer.css'
import { useState, useEffect } from 'react'
import { StampImg } from './StampImage'
import { StampData } from './StampData'
import { Row, Col, Container, Collapse } from 'react-bootstrap'

export const StampContainer = (props) => {
    const [content, setContent] = useState(props.content)
    const [showFull, setShowFull] = useState(false)

    return(<Container className="stamp-container">
            <Row className="stamp-title g-0 noselect" onClick={() => setShowFull(!showFull)}><Col style={{pointerEvents:'none'}}>{content.name}</Col></Row>
            <Collapse in={showFull}>
                <Row className="g-0">
                    <Col xs={4} lg={2}><StampImg src={content.src} /></Col>
                    <Col><StampData content={content} /></Col>
                </Row>
            </Collapse>
        </Container>
    )
}

export default StampContainer
