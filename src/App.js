// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import ItemList from './components/ItemList'; // Add ItemList component for viewing items and adding new items
// import ItemDetails from './components/ItemDetails';
// import SearchResult from './components/SearchResult'; // Search result for searching items
// import About from './components/About';
// import Login from './components/Login'; // Login page
// import Footer from './components/Footer'; // Footer
// import NavBar from './components/NavBar'; // NavBar
// import QualityCheck from './components/QualityCheck'; // Quality check component
// import Reports from './components/Reports'; // Reports component
// import Notifications from './components/Notifications'; // Notifications component
// import ApprovalDashboard from './components/ApprovalDashboard'; // Approval dashboard
// import Settings from './components/Settings'; // Settings page
// import Contact from './components/Contact'; // Contact page
// import './App.css';

// // Protected Route Wrapper
// const ProtectedRoute = ({ loggedIn, children }) => {
//   return loggedIn ? children : <Navigate to="/login" />;
// };

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Check if the user is logged in on page load
//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       setLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <div className="app-container">
//         {/* Pass setLoggedIn as a prop to NavBar */}
//         <NavBar setLoggedIn={setLoggedIn} />

//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/items"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <ItemList /> {/* Page where we list and add medicines */}
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/item/:id"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <ItemDetails /> {/* Page to view details of a single item */}
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/quality-check"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <QualityCheck />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/reports"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <Reports />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/notifications"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <Notifications />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/approval-dashboard"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <ApprovalDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/settings"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <Settings />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/search-result"
//             element={
//               <ProtectedRoute loggedIn={loggedIn}>
//                 <SearchResult />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import SearchResult from './components/SearchResult';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import DeleteMedicine from './components/DeleteMedicine';
import UpdateMedicine from './components/UpdateMedicine'; 
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check if token exists on initial load
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) setLoggedIn(true);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <NavBar setLoggedIn={setLoggedIn} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/items"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <ItemList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/item/:id"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <ItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-result"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SearchResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="/delete-medicine"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <DeleteMedicine />
              </ProtectedRoute>
            }
          />
           <Route
            path="/update-medicine"
            element={loggedIn ? <UpdateMedicine /> : <Navigate to="/login" />}
          /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;