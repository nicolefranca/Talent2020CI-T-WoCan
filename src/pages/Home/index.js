import React from 'react';
import Button from '../../components/Button/Button.js';
import logo from '../../assets/image/logo.png';
import { useHistory } from 'react-router-dom';
import '../../assets/scss/Main.scss';

const Home = () => {
  const history = useHistory();

  return (
    <div className='container'>
      <div className='box'>
        <header className='header'>
          <figure className='logo'>
            <img className='header_logo' src={logo} alt='Imagem do logo' />
          </figure>
          <p className='information'>
            Uma iniciativa para informar e direcionar quem deseja entrar no ramo
            da Tecnologia, e não sabe por onde começar.
          </p>
        </header>
        <main className='button'>
          <Button
            name='Iniciar trajetória'
            onClick={() => history.push('/start')}
          />
          <Button
            name='Guia de profissões'
            onClick={() => history.push('/guide')}
          />
          <Button name='Mentoria' onClick={() => history.push('/monitoring')} />
          <Button
            name='Iniciativas'
            onClick={() => history.push('/initiatives')}
          />
        </main>
      </div>
      <div className='box2'>
        <section className='about'>
          <p className='aboutName'>Sobre</p>
          <p className='aboutText'>
            <br />
            Quer estudar né meu bem, mas não sabe por onde começar? Então se
            joga na nossa aplicação! Em “Iniciar trajetória” voce pode escolher
            por qual roteiro de estudo quer começar! Está confuso ainda em qual
            área você se encaixa, da uma olhada nesse “Guia de Profissoes” que a
            iniciativa Ada.vc preparou! Em “Mentoria” temos um fórum de dúvidas
            com pessoas ja inseridas no mercado pra ajudar vocês a prosseguir
            com os estudos. Por fim, temos as “Iniciativas” com informações
            sobre diversos programas e o que está rolando de eventos. Agora só
            pegar o café e bons estudos!
          </p>
        </section>
        <footer className='footer'>
          <p>
            Feito com{' '}
            <span role='img' aria-label='heart'>
              🖤
            </span>{' '}
            e{' '}
            <span role='img' aria-label='strong'>
              💪
            </span>{' '}
            por Amanda, Camila, Carol e Nick!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
