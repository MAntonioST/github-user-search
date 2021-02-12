import React from 'react';
import ButtonIcon from '../../../core/components/ButtonIcon';
import SearchForm from '../../../core/components/SearchForm';
import { User } from '../../../core/types/User';
import './styles.scss';

type Props = {
    user?:User;
}

const SearchUser = ( { user }: Props) => {
    console.log(user);
    return (
        <div className="users-container-main">
            <div className="img-left">
             <img src={user?.avatar_url} alt={user?.name} />
            </div>
            <div className="btn-icon-foto">
                <ButtonIcon text="Ver perfil" />
            </div>
            <div className="information-left">
                <div className="info-in-left">
                    Repositórios públicos: {user?.public_repos}
              </div>
            </div>
            <div className="information-center">
                <div className="info-in-center">
                    Seguidores: {user?.followers}
            </div>
            </div>
            <div className="information-right">
                <div className="info-in-right">
                    Seguindo: {user?.following}
            </div>
            </div>
            <div className="information-container">
                <div className="info-title">
                    Informações
            </div>
                <div className="input-form-in">
                    <SearchForm />
                </div>
                <div className="input-form-in-1">
                    <SearchForm />
                </div>
                <div className="input-form-in-2">
                     <SearchForm />
                </div>
                <div className="input-form-in-3">
                     <SearchForm />
                </div>
            </div>
        </div>
    );
}

export default SearchUser;