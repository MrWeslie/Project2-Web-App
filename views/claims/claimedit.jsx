var React = require("react");

class Claimedit extends React.Component {

  render() {

  let actionPath = "/" + this.props.claims[0].id + "?_method=PUT";

  return ( 
      <div>  

      <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">

        <p> <b> Edit Claim Form </b> </p>

          <form className="user-form" method="POST" action={actionPath}>  
           <input type="submit" value="Update" />  
           <br></br> 
           <br></br>       
            
            <div className="user-attribute">          
              <b> Category: </b> <input name = "category" type = "text" defaultValue = {this.props.claims[0].category} required/>
              </div>
            <div className="user-attribute">          
              <b> Claim Amount: </b> <input name = "amount" type = "text" defaultValue = {this.props.claims[0].amount} required/>
              </div>
            <div className="user-attribute">          
              <b> Attachment: </b> <input name="image" type="file" />
              </div>
            <br></br>
          </form>
          <a href="/users/profile"> Back</a>     <a href="/logout"> Logout </a>   

        </body>

      </div>     
    );

  }

}

module.exports = Claimedit;



//<div className="user-attribute">
//              User Name: <input name = "user_name" type = "text" defaultValue = {this.props.claims[0].user_name} required/>  
//              </div>
