import './Header.css';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>{user?.username}</span>
            <Button onClick={onClose}>Закрити</Button>
        </div>
    );
};

export default Header;
