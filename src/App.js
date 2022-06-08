import { Fragment } from 'react';
import './App.css';
import ContactUs from './component/contactus';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Aboutus from './component/about';
import Blog from './component/blog';
import Comingsoon from './component/comingsoon';

function App() {
  return (
    <div className="App">
          <Route path="/" exact component={withRouter(Comingsoon)}/>
          <Route path="/contact" component={withRouter(ContactUs)}/>
          <Route path="/about" component={withRouter(Aboutus)}/>
          <Route path="/blog" component={withRouter(Blog)}/>
    </div>
  );
}

export default App;
