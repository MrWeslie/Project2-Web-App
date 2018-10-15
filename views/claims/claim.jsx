// var React = require("react");

// class Claim extends React.Component {
//   render() {
//     return (
//       <html>       
//         <body>
//         <h1> Please enter your claims submission below with the respectively document attached. </h1>
//           <form className="user-form" method="POST" action="/users/claims">           
//             <div className="user-attribute">
//               Life & Health: <input name="life_and_health" type="text" required/>  
//               </div>
//             <div className="user-attribute">          
//               Motor: <input name="motor" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Travel: <input name="travel" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Personal Accident: <input name="personal_accident" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Home: <input name="home" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Commercial: <input name="commercial" type="text" required/>
//               </div>
//             <br></br>
//             <input type="submit" value="Submit Claims" />
//           </form>
//         </body>
//       </html>
//     );
//   }
// }

// module.exports = Claim;

var React = require("react");

class Claim extends React.Component {
  render() {
    return (
      <html>       
        <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
        <p> <b> Please enter your claims submission below with the respectively document attached. </b> </p>
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

module.exports = Claim;

//<div className="user-attribute">
//User Name: <input name="user_name" type="text" required/>               
             // </div>

