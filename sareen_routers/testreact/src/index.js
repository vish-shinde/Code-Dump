import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   );

// class Nav extends React.Component {
//   render() {
//     return(
//       <>
//       <Router>
//         <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>          
//         </ul>

//         <Route  path='/' component ={Home} />
//         <Route  path='/about' component ={About} />
//         <Route  path='/contact' component ={Contact} />
//       </Router>
//       </>
//     )
//   }
// }

ReactDOM.render(<App/>,document.getElementById("root"));