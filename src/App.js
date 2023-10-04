import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Allroute } from './Pages/Allroute';
import { Footer } from './component/Footer';
import { Header } from './component/Header';

function App() {
  return (
    <div className="flex-container" >
      <Header />
      <Allroute />
      <div className='col-md-10 mb-5' >



      </div>
      
      <Footer />
    </div>
  );
}

export default App;