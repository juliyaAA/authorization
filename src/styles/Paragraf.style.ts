import styled from 'styled-components';

interface TextProps {
    primary: boolean
}

const Paragraf = styled.p<TextProps>`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-top: 8px;
    color: ${({ primary }) => primary ? '#E26F6F' : '#000'};
`;
export default Paragraf;