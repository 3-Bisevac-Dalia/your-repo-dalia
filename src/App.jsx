import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';

function App(){

  return(
    <>
    <Header/>
    <Stuff name="Bob Smith" title="CEO"/>
    <Stuff name="Sue Jones" title="CFO"/>
    <Stuff/>
    <Footer/>
    </>
  );
}
export default App