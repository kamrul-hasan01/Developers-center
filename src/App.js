import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
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
