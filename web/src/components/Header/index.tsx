import './styles.css'
import helpIcon from '../../assets/help-icon.svg'
import notificationIcon from '../../assets/notification-icon.svg'
import profileAvatar from '../../assets/profile-avatar.jpg'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate();

    function returnToHome(){
        navigate('/');
    }
    
    return (
        <header className='header__container'>
            <div className='header__content content-flex align-center'>
                <div className='header__companyName--container content-flex align-center gap-1'  onClick={returnToHome}>
                    <div className='header__companyImage--container'></div>
                    <h3 className='header__companyName--text'> Trainee Store</h3>
                </div>
                <div className='header__menuContainer content-flex justify-between align-center gap-1_625' >
                    <button className='header__menuHelp'>
                        <img 
                            className='header__menuHelpIcon'
                            src={helpIcon}
                            alt='icone de ajuda do menu'
                        />
                    </button>
                    <button className='header__menuNotifications'>
                        <img 
                            className='header__menuNotifications--icon'
                            src={notificationIcon}
                            alt='icone de notificações do menu'
                        />
                    </button>
                    <div className='header__menuUser content-flex align-center gap-1'>
                        <img 
                            className='header__menuUser--img'
                            src={profileAvatar}
                            alt='foto do usuário'
                        />
                        <h3 className='header__menuUser--name'>Gustavo Silva</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}