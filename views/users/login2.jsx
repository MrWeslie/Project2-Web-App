var React = require("react");

class Login2 extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css"/>
          </head>      
        <body id="HomePageBody">
          <h1> <b> 5 Mins EASY Claim Submission online! </b> </h1>
          <form className="user-form" method="POST" action="/users/loggedin">           
            <input type="submit" value="Account login" />
            <br></br>
            <br></br>
            <div className="user-attribute">
              <b> User Name: </b> <input name="user_name" type="text" required/>  
              </div>
            <div className="user-attribute">          
              <b> Password: </b> <input name="password" type="password" required/>
              </div>
            <p> <b> Incorrect user name or password, please try again! </b> </p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login2;
