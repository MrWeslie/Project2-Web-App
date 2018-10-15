var React = require("react");

class Claimedit2 extends React.Component {

  render() {

  return ( 
      <div>  

      <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
      <form className="user-form" method="POST" action="/users/profile"> 
        <p> <b> You are not eligible for this claim submission. Pls re-submit another claim. </b> </p>
          <a href="/users/profile"> Back</a>     <a href="/logout"> Logout </a>   
        </form>
        </body>

      </div>     
    );

  }

}

module.exports = Claimedit2;

