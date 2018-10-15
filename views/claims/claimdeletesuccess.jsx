var React = require("react");

class Claimdeletesuccess extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> You have successfully deleted your claim submission. Thank you and have a nice day! </b> </p>
          <form className="user-form" method="POST" action="/users/claims"> 
          <a href="/logout"> Logout</a>                
          </form>         
        </body>
      </html>
    );
  }
}

module.exports = Claimdeletesuccess;
