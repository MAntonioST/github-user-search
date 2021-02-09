import React from 'react';
import ButtonIcon from '../../../core/components/ButtonIcon';
import InputForm from '../../../core/components/InputForm';
import './styles.scss';

const UsersGithub = () => {
    return (
        <div className="users-container-main">
            <div className="img-left">
            
            </div>
            <div className="btn-icon-foto">
                <ButtonIcon text="Ver perfil" />
            </div>
            <div className="information-left">
                <div className="info-in-left">
                    Repositórios públicos:
              </div>
            </div>
            <div className="information-center">
                <div className="info-in-center">
                    Seguidores:
            </div>
            </div>
            <div className="information-right">
                <div className="info-in-right">
                    Seguindo:
            </div>
            </div>
            <div className="information-container">
                <div className="info-title">
                    Informações
            </div>
                <div className="input-form-in">
                    <InputForm />
                </div>
                <div className="input-form-in-1">
                    <InputForm />
                </div>
                <div className="input-form-in-2">
                    <InputForm />
                </div>
                <div className="input-form-in-3">
                    <InputForm />
                </div>
            </div>
        </div>
    );
}

export default UsersGithub;