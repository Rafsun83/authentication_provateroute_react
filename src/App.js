import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import AuthProvider from './Context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/Privateroute/PrivateRoute';
import Placeorder from './components/Placeorder/Placeorder';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <Placeorder></Placeorder>

            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
