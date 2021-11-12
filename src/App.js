import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Dashboard from './components/Dashboard/Dashboard';
import AddNewCar from './components/AddNewCar/AddNewCar';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import MakePayment from './components/MakePayment/MakePayment';
import ManageAllProducts from './components/ManageAllProducts/ManageAllProducts';
import AddNewReview from './components/AddNewReview/AddNewReview';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/addnewcar">
              <AddNewCar></AddNewCar>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageallproducts">
              <ManageAllProducts></ManageAllProducts>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addnewreview">
              <AddNewReview></AddNewReview>
            </PrivateRoute>
            <PrivateRoute exact path="/makepayment">
              <MakePayment></MakePayment>
            </PrivateRoute>
            <PrivateRoute exact path="/cars/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
