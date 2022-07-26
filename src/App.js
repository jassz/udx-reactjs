import './App.css';
// import Account from './Pages/Account';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Account from './Pages/Account/Account';
import Orders from './Pages/Orders';
import Home from './Pages/Homepage/Home';


import Profile from './Pages/Account/Profile';
import Feedback from './Pages/Account/Feedback';
import About from './Pages/Account/About';
import SavedAddress from './Pages/Account/SavedAddress';
import EditAddress from './Pages/Account/EditAddress';
import CreateAddress from './Pages/Account/CreateAddress'
import EditProfile from './Pages/Account/EditProfile'
import ChnagePassword from './Pages/Account/ChangePassword';
import TestFile from './Pages/TestFile';
import OutletList from './Pages/OutletList';

function App() {
  return (
    <div className="App overflow-auto">
      {/* <Account /> */}
      <Router>
        <Routes >
          <Route path="/test-file" element={<TestFile />} />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/outlet-list" element={<OutletList />} />
          {/* <Routes > */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/change-password" element={<ChnagePassword />} />
                <Route path="/address" element={<SavedAddress />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
                <Route path="/address/edit" element={<EditAddress />} />
                <Route path="/address/create" element={<CreateAddress />} />
                <Route path="/profile/edit" element={<EditProfile />} />
            {/* </Routes> */}
        </Routes>
        <Footer />
      </Router>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
