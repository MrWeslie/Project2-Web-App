var React = require("react");

class Profile extends React.Component {
  render() {
    let PathEdit = '/' + this.props.cookies.user_id + '/edit';
    let PathDelete = '/' + this.props.cookies.user_id + '/delete';
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> Welcome! Please select if you wish to: </b> </p>
         <form className="user-form" method="POST" action="/users/profile"> 
        <a href="/users/claims"> ADD: New Claim </a>      
        <br></br>
        <br></br>

        <a href={PathEdit}> EDIT: Previous Claim </a> 
        
        <br></br>
        <br></br>
        <a href={PathDelete}> DELETE: Previous Claim </a> 
        <p> <b> Or proceed to.. </b> </p>         
        <a href="/logout"> Logout</a>            
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Profile;


//<a href={'/' + this.props.id + '/edit'}>