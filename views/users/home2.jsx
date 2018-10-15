// var React = require("react");

// class Home2 extends React.Component {
//   render() {
//     return (
//       <html>       
//         <head>
//           <link rel="stylesheet" href="/style.css" />
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
//           </head>      
//         <body id="HomePageBody">
//         <div className="container my-container">

//         <div className="row my-row1">
//           <h1><i>Insurance Claim Submission EASY ONLINE!</i></h1>
//           <ul> 
//               <li> Paperwork NO </li>
//               <li> Fast and convenient </li>
//               <li> Processing time: 1 working day </li>
//               <li> 2 easy steps:
//                   <ol> 1. Create an account </ol>
//                   <ol> 2. Submit claims online with supporting documents </ol>
//               </li>
//           </ul>
//           </div>

//           <div className="row my-row2">
//           <h2> Claim categories: </h2>
//           <ul> 
//               <li> Life & Health </li>
//               <li> Motor </li>
//               <li> Travel </li>
//               <li> Personal Accident </li>
//               <li> Home </li>
//               <li> Commercial </li>
//           </ul>
//           </div>

//           <div className="row my-row3">
//           <form className="user-form" method="POST" action="/users">                      
//             <div className="user-attribute">
//             <br></br>
//               User Name: <input name="user_name" type="text" required/>  
//               </div>
//             <div className="user-attribute">          
//               Password: <input name="password" type="password" required/>
//               </div>
//             <div className="user-attribute">          
//               Nric: <input name="nric" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Nationality: <input name="nationality" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Phone: <input name="phone_contact" type="text" required/>
//               </div>
//             <div className="user-attribute">          
//               Email: <input name="email_contact" type="text" required/>
//               </div>
//               <br></br>
//               <p> User Name has been registered before! </p>
//               <p> Pls select another User Name to register your account.</p>
//               <input type="submit" value="Register Account" />
//               <br></br>
//               <p> Or log in below if you have already registered an account. </p> 
//               <a href="/users/login"> Login</a>   
//           </form>
//           </div>

//           </div>
//         </body>
//       </html>
//     );
//   }
// }

// module.exports = Home2;






var React = require("react");

class Home2 extends React.Component {
  render() {
    return (
      <html> 
        <head>
          <link rel="stylesheet" href="/style.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          </head>      
        <body id="HomePageBody">
        <div className="container my-container">

          <div className="row my-row1">
            <h1><i>Insurance Claim Submission Online Form</i></h1>
          

          <ul> 
          
              <li> Move away from Manual Forms </li>
          

           
              <li> Fast and convenient </li>
          

          
              <li> 1 work day to process </li>
          

           
              <li> 2 easy steps: </li>
           

           
              <ol> 
                <li> Create an online account </li>
                <li> Submit claims online with supporting documents </li>
              </ol>
            
          </ul>

          </div>
          
          <div className="row my-row7">      
            <h2> <i>Categories </i></h2>
          </div>         
          <ul> 

          <div className="row my-row8">   

            <div className="my-colleft">
              <li> Life & Health </li>
              <li> Motor </li>
            </div>

            <div className="my-colcenter">
              <li> Travel </li>
              <li> Personal Accident </li>
            </div>

            <div className="my-colright">
              <li> Home </li>
              <li> Commercial </li>
            </div>

          </div>
          </ul>
          
          <div className="row my-row9">
          <form className="user-form" method="POST" action="/users">                      
              <div className="user-attribute">
              <br></br>
              <input type="submit" value="Register Account" />
              <br></br>
              <br></br>
              <p> User Name has been registered before! Please select another User Name to register your account. </p>
                User Name:<input name="user_name" type="text" required/>  
              </div>
              <div className="user-attribute">          
              Password : <input name="password" type="password" required/>
              </div>
              <div className="user-attribute">          
              NRIC Nos : <input name="nric" type="text" required/>
              </div>
              <div className="user-attribute">          
              Nationality:<input name="nationality" type="text" required/>
              </div>
              <div className="user-attribute">          
              Phone Nos:<input name="phone_contact" type="text" required/>
              </div>
              <div className="user-attribute">          
              Email Add: <input name="email_contact" type="text" required/>
              </div>
              <br></br>
              <p> Or log in below if you have already registered an account. </p> 
              <a href="/users/login"> Login</a>   
          </form>

          </div>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Home2;