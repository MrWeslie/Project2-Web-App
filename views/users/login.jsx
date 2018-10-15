var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css"/>
          </head>      
        <body id="HomePageBody">
          <h1> <b> 5 Mins EASY Claim Submission online! </b> </h1>
          <form className="user-form" method="POST" action="/users/loggedin">           
            <input type="submit" value="Account login"/>
            <br></br>
            <br></br>
            <div className="user-attribute">
              <b> User Name: </b> <input name="user_name" type="text" required/>  
              </div>
            <div className="user-attribute">          
              <b> Password: </b> <input name="password" type="password" required/>
              </div>
          </form>         
        </body>
      </html>
    );
  }
}

module.exports = Login;

//{this.props.login === 'Incorrect user name or password, please try again!'}

 // <ul>
          //   {this.props.login.map(login => (
          //     <li key={login.login}>
          //       {login.unsuccessful}
          //     </li>
          //   ))}
          // </ul>
