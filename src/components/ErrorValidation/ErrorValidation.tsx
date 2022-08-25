import CircleBlock from '../../styles/CircleBlock.style';
import ErrorBlock from '../../styles/ErrorBlock.style';
import Paragraf from '../../styles/Paragraf.style';
const Icons: string = require('../../assets/icons.svg').default;

const ErrorValidation  = () => {
    const login = JSON.parse(localStorage.getItem('email')||'');
    return (
        <ErrorBlock>
            <CircleBlock>
                <img className='center' src={Icons} alt="восклицательный знак" />
            </CircleBlock>
            <Paragraf primary>Пользователя {login}  не существует</Paragraf>
        </ErrorBlock>
    )
}

export default ErrorValidation;