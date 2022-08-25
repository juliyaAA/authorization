import styled from 'styled-components';
import Label from '../../styles/Label.style';

const InputCheckbox = () => {
    return (
        <Block>
            <Checked type="checkbox" id="checkbox"/>
            <Label htmlFor="checkbox">Запомнить пароль</Label>
        </Block>
    )
}

const Block = styled.div`
   margin-top: 20px;
`;

const Checked = styled.input`
    position: absolute;
    display: inline-block;
    opacity: 0;
    z-index: -1;
    & + ${Label} {
        display: inline-flex;
        align-items: center;
        user-select: none;
        overflow: hidden;
    }
    & + ${Label}::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 14px;
        margin-left: 4px;
        flex-shrink: 0;
        flex-grow: 0;
        border-radius: 2px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    &:checked+${Label}::before {
        background-color: #0b76ef;
        z-index: 10;
    }
    & + ${Label} {
        position: relative;   
        min-height: 24px;    
        &::after {
            content: '';
            display: inline-block;
            background-color: #fff;
            border: 1px solid #000000;
            width: 20px;
            height: 20px;
            left: 0;
            position: absolute;
            border-radius: 4px;
            z-index: 5;
        }
    }
`;

export default InputCheckbox;
