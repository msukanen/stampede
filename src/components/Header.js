import './Header.css'
import { appTitleText } from '../About.js'
import { GitHubLogo, PayPalLinkForm } from './Links'
import { Col, Container, Row } from 'react-bootstrap'

export const Header = (props) => {return(
	<Container fluid className="p-0 App-header">
		<Row variant="dark">
			<Col variant="dark" className="noselect"><h1>{appTitleText}</h1></Col>
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
