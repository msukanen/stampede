import './MainWindow.css'
import { useState, useEffect } from 'react'
import { StampContainer } from './StampContainer'
import { Row, Col, Container } from 'react-bootstrap'

export const MainWindow = (props) => {
    const [collection, setCollection] = useState(props.collection)
    const [numCols, setNumCols] = useState(props.cols ? props.cols : 4)
    
    return(<Container fluid className="p-0">
        {collection && (() => {
            let rs = []
            for (let i=0; i < collection.length; i += numCols)
                rs.push( collection.slice(i, i+numCols) )
            return rs.map((row, key) => {
                return <Row key={`row-${key}`} noGutters>{
                        row.map((col, key) => {
                            return <Col key={`col-${key}`}>
                                <StampContainer key={key} content={col} />
                            </Col>
                        })
                }</Row>
            })
        })()}
    </Container>)
}

export default MainWindow
