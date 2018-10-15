// var React = require("react");
var React = require("react");

class Claimdeletenotsuccess extends React.Component {

  render() {

  return ( 
      <div>  

      <head>
          <link rel="stylesheet" href="/style.css" />
          </head>      
        <body id="HomePageBody">
      <form className="user-form" method="POST" action="/users/profile"> 
        <p> <b> Delete is unsuccessful. You could have keyed in an incorrect claim category. </b> </p>
        <p> <b> Please check again or you may contact our officers for enquiries. </b> </p>
          <a href="/users/profile"> Back</a>     <a href="/logout"> Logout </a>   
        </form>
        </body>

      </div>     
    );

  }

}

module.exports = Claimdeletenotsuccess;

// class Claimdeletenotsuccess extends React.Component {

//   render() {

//   let actionPath = "/" + this.props.claims[0].id + "?_method=DELETE";

//   return ( 
//       <div>  

//       <body>

//         <p> Delete Claim Form </p>
//         <p> Claim deletion is unsuccessful. This could be due to the reason that you have incorrectly specify the claim you wish to delete. </p>
//         <p> Please check through again or you may contact our officers for enquiries. </p>
//           <form className="user-form" method="POST" action={actionPath}>  
//            <input type="submit" value="Delete" />  
//            <br></br> 
//            <br></br>       
            
//             <div className="user-attribute">          
//               Category: <input name = "category" type = "text" defaultValue = {this.props.claims[0].category} required/>
//               </div>

//             <br></br>
//           </form>
//           <a href="/users/profile"> Back</a>     <a href="/logout"> Logout </a>   

//         </body>

//       </div>     
//     );

//   }

// }

// module.exports = Claimdeletenotsuccess;