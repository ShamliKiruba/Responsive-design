import './App.scss';
import { layout } from './constants';

function App() {
	return (
		<div className="App">
			<h2>Responsive design</h2>
			<div className="container">
				{layout.map(item => {
					return(
						<div className="item" style={{ height: item.height }}>
							<p>{item.index}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
