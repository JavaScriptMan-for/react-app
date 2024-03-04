
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Nav from "./Nav.jsx";
import Main from './Main.jsx';
import Interective from './Interective.jsx';
import Footer from './Footer.jsx';
import Date from './Date.jsx';
import reportWebVitals from './reportWebVitals';



const header = ReactDOM.createRoot(document.querySelector('#root'));
header.render(
  <>
  <Header />
  <Nav/>
  <Main />
  <Interective />
  <Footer />
  </>
)

export default header;


reportWebVitals()
