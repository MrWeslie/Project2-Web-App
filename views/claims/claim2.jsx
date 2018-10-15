var React = require("react");

class Claim2 extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> Please enter your claims submission below with the respectively document attached. </b> </p>
        <p> <b> Your claim submission exceeds your eligiblity. Pls re-enter a correct amount. </b> </p>
          <form className="user-form" method="POST" action="/users/claims">  
          <input type="submit" value="Add" /> 
          <br></br>
          <br></br>    
            
            <div className="user-attribute">          
              <b> Category: </b> <input name="category" type="text" required/>
              </div>
            <div className="user-attribute">          
              <b> Claim Amount: </b> <input name="amount" type="text" required/>
              </div>
            <div className="user-attribute">          
              <b> Attachment: </b> <input name="image" type="file" />
              </div>
            <br></br>
          </form>
          <a href="/users/profile"> Back</a>     <a href="/logout"> Logout </a>   
        </body>
      </html>
    );
  }
}

module.exports = Claim2;


//<div className="user-attribute">
//             User Name: <input name="user_name" type="text" required/>  
//              </div>
