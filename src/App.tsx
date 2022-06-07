import React, { useState } from 'react';
import './App.styled.ts';
import { sha3_512 } from 'js-sha3';
import { AppWrapper, Box, BoxCryptoMsg, CryptButton, CryptoSavedMsg, CryptoText, InputMsg, WrapperCryptoMsgs } from './App.styled';

interface CtyptoMsgProps {
  value: string;
  hash: string;
}

function App() {
  const [msg, setMsg] = useState('')
  const [delayedMsg, setDelayedMsg] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [cryptoMsg, setCryptoMsg] = useState<CtyptoMsgProps[]>([])

  const handleClick = () => {
    setDelayedMsg(msg);
    setShowMsg(true);
    setCryptoMsg([{
      value: msg,
      hash: sha3_512(msg),
    }, ...cryptoMsg])
  }

  return (
    <AppWrapper>
      <Box>
        <label>Mensagem para ser Criptografada:</label>
        <InputMsg placeholder="Mensagem a ser criptografada com sha3-512" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <CryptButton onClick={handleClick}>Criptografar</CryptButton>
        {showMsg && <CryptoText>{sha3_512(delayedMsg)}</CryptoText>}
      </Box>

      <WrapperCryptoMsgs>
          {cryptoMsg.map(msg => (
            <BoxCryptoMsg>
              <CryptoSavedMsg><strong>Mensagem:</strong>{msg.value}</CryptoSavedMsg>
              <CryptoSavedMsg><strong>Crypto:</strong>{msg.hash}</CryptoSavedMsg>
            </BoxCryptoMsg>
          ))}
      </WrapperCryptoMsgs>
    </AppWrapper>
  );
}

export default App;
