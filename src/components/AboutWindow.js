import { appTitleText } from '../About'
import { Container } from 'react-bootstrap'

export const AboutWindow = () => {
    return(<Container>
        <h3>About {appTitleText}</h3>
        <p>
            Lets collect stamps?
        </p>
        <p>
            Stamps!
        </p>
    </Container>)
}

export default AboutWindow
