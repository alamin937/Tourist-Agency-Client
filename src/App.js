import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import ManageEvents from './components/ManageEvents/ManageEvents';
import MyEvents from './components/MyEvents/MyEvents';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AddEvents from './components/AddEvents/AddEvents';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/myevents'>
          <MyEvents></MyEvents>
        </Route>
        <Route path='/manageevents'>
          <ManageEvents></ManageEvents>
        </Route>
        <PrivateRoute path='/placeorder'>
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/addevents'>
          <AddEvents></AddEvents>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
