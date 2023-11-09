import { useEffect, useState, useCallback } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

function From(props) {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject,
        };
        tg.sendData(JSON.stringify(data));
    }, [country, city, subject]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Відправити дані',
        });
    }, []);

    useEffect(() => {
        if (!city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city]);

    const onChangeCountry = e => {
        setCountry(e.target.value);
    };

    const onChangeCity = e => {
        setCity(e.target.value);
    };

    const onChangeSubject = e => {
        setSubject(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введіть ваші дані</h3>
            <input className={'input'} type='text' placeholder={'Країна'} value={country} onChange={onChangeCountry} />
            <input className={'input'} type='text' placeholder={'Вулиця'} value={city} onChange={onChangeCity} />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Фіз. лице</option>
                <option value={'legal'}>Юр. лице</option>
            </select>
        </div>
    );
}

export default From;
