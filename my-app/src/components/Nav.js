import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul id="nav-flex" className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#commercial"
          onClick={() => handlePageChange('Commercial')}
          className={currentPage === 'Commercial' ? 'nav-link active' : 'nav-link'}
        >
          Commercial
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#editorial"
          onClick={() => handlePageChange('Editorial')}
          className={currentPage === 'Editorial' ? 'nav-link active' : 'nav-link'}
        >
          Editorial
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#social"
          onClick={() => handlePageChange('Social')}
          className={currentPage === 'Social' ? 'nav-link active' : 'nav-link'}
        >
          Social
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}



///trialing different nav bars
//Three line collapsible nav bar
// function Nav({ currentPage, handlePageChange }) {
//   return (
//     <div class="pos-f-t">
//       <div class="collapse" id="navbarToggleExternalContent">
//         <div class="bg-dark p-4">
//           <h4 class="text-white">Menu</h4>
//           <ul id="nav-flex" className="nav nav-tabs">
//             <li className="nav-item">
//               <a
//                 href="#home"
//                 onClick={() => handlePageChange('Home')}
//                 className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#commercial"
//                 onClick={() => handlePageChange('Commercial')}
//                 className={currentPage === 'Commercial' ? 'nav-link active' : 'nav-link'}
//               >
//                 Commercial
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#editorial"
//                 onClick={() => handlePageChange('Editorial')}
//                 className={currentPage === 'Editorial' ? 'nav-link active' : 'nav-link'}
//               >
//                 Editorial
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#social"
//                 onClick={() => handlePageChange('Social')}
//                 className={currentPage === 'Social' ? 'nav-link active' : 'nav-link'}
//               >
//                 Social
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#contact"
//                 onClick={() => handlePageChange('Contact')}
//                 className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <nav class="navbar navbar-dark bg-dark">
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//       </nav>
//     </div>
//   );
// }


export default Nav;
