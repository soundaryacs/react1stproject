import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import ListDemo1 from './components/list/ListDemo1';
import ForceUpdateDemo1 from './components/forceUpdate/ForceUpdateDemo1';
import ForceUpdateDemo2 from './components/forceUpdate/ForceUpdateDemo2';
import UsersList from './components/list/UserList';
import Categories from './components/categories/Categories';
import StateDemo1 from './components/state/StateDemo1';
import ShowHide from './components/state/ShowHide';
import ShowHide01 from './components/state/ShowHide01';
import HidePassword from './components/state/HidePassword';
import ReamingChar from './components/state/ReamingChar';
import SweetAlertDemo01 from './components/sweetalert/SweetAlertDemo01';
import BootstrapModeldemo01 from './components/bootstarpmodel/BootstrapModeldemo01';
import TableData from './components/employeeDatalist/TableData';
import AddDeleteTableRows from './components/EmpDataList02/AddDeleteTableRows';
import EmployeeList from './components/state/EmployeeList';
import EmployeeSearchlist from './components/state/EmployeeSearchlist';
import EmployeeCURD from './components/employeeCURD/EmployeeCURD';
import Refs01 from './components/refs/Refs01';
import RefsDemo02 from './components/refs/RefsDemo02';
import RegisterForm from './components/form/RegisterForm';
import FormDemo01 from './components/form/FormDemo01';
import FormDemo02 from './components/form/FormDemo02';
import FormDemo03 from './components/form/FormDemo03';
import FormDemo04 from './components/form/FormDemo04';
import FormDemo05 from './components/form/FormDemo05';
import FormDemo06 from './components/form/FormDem06';
import FormDemo7 from './components/form/FormDemo07';
import FormDemo8 from './components/form/FormDemo8';
import FormDemo08 from './components/form/FormDemo08';
import ValidationForm from './components/form/ValidationForm';
import ValidateEmail from './components/form/ValidateEmail';
import DynamicForm from './components/form/DynamicForm';
import DynamicForm01 from './components/form/DynamicForm01';
import DynamicForm02 from './components/form/DynamicForm02';
import HttpDemo1 from './components/HTTP/HttpDemo1';
import HttpDemo2 from './components/HTTP/HttpDemo2';
import HttpDemo3 from './components/HTTP/HttpDemo3';
import HttpDemo4 from './components/HTTP/HttpDemo4';
import HttpDemo5 from './components/HTTP/HttpDemo5';
import HttpDemo6 from './components/HTTP/HttpDemo6';
import HttpDemo7 from './components/HTTP/HttpDemo07';
import HttpDemo8 from './components/HTTP/HttpDemo08';
import { MyInterceptor1 } from './interceptors/MyInterceptor1';
import { MyInterceptor2 } from './interceptors/MyInterceptor2';
import { MyInterceptor3 } from './interceptors/MyInterceptor3';
import { MyInterceptor4 } from './interceptors/MyInterceptor4';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Careers from './components/careers/Careers';
import NotFound from './components/notFound/NotFound';
import ProductDetails from './components/products/ProductDetails';
import ProductDetail from './components/products/ProductDetail';
import ConatctTable from './components/editdeletecontactdata/ConatctTable';
import Footer from './components/footer/Footer';
import DashBoard from './components/dashboard/DashBoard';
import Login from './components/admindashboard/Login';
import DashboardIndex from './components/dashboard/pages/DashboardIndex';
import FulltimeJobs from './components/careers/FulltimeJobs';
import ParttimeJobs from './components/careers/ParttimeJobs';
import React from "react";
import { Suspense } from "react";
const ProductList = React.lazy(() => import("./components/products/ProductList"));
// import ProductList from './components/products/ProductList';


function App() {
 /*  MyInterceptor1();
  MyInterceptor2();
  MyInterceptor3();
  MyInterceptor4(); */
  return (
   
    <div className="">
      {/* <Header/> */}
      {/* <ProductList/> */}
      {/* <ForceUpdateDemo1/> */}
      {/* <ForceUpdateDemo2 /> */}
      {/* <Categories /> */}
      {/* <UsersList /> */}
      {/* <StateDemo1/> */}
      {/* <ShowHide /> */}
      {/* <ShowHide01 /> */}
      {/* <HidePassword /> */}
      {/* <ReamingChar /> */}
      {/* <SweetAlertDemo01 /> */}
      {/* <BootstrapModeldemo01 /> */}
      {/* <TableData/> */}
      {/* <AddDeleteTableRows/> */}
      {/* <EmployeeList /> */}
      {/* <EmployeeCURD /> */}
      {/* <EmployeeSearchlist /> */}
      {/* <Refs01 /> */}
      {/* <RefsDemo02 /> */}
      {/* <FormDemo01 /> */}
      {/* <FormDemo02 /> */}
    {/* <FormDemo03 /> */}
    {/* <FormDemo04 /> */}
    {/* <FormDemo05 /> */}
      {/* <RegisterForm /> */}
      {/* <FormDemo06 /> */}
      {/* <FormDemo7 /> */}
      {/* <FormDemo8 /> */}
      {/* <FormDemo08 /> */}
   {/* <ValidationForm /> */}
   {/* <ValidateEmail /> */}
    {/* <DynamicForm /> */}
    {/* <DynamicForm01 /> */}
    {/* <HttpDemo1 /> */}
    {/* <HttpDemo2 /> */}
    {/* <HttpDemo3 /> */}
    {/* <HttpDemo4 /> */}
    {/* <HttpDemo5 /> */}
    {/* <HttpDemo6 /> */}
    {/* <HttpDemo7 /> */}
    {/* <HttpDemo8 /> */}
   
    <Suspense  fallback={<div><h1>Loading...</h1></div>}>

   
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/careers" element={<Careers />} >
        <Route index element={<FulltimeJobs />} />
          <Route exact path="fulltime" element={<FulltimeJobs />} />
          <Route exact path="partTime" element={<ParttimeJobs />} />
        </Route>
        <Route exact path='/productlist' element={<ProductList />} />
        <Route exact path='/productdetails/:id' element={<ProductDetails />} />
        <Route exact path='/productdetail' element={<ProductDetail />} />
        <Route exact path='/editdeletecontactdata' element={<ConatctTable />} />
        <Route exact path='/dashboard' element = {<DashBoard />} />
        <Route exact path='/dashboardindex' element = {<DashboardIndex />} />
        <Route exact path='/adminlogin' element = {<Login />} />
        <Route path="*" element={<NotFound />} /> (No Match Route)
    </Routes>
    </Suspense>

    {/* <Footer /> */}
    </div>
  );
}

export default App;
