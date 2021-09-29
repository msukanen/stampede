import './StampImage.css'
import { useState, useEffect } from 'react'

export const StampImg = (props) => {
    const [src, setSrc] = useState(props.src)

    return(<img src={src} alt={`${src}`} className="stamp-img" />)
}

export default StampImg
