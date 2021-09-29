import './Header.css'
import { GitHubLogo, PayPalLinkForm } from './Links'
import { Col, Container, Row } from 'react-bootstrap'

export const Header = (props) => {return(
	<Container fluid className="p-0 App-header">
		<Row variant="dark">
			<Col variant="dark" className="noselect"><h1>Stamp<code className="skewered">EDE</code> <sub style={{fontSize:'smaller'}}>JS</sub>\<sup><code>React</code></sup></h1></Col>
			{!props.hideExtra &&
			<Col variant="dark" className="noselect">
				<GitHubLogo project="stampede"/>
				<PayPalLinkForm/>
			</Col>
			}
		</Row>
	</Container>
)}

export default Header
