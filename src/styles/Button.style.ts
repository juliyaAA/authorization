import styled from 'styled-components';

const Button = styled.input`
    width: 100%;
    height: 60px;
    background-color: #4A67FF;
    border-radius: 8px;
    margin-top: 40px;
    padding: 19px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    border: none;
    text-align: center;
    cursor: pointer;
    &:disabled {
        background-color: #99A9FF;
        cursor: default;
        &:hover {
            opacity: 1;
        }
    }
    &:hover {
        opacity: .6;
    }
`;

export default Button;