import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Componenets/Home';
import Userhome from './Componenets/Userhome';
import Userlogin from './Componenets/Userlogin';
import Usersignup from './Componenets/Usersignup';
import { AddProduct } from './Componenets/AddProduct';
import { Addrec } from './Componenets/Addrec';
import AboutUs from './Componenets/AboutUs';
import { Deleteproduct } from './Componenets/Deleteproduct';
import { Deleterec } from './Componenets/Deleterec';
import { ProductList } from './Componenets/ProductList';
import { Searchproduct } from './Componenets/Searchproduct';
import { Searchrec } from './Componenets/Searchrec';
import { Viewproduct } from './Componenets/Viewproduct';
import { Viewrec } from './Componenets/Viewrec';
import WhyOrganicSustainable from './Componenets/WhyOrganicSustainable';
import { Addtip } from './Componenets/Addtip';
import { Deltip } from './Componenets/Deltip';
import { Sertip } from './Componenets/Sertip';
import { Viewtip } from './Componenets/Viewtip';
import Adminhome from './Componenets/Adminhome';
import { Rec } from './Componenets/Rec';
import { Tip } from './Componenets/Tip';
import { Product } from './Componenets/Product';
import Viewuser from './Componenets/Viewuser';
import DeleteUser from './Componenets/DeleteUser';
import OrderDetails from './Componenets/OrderDetails';
import { AddComplaint } from './Componenets/AddComplaint';
import { ViewComplaint } from './Componenets/ViewComplaint';
import Vedeo from './Componenets/Vedeo';
import UserDetails from './Componenets/UserDetails';
import UserOrders from './Componenets/UserOrders';
import SoldProducts from './Componenets/SoldProducts';

import ReceivedOrders from './Componenets/ReceivedOrders';
import File from './Componenets/File';
import FileList from './Componenets/FileList';

import ConfirmFarmer from './Componenets/ConfirmFarmer';
import Fconfirmation from './Componenets/Fconfirmation';






function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={(<Home/>)}/>
    <Route path='/userhome'element={(<Userhome/>)}/>
    <Route path='/login'element={(<Userlogin/>)}/>
    <Route path='/signup'element={(<Usersignup/>)}/>
    <Route path='/addpro'element={(<AddProduct/>)}/>
    <Route path='/addrec'element={(<Addrec/>)}/>
    <Route path='/abt'element={(<AboutUs/>)}/>
    <Route path='/deletepro'element={(<Deleteproduct/>)}/>
    <Route path='/deleterec'element={(<Deleterec/>)}/>
    <Route path='/buy'element={(<ProductList/>)}/>
    <Route path='/searchpro'element={(<Searchproduct/>)}/>
    <Route path='/viewpro'element={(<Viewproduct/>)}/>
    <Route path='/searchrec'element={(<Searchrec/>)}/>
    <Route path='/viewrec'element={(<Viewrec/>)}/>
    <Route path='/why'element={(<WhyOrganicSustainable/>)}/>
    <Route path='/addtip'element={(<Addtip/>)}/>
    <Route path='/deletetip'element={(<Deltip/>)}/>
    <Route path='/searchtip'element={(<Sertip/>)}/>
    <Route path='/viewtips'element={(<Viewtip/>)}/>
    <Route path='/adminhome'element={(<Adminhome/>)}/>
    <Route path='/recipes'element={(<Rec/>)}/>
    <Route path='/tips'element={(<Tip/>)}/>
    <Route path='/products'element={(<Product/>)}/>
    <Route path='/users'element={(<Viewuser/>)}/>
    <Route path='/deleteuser'element={(<DeleteUser/>)}/>
    <Route path='/orders'element={(<OrderDetails/>)}/>
    <Route path='/complaintadd'element={(<AddComplaint/>)}/>
    <Route path='/complaints'element={(<ViewComplaint/>)}/>
    <Route path='/video'element={(<Vedeo/>)}/>
    <Route path='/own/:id'element={(<UserDetails/>)}/>
    <Route path='/uorder'element={(<UserOrders/>)}/>
    <Route path='/soldproducts/:userId'element={(<SoldProducts/>)}/>
    <Route path='/rcor'element={(<ReceivedOrders/>)}/>
    <Route path='/upld'element={(<File/>)}/>
    <Route path='/file'element={(<FileList/>)}/>
    <Route path='/frmr'element={(<Fconfirmation/>)}/>
    <Route path='/cfr'element={(<ConfirmFarmer/>)}/>
    
    
   



    </Routes>
    </BrowserRouter>
  );
}

export default App;
