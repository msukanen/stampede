import './AboutWindow.css'
import { appTitleText } from '../About'
import { Container } from 'react-bootstrap'

let shakerDirection = 3     // 3 px per step
let shakeDelayMS = 1000/20  // 1000ms / 20 delay ... ~ 50fps
let shakeRotate = 0         // initial angle
let shakeRotatePerTick = 3  // degrees per tick

function shakeItBaby(id1, id2) {
    let elem1 = document.getElementById(id1)
    // did we get elem corresponding to ID? If not, lets wait a while and try again...
    //! React puts virtual DOM contents to real DOM whenever it feels like it, so
    //! we get the ID eventually... if ever... Anyway, crank delay up while waiting
    //! for the ID to pop up...
    if (elem1 === null || elem1 === undefined) {
        window.setTimeout(() => shakeItBaby(id1, id2), shakeDelayMS*40)
        return null
    }
    let compCss1 = window.getComputedStyle(elem1)
    elem1.style.paddingLeft = (parseInt(compCss1.paddingLeft)+shakerDirection)+'px'
    elem1.style.transform = 'rotate('+shakeRotate+'deg)'
    elem1.style.transformOrigin = '64px 0'
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
            <span><div style={{position:'relative'}} id="shake-it-baby">{appTitleText}</div></span> <span id="dont-shake-the-baby">of stamps!</span> And
            yes, that spinning and shaking text is <em>intentionally</em> trying to cause you nausea, irritation, and other funny symptoms
            of nervous breakdown. That's what you get when <b>you find out that your most loved stamp is ruined</b>!
        </p>
    </Container>)
}

export default AboutWindow
