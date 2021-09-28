import './StampContainer.css'
import { useState, useEffect } from 'react'
import { StampImg } from './StampImage'
import { StampData } from './StampData'
import { Row, Col, Container, Collapse } from 'react-bootstrap'

export const StampContainer = (props) => {
    const [content, setContent] = useState(props.content)
    const [showFull, setShowFull] = useState(false)

    return(<Container className="p-0 stamp-container">
            <Row onClick={() => setShowFull(!showFull)} noGutters><Col>{content.name}</Col></Row>
            <Collapse in={showFull}>
                <Row>
                    <Col><StampData content={content} /></Col>
                    <Col><StampImg src={content.src} /></Col>
                </Row>
            </Collapse>
        </Container>
    )
}

export default StampContainer
