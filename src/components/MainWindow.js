import './MainWindow.css'
import { useState, useEffect } from 'react'
import { StampContainer } from './StampContainer'
import { Row, Col, Container } from 'react-bootstrap'

export const MainWindow = (props) => {
    const [collection, setCollection] = useState(props.collection)
    const [numCols, setNumCols] = useState(props.cols ? props.cols : 1)
    
    useEffect(() => {
        console.log(`Cols: ${props.cols}`)
        props.cols && setNumCols(props.cols)
    }, [props])

    return(<Container fluid className="p-0">
        {collection && (() => {
            let rowSlices = []
            for (let i=0; i < collection.length; i += numCols)
                rowSlices.push( collection.slice(i, i+numCols) )
            //! NOTE: due React's rendering pipeline or somesuch, map'ped stuff's 'key' prop is crucial!
            //!       Without the 'key' prop all sorts of shit can go wrong... at least if nesting map().
            let i = 0
            return rowSlices.map((rowSlice, rowKey) => {
                return <Row key={`row-${rowKey}-${numCols}`} className="g-0">{
                        rowSlice.map(stampObj => {
                            i++
                            return <Col key={`col-${i}}`}>
                                <StampContainer content={stampObj} cols={numCols} />
                            </Col>
                        })
                }</Row>
            })
        })()}
    </Container>)
}

export default MainWindow
