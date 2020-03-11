import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chirps from './Components/chirps'
// import { RouteComponentProps } from 'react-router-dom'


const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<h1>Hello!</h1>
			<Switch>
				<Route path="/" component={Chirps}/>
			</Switch>
		</Router>
	);

}

export interface IAppProps {

}

export interface IAppState {
	name: string;
}

export default App;
