import React from 'react';
import './App.css';
import students from './Students.jpeg'

class Students extends React.Component{

  render(){
    return(

  <form onSubmit={this.handleSubmit}>
 <label>

   Add a new student:
   <input type="text" ref={(input) => this.input = input} />
 </label>
 <input type="submit" value="Submit" />

 <label>

 Delete a student:
 <input type="text" ref={(input) => this.input = input} />
 </label>

 <input type="submit" value="Submit"/>
 <div>
 <img src={students} alt=""/>
 </div>
</form>

);
}
}

export default Students;
