import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom';

import './styles.css'



export const Home = () => {
  const navigate = useNavigate();

  function goToCheckout(){
      navigate('/checkout');
  }
  return (
    <div className='container'>
      <Header/>
      <div className='topbar__container'>
        <div className='topbar__content content-flex align-center justify-center'>
          <button className='topbar__button' onClick={goToCheckout}>Ir para Checkout</button>
        </div>
      </div>
    </div>
  )
}


