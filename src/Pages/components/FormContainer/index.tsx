
import { useState } from 'react';
import { makeRequest } from '../../../core/utilis/request';
import './styles.scss';
import SearchUser from '../SearchUser';
import { User } from '../../../core/types/User';



type UserState = {
    login:'';
    
  }

 type FormEvent = React.ChangeEvent<HTMLInputElement >;

 const FormContainer = () => {
   
    const [formData, setFormData] = useState<UserState>({
        login:'',
      });

    const [ user, setUser] = useState<User>();
     
      const handleOnChange = (event: FormEvent) => {
        const login = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [login]: value }));
      }
   
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const payload = {
     login:formData.login
    }
   
    makeRequest({ url: `/users/${payload.login}`})
       .then(response => setUser(response.data));
      
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
                       value={formData.login}
                       name="login"
                        type="text"
                        onChange={handleOnChange}
                        className="form-control form-inputs-text"
                        placeholder="Usuário Github"
                    />
                </div>
                    <button className="btn-icon-form">
                       Encontrar
                    </button>
              
            </div>
            </form>
            
            <div className="form-container-users">
                <SearchUser  user={user} />
            </div>
        </>

    );
};

export default FormContainer;