import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import PageNotFound from './Components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>


        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/events">
            <Events></Events>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
