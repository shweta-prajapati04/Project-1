import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Allroute } from './Pages/Allroute';
import { Footer } from './component/Footer';
import { Header } from './component/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="col-md-10 mx-auto">
        <Allroute />
        

        
      </div>
      <Footer />
    </div>
  );
}

export default App;
