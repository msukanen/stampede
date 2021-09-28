import './StampImage.css'
import { useState, useEffect } from 'react'

export const StampImg = (props) => {
    const [src, setSrc] = useState(props.src)

    return(<div className="stamp-img">
        <img src={src} alt={`${src}`} />
    </div>)
}

export default StampImg