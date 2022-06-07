import styled from 'styled-components';

export const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Box = styled.div`
    width: 500px;
    height: 200px;
    margin-left: 32px;
    margin-top: 32px;
    background-color: #E0E2DB;
    border-radius: 16px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputMsg = styled.input`
    width: 208px;
    height: 32px;
    border-radius: 8px;
    border: 0;
    margin-top: 8px;

    font-size: 16px;
`;

export const CryptButton = styled.button`
    width: 112px;
    height: 40px;
    border-radius: 16px;

    color: #fff;
    font-weight: bold;
    font-size: 16px;

    background-color: #8D91C7;
    border: none;

    margin-top: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const CryptoText = styled.span`
    /* max-width: 400px; */
    margin-top: 16px;
    word-break: break-all;
`;

export const WrapperCryptoMsgs = styled.div`
    max-height: 600px;
    overflow-y: auto;
    margin-top: 16px;
`;

export const BoxCryptoMsg = styled.div`
    background-color: #B9DA95;
    margin-top: 8px;
    margin-left: 32px;

    display: flex;
    flex-direction: column;
    max-width: 500px;
    height: 96px;

    border-radius: 16px;
    padding: 8px;
`;



export const CryptoSavedMsg = styled.span`
    /* max-width: 400px; */
    margin-top: 4px;
    word-break: break-all;

    strong {
        margin-right: 6px;
        color: #F5F5F5;
    }
`;