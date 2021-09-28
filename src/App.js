import './App.css'
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import { stampCollection } from './modules/DataManager'
import { Container, Row, Col } from 'react-bootstrap'

export default function App() {return (
	<Container className="p-0 App" fluid>
		<Header />
		<Row noGutters>
			<Col xs={1}>Consequat tempor anim amet laborum. Ullamco consectetur adipisicing commodo minim voluptate culpa. Voluptate laborum cupidatat et officia sint enim exercitation fugiat velit. Pariatur laboris officia consectetur eiusmod quis. In nostrud sunt Lorem nulla voluptate cupidatat officia veniam. Id sint aliqua cillum proident veniam nulla laboris labore veniam sit enim quis laborum nisi. Anim reprehenderit magna velit sit irure proident culpa.</Col>
			<Col><MainWindow collection={stampCollection()} cols={3} /></Col>
		</Row>
	</Container>
)}
