import { useNavigate } from 'react-router-dom';
import './styles.css'

export const TopBar = () => {
    const navigate = useNavigate();

    function returnToHome(){
        navigate('/');
    }
    return (
        <div className='topbar__container'>
            <div className='topbar__content content-flex align-center justify-between'>
                <h1 className='topbar__title'>Resumo do pedido</h1>
                <button className='topbar__button' onClick={returnToHome}> Continuar comprando </button>
            </div>
        </div>
    )
}