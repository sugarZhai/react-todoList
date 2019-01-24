import React from 'react';
import ToDoSelect from '../components/ToDoApp';


class Home extends React.Component {
  render(){ 
    return( 
			<div className="row">
		  <div className="col-md-10 col-md-offset-1">
		    <div className="panel panel-default">
		      <div className="panel-body">
		        <h1>My To DMyDo AppvMy To Do AppvMy To Do Appo App</h1>
		        <hr/>
		       List goes here.
		        <br />
		        <ToDoSelect />
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
}

export default Home