import './App.css'
import { GitHubLogo, PayPalLinkForm } from './components/Links'

export default function App() {return (
	<div className="App">
		<header className="App-header">
			<div style={{display:'flex'}}>
				<div><h1>Stampede</h1></div>
				<div>
					<GitHubLogo project="stampede"/>
					<PayPalLinkForm/>
				</div>
			</div>
		</header>
	</div>
)}
