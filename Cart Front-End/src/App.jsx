import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import OTPPage from './pages/OTPPage';
import { getToken } from './utility/TokenHelper';
import NavBar from './components/NavBar';

const App = () => {
// if(getToken()){
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/cart" element={<CartPage/>}/>
//           <Route path="/" element={<HomePage/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }else{
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<HomePage/>}/>
//           <Route path="/login" element={<LoginPage/>}/>
//           <Route path="/otp" element={<OTPPage/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// };






    return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/cart" element={<CartPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/otp" element={<OTPPage/>}/>
          </Routes>
      </BrowserRouter>
    );
    }

export default App;