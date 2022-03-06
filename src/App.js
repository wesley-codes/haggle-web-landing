import './App.css';
import BuyPage from './pages/Buypage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SellPage from './pages/SellPage';

function App() {
	return (
		<Router>
				<div className="App">
			<Routes>
					<Route path="/" element={<BuyPage   />} />
					<Route path="/sell" element={<SellPage />} />
			</Routes>
				</div>
		</Router>
	);
}

export default App;
