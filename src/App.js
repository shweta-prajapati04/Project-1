import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Allroute } from './Pages/Allroute';
import { Footer } from './component/Footer';
import { Header } from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='container-fluid col-md-12' >
        <Allroute />
        </div>

        
      
      <Footer />
    </div>
  );
}

export default App;
