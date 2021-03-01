
import { useState } from 'react';
import { makeRequest } from '../../../core/utilis/request';
import './styles.scss';
import SearchUser from '../SearchUser';
import { User } from '../../../core/types/User';
import ButtonIcon from '../../../core/components/ButtonIcon';



type UserNameState = {
    login: string;

}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const FormContainer = () => {

    const [userName, setUserName] = useState<UserNameState>({
        login: '',
    });

    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: FormEvent) => {
        const login = event.target.name;
        const value = event.target.value;
        setUserName(data => ({ ...data, [login]: value }));

    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            login: userName.login
        }
        if (payload.login){
            setIsLoading(true);
        }
        makeRequest({ url: `/users/${payload.login}` })
            .then(response => setUser(response.data))
            .finally(() => setIsLoading(false));

        setUserName({ login: '' });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-contents-title">
                        Encontre um perfil Github
            </div>
                    <div className="form-inputs">
                        <input
                            value={userName.login}
                            name="login"
                            type="text"
                            onChange={handleOnChange}
                            className="form-control form-inputs-text"
                            placeholder="Usuário Github"
                        />
                    </div>
                    <div className="btn-icon-form">
                        <ButtonIcon text="Encontrar" />
                    </div>

                </div>
            </form>
                <div className="form-container-users">           
                {user? <SearchUser user={user} key={user?.id} isLoading={isLoading} /> : ""}
                </div>
        </>

    );
};

export default FormContainer;