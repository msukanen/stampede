import './Header.css'
import { GitHubLogo, PayPalLinkForm } from './Links'
import { Col, Row } from 'react-bootstrap'

export const Header = () => {return(
	<Row className="mx-0 App-header" variant="dark">
		<Col variant="dark"><h1>Stamp<code className="skewered">EDE</code> <sub>JS</sub>\<sup><code>React</code></sup></h1></Col>
		<Col variant="dark">
			<GitHubLogo project="stampede"/>
			<PayPalLinkForm/>
		</Col>
	</Row>
)}

export default Header
