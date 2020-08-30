import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashborad: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
            alt="Maicon Andrade"
          />
          <div>
            <strong>AndradeMaicon/timbretool</strong>
            <p>Um afinador para guitarra e violao</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
            alt="Maicon Andrade"
          />
          <div>
            <strong>AndradeMaicon/timbretool</strong>
            <p>Um afinador para guitarra e violao</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/19509115?s=460&u=f77d3a062299481625d7fd756b81d41aa447b3cb&v=4"
            alt="Maicon Andrade"
          />
          <div>
            <strong>AndradeMaicon/timbretool</strong>
            <p>Um afinador para guitarra e violao</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashborad;
