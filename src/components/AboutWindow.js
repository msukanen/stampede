import './AboutWindow.css'
import { appTitleText } from '../About'
import { Container } from 'react-bootstrap'

let shakerDirection = 3
let shakeDelayMS = 1000/20
let shakeRotate = 0
let shakeRotatePerTick = 3

function shakeItBaby(id1, id2) {
    let elem1 = document.getElementById(id1)
    let elem2 = document.getElementById(id2)
    if (elem1 === null || elem1 === undefined || elem2 === null || elem2 === undefined) {
        window.setTimeout(() => shakeItBaby(id1, id2), shakeDelayMS*40)
        return null
    }
    let compCss1 = window.getComputedStyle(elem1)
    let compCss2 = window.getComputedStyle(elem2)
    elem1.style.paddingLeft = (parseInt(compCss1.paddingLeft)+shakerDirection)+'px'
    elem1.style.transform = 'rotate('+shakeRotate+'deg)'
    elem1.style.transformOrigin = '64px 0'
    // elem2.style.paddingLeft = (parseInt(compCss2.paddingLeft)-shakerDirection)+'px'
    shakerDirection = -shakerDirection
    if (shakeRotate < 360)
         shakeRotate+= shakeRotatePerTick
    else shakeRotate = 0
    setTimeout(() => shakeItBaby(id1, id2), shakeDelayMS)
}

shakeItBaby('shake-it-baby', 'dont-shake-the-baby')

export const AboutWindow = () => {
    return(<Container>
        <h3>About {appTitleText}</h3>
        <p>
            Lets collect stamps?
        </p>
        <p>
            Stamps! More Stamps! A
            <span><div style={{position:'relative'}} id="shake-it-baby">{appTitleText}</div></span> <span id="dont-shake-the-baby">of stamps!</span>
        </p>
    </Container>)
}

export default AboutWindow
