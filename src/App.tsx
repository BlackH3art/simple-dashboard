import { useContext } from 'react';
import { AddCart } from './components/AddCart/AddCart';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Navigation } from "./components/Navigation/Navigation";
import { AppContext } from './context/AppContext';

function App() {

  const { addCartModal } = useContext(AppContext);

  return (
    <div className="w-full">

      <Navigation />

      <Dashboard />
      {addCartModal ? <AddCart /> : null}
      
    </div>
  )
}

export default App;
