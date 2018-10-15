var React = require("react");

class Claim4 extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> Please enter your claims submission below with the respectively document attached. </b> </p>
        <p> <b> We can't process your submit application. You are not eligible for the claim submission. </b> </p>
        <p> <b> Pls ensure that you have entered the appropriate claim for submission or you may contact our officers directly for enquiries.</b> </p>
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

module.exports = Claim4;