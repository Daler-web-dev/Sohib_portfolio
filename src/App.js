import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Pages/main/Main'
import Blog from './Pages/Blog/Blog'


function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Switch>
					<Route path="/Blog" component={Blog} />
					<Route path="/" component={Main} />
					{/* <Main className="Main"/> */}
				</Switch>
				<Footer/>
			</div>
		</Router>
	)
}

export default App
