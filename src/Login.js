import React from 'react';
import ToDoApp from '../components/ToDoApp';
import {Link} from 'react-router'
import Home from './Home'
class Login extends React.Component {
  render(){ 
    return( 
		<div className="row">
        <Home/>
        <ToDoApp/>
        <Link to="/home">Home</Link>
		</div>
    );
  }
}

export default Login