import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                NewsChatter
              </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Home
                    </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/entertainment"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Entertainment
                    </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/health"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Health
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/sciene"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Science
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/sports"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Sports
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/technology"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      Technology
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// export class Navbar extends Component {
//   static propTypes = {};

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               NewsChatter
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page">
//                     <Link
//                       to="/"
//                       style={{ color: "inherit", textDecoration: "inherit" }}
//                     >
//                       Home
//                     </Link>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     <Link
//                       to="/entertainment"
//                       style={{ color: "inherit", textDecoration: "inherit" }}
//                     >
//                       Entertainment
//                     </Link>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     General
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Health
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Science
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Sports
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Technology
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
