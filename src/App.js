import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Services from './components/Services';
import Profile from './components/Profile';
import Maintance from './components/Maintance';
import Washing from './components/Washing';

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />}>

          <Route path="maintanance" element={<Maintance />} />
          <Route path="washing" element={<Washing />} />
          <Route path="kchbhi" element={<Main />} />
        </Route>
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="*" element={(<h1>Error 404</h1>)} />
      </Routes>

    </>
  );
}

export default App;
