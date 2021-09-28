import './MainWindow.css'
import { useState, useEffect } from 'react'
import { StampContainer } from './StampContainer'
import { Row, Col, Container } from 'react-bootstrap'

export const MainWindow = (props) => {
    const [collection, setCollection] = useState(props.collection)
    const [numCols, setNumCols] = useState(props.cols ? props.cols : 4)
    
    useEffect(() => {
        console.log(`Cols: ${props.cols}`)
        props.cols && setNumCols(props.cols)
    }, [props])

    return(<Container fluid className="p-0">
        {collection && (() => {
            let rs = []
            for (let i=0; i < collection.length; i += numCols)
                rs.push( collection.slice(i, i+numCols) )
            //! NOTE: due React's rendering pipeline or somesuch, map'ped stuff's 'key' prop is crucial!
            //!       Without the 'key' prop all sorts of shit can go wrong... at least if nesting map().
            let i = 0
            return rs.map((row, rkey) => {
                return <Row key={`row-${rkey}-${numCols}`} className="g-0">{
                        row.map(col => {
                            i++
                            return <Col key={`col-${i}}`} style={{border:'2px dotted blue'}}>
                                <StampContainer content={col} />
                            </Col>
                        })
                }</Row>
            })
        })()}
    </Container>)
}

export default MainWindow
