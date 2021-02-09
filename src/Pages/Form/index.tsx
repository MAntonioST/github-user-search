import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import UsersGithub from '../components/UsersGithub';
import './styles.scss';

const Form = () => {
    return (
        <>
            <div className="form-container">
                <div className="form-contents-title">
                    Encontre um perfil Github
            </div>
                <div className="form-inputs">
                    <input
                        value=""
                        name=""
                        type="text"
                        className="form-control form-inputs-text"
                        placeholder="Usuario Github"
                    />
                </div>
                <Link to="/users">
                    <div className="btn-icon-form">
                        <ButtonIcon text="Encontrar" />
                    </div>
                </Link>
        
            </div>
            <div className="form-container-users">
                <UsersGithub />
            </div>
        </>

    );
}

export default Form;