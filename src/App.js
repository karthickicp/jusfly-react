import Topbar from './Home';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Benefit from './Benifit';
function App(){
    return (
    <div>
        <Header></Header>
   <Topbar></Topbar>
   <Benefit></Benefit>
   <Footer></Footer>
    </div>
    );
}
export default App;
