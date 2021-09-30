import './StampContainer.css'
import { useState } from 'react'
import { StampImg } from './StampImage'
import { StampData } from './StampData'
import { Row, Col, Container, Collapse } from 'react-bootstrap'

export const StampContainer = (props) => {
    const [content] = useState(props.content)
    const [showFull, setShowFull] = useState(false)

    const styleImgWidth = 'var(--stamp-img-w)'

    return(<Container className={`stamp-container colSize${props.cols}`}>
        <Row className="stamp-title g-0 noselect"
             onClick={() => setShowFull(!showFull)} >
            <Col style={{pointerEvents:'none'}}>{content.name}</Col>
        </Row>
        <Collapse in={showFull}>
            <Row className="g-0">
                <Col style={{width:styleImgWidth, minWidth:styleImgWidth, maxWidth:styleImgWidth}}><StampImg src={content.src} /></Col>
                <Col><StampData content={content} updater={props.updater} /></Col>
            </Row>
        </Collapse>
    </Container>)
}

export default StampContainer
