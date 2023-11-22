import React, { useRef, useState } from 'react';

import * as S from './styles';

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean>(false);
  const [isRightAnswer, setIRightAnswer] = useState<boolean>(false);

  const handleAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const answer = inputRef.current?.value.replace(/\s/g, '').toLowerCase();

    const isRight = ['touro', 'otouro'].includes(answer ?? '');
    if (isRight) {
      setIRightAnswer(true);
    } else {
      setIsWrongAnswer(true);
      setTimeout(() => {
        inputRef.current?.focus();
        setIsWrongAnswer(false);
      }, 600);
    }
  };

  return (
    <S.Container>
      <S.ReactPlayerWrapper>
        <S.ReactPlayer url='https://www.youtube.com/embed/eTD0WWFIDAg?si=BkLWSoeob4XrFsyL' />
      </S.ReactPlayerWrapper>
      <S.Content className={isRightAnswer ? 'right' : ''}>
        <S.Title className={isWrongAnswer ? 'wrong' : ''}>
          O vermelho sangue nunca o incomodou.
          <br />
          Grande e indomavel.
          <br />
          Os astros revelam a verdade.
        </S.Title>
        <S.Form
          onSubmit={handleAnswer}
          className={isWrongAnswer ? 'shaking' : ''}
        >
          <S.Input
            ref={inputRef}
            placeholder='Resposta...'
            className={isWrongAnswer ? 'wrong' : ''}
          />
          <S.Button className={isWrongAnswer ? 'wrong' : ''}>enviar</S.Button>
        </S.Form>
      </S.Content>
      <S.QRCode className={isRightAnswer ? 'right' : ''} />
    </S.Container>
  );
}

export default App;
