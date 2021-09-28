import './App.css'
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import { stampCollection } from './modules/DataManager'

export default function App() {return (
	<div className="App">
		<Header />
		<MainWindow collection={stampCollection()}/>
	</div>
)}
