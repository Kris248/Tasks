// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import TasksPage from "../pages/TasksPage";
// import LoginPage from "../pages/LoginPage";
// import RequireAuth from "../components/RequireAuth";
// import SignupPage from "../pages/SignupPage";
// import Logout from "../pages/Logout";
// import AdminPage from "../pages/AdminPage";

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>
//           <li>
//             <Link 
//             to="/logout">logout</Link>
//           </li>
//           <li>
//             <Link 
//             to="/admin">Go to Admin Panel</Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route
//             index
//             element={
//               <RequireAuth>
//                 <TasksPage />
//               </RequireAuth>
//             }
//           />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/admin" element={<AdminPage />} />
//         </Routes>
//       </BrowserRouter>

//       {/* Updating Task */}
//     </div>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import TasksPage from '../pages/TasksPage';
import LoginPage from '../pages/LoginPage';
import RequireAuth from '../components/RequireAuth';
import SignupPage from '../pages/SignupPage';
import Logout from '../pages/Logout';
import AdminPage from '../pages/AdminPage';
import Navbar from '../pages/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <TasksPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>

      {/* Updating Task */}
    </div>
  );
};

export default App;

