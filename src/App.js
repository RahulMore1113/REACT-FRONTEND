import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Component/HeaderComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import FooterComponent from './Component/FooterComponent';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element = {<ListEmployeeComponent />} />
            <Route path='/employees' element = {<ListEmployeeComponent />} />
            <Route path='/add-employee' element = {<CreateEmployeeComponent />} />
            <Route path='/update-employee/:id' element = {<UpdateEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
};

export default App;