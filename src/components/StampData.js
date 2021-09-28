import { useState, useEffect } from 'react'

export const StampData = (props) => {
    const [name, setName] = useState(props.content.name)
    const [year, setYear] = useState(props.content.published)
    const [stamped, setStamped] = useState(props.content.stamped)

    return(<div className="stamp-data">
        Name: {name} &mdash; {year}
        {stamped && <>&mdash; stamped</>}
    </div>)
}

export default StampData
