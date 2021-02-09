import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import "./styles.scss";



const Home = () => {

  return (
    <>
      <div className="text-title">
        Desafio do Capítulo 3, Bootcamp DevSuperior
      </div>

      <div className="text-subtitle">
        <p> Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
        <p> Favor observar as instruções passadas no capítulo sobre a elaboração  deste projeto.</p>
        <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com</p>
      </div>  
      <div className="btn-container">
        <Link to="/search">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
    </>
    

  );
}

export default Home;