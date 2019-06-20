import styled from 'styled-components';
export const ArticleSw = styled.article`
    background: -webkit-linear-gradient(left, #02d9ff 0%, #007fd9 100%);
    width: 28%;
    display: inline-block;
    margin: 10px 2.5%;
    padding: 20px 0;
    border-radius: 10px;
    @media only screen and (max-width: 768px) {
        width: 90%;
        margin-left: 5%;
      }
`;
