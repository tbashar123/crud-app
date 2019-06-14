import React from 'react';
import ReactTable from 'react-table';

class Campuses extends React.Component{


  render(){
    return(
  <form onSubmit={this.handleSubmit}>
 <label>
   Add a new campus:
   <input type="text" ref={(input) => this.input = input} />
 </label>
 <input type="submit" value="Submit" />


<label>
Delete a campus:
<input type="text" ref={(input) => this.input = input} />
</label>
 <input type="submit" value="Submit" />
</form>




);
}
}

export default Campuses;
