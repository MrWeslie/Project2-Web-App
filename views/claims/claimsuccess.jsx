var React = require("react");

class Claimsuccess extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> You are eligible for the claim submission and it is currently being processed. An officer will contact you on the following working day. </b> </p>
          <form className="user-form" method="POST" action="/users/claims"> 
          <a href="/logout"> Logout</a>                
          </form>         
        </body>
      </html>
    );
  }
}

module.exports = Claimsuccess;
