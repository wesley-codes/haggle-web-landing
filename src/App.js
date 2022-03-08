import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Buypage from './pages/Buypage';
import SellPage from './pages/SellPage';

function App() {
	return (
		<>
			
		<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Buypage/> }/>
					<Route path='/sell' element={<SellPage/>}/>
				</Routes>
		</Router>
		</>
	);
}

export default App;
