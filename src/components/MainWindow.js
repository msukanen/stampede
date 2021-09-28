import './MainWindow.css'
import { useState, useEffect } from 'react'
import { StampContainer } from './StampContainer'

export const MainWindow = (props) => {
    const [collection, setCollection] = useState(props.collection)
    
    return(<>
        {collection && collection.map( (entry, key) => <StampContainer key={key} content={entry} /> )}
    </>)
}

export default MainWindow
