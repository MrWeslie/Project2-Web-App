var React = require("react");

class Claimedit extends React.Component {

  render() {

  let actionPath = "/" + this.props.claims[0].id + "?_method=DELETE";

  return ( 
      <div>  

      <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">

        <p> <b> Delete Claim Form </b> </p>

          <form className="user-form" method="POST" action={actionPath}>  
           <input type="submit" value="Delete" />  
           <br></br> 
           <br></br>       
            
            <div className="user-attribute">          
              <b> Category: </b> <input name = "category" type = "text" defaultValue = {this.props.claims[0].category} required/>
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

