var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css"/>
          </head>      
        <body id="HomePageBody">
          <p> <b> Insurance Claim Submission Login Page</b> </p>
          <form className="user-form" method="POST" action="/users/loggedin">           
            <div className="user-attribute">
              <b> User Login: </b> <input name="user_name" type="text" required/>  
              </div>
            <div className="user-attribute">          
              <b> Password: </b> <input name="password" type="password" required/>
              </div>
            <br></br>
            <input type="submit" value="Account- Login"/>
            <br></br>
            <br></br>
            <a href="/users/profile"> Back</a> 
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
