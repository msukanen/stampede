import './StampContainer.css'
import { useState, useEffect } from 'react'
import { StampImg } from './StampImage'
import { StampData } from './StampData'
import { Row, Col } from 'react-bootstrap'

export const StampContainer = (props) => {
    const [content, setContent] = useState(props.content)
    const [showFull, setShowFull] = useState(false)

    const toggle = () => setShowFull(!showFull)

    return(<div className="stamp-container">
        <Row>
            <div onClick={toggle}><Row><Col>{content.name}</Col></Row></div>
            {showFull &&
                <Row>
                    <Col><StampData content={content} /></Col>
                    <Col><StampImg src={content.src} /></Col>
                </Row>}
        </Row>
    </div>)
}
