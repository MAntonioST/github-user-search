import React from 'react';
import ButtonIcon from '../../../core/components/ButtonIcon';
import { User } from '../../../core/types/User';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import './styles.scss';

type Props = {
    user?: User;
}
dayjs.locale('pt-br');



const SearchUser = ({ user }: Props) => {
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
                    <div className="data-info">
                        <div className="data-user">
                            Empresa:  {user?.company}
                        </div>
                    </div>
                </div>
                <div className="input-form-in-1">
                <div className="data-info">
                        <div className="data-user">
                        Website/Blog:  {user?.blog}
                        </div>
                    </div>
                </div>
                <div className="input-form-in-2">
                <div className="data-info">
                        <div className="data-user">
                        Localidade: {user?.location}
                        </div>
                    </div>
                </div>
                <div className="input-form-in-3">
                <div className="data-info">
                        <div className="data-user">
                        Membro desde: {dayjs(user?.created_at).format('DD/MM/YYYY')} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchUser;