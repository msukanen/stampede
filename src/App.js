import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainWindow from './components/MainWindow'
import { stampCollection } from './modules/DataManager'
import { Container, Row, Col } from 'react-bootstrap'

export const App = () => {
	const [numCols, setNumCols] = useState(1)

	useEffect(() => {
		setNumCols(numCols)
	}, [numCols])

	return (
		<Container className="p-0 App" fluid>
			<Header />
			<Row className="g-0">
				<Col xs={1} className="App-side-nav">
					<Container>
						<Row>
							<Col><button onClick={() => setNumCols(1)}><code>1</code></button>
							<button onClick={() => setNumCols(2)}><code>2</code></button>
							<button onClick={() => setNumCols(3)}><code>3</code></button>
							<button onClick={() => setNumCols(4)}><code>4</code></button>
							<button onClick={() => setNumCols(5)}><code>5</code></button></Col>
						</Row>
					</Container>
					Consequat tempor anim amet laborum. Ullamco consectetur adipisicing commodo minim voluptate culpa. Voluptate laborum cupidatat et officia sint enim exercitation fugiat velit. Pariatur laboris officia consectetur eiusmod quis. In nostrud sunt Lorem nulla voluptate cupidatat officia veniam. Id sint aliqua cillum proident veniam nulla laboris labore veniam sit enim quis laborum nisi. Anim reprehenderit magna velit sit irure proident culpa.
				</Col>
				<Col><MainWindow collection={stampCollection()} cols={numCols} /></Col>
			</Row>
		</Container>
	)
}

export default App
