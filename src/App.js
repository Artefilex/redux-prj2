
import './App.css';
import Navbar from './components/navbar/Navbar';
import CartContainer from './components/cartContainer/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from './reducers/cartSlice';
function App() {
const {cartItems} = useSelector(state => state.cart)
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(calculateTotals())
 }, [cartItems] )
  return (
    <div className="App">
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
