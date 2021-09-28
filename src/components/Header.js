import { GitHubLogo, PayPalLinkForm } from './components/Links'

export const Header = () => {return(
	<header className="App-header">
		<div style={{display:'flex'}}>
			<div><h1>Stampede</h1></div>
			<div>
				<GitHubLogo project="stampede"/>
				<PayPalLinkForm/>
			</div>
		</div>
	</header>
)}

export default Header
