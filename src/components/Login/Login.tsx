import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../styles/Button.style';
import ErrorValidation from '../../components/ErrorValidation/ErrorValidation';
import Input from '../../styles/Input.style';
import Label from '../../styles/Label.style';
import Paragraf from '../../styles/Paragraf.style';
import InputCheckbox from '../InputCheckbox/InputCheckbox';

type Inputs = {
    email: string
    password: string
};


const LoginForm = () => {
    const [Btn, setBtn] = useState(false);
    const [ErrorServer, setErrorServer] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        mode: 'onBlur'
    });

    type Timer = ReturnType<typeof setTimeout>;
    const onSubmit: SubmitHandler<Inputs> = data => {
        setBtn(true);
        if (data.email === 'steve.jobs@example.com' && data.password === 'password') {
            const timer: Timer = setTimeout(() => {
                setBtn(false)
                navigate('/profile');
            }, 1000);

        } else {
            setErrorServer(true);
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            {!!ErrorServer ? <ErrorValidation /> : null}
            <div>
                <Label htmlFor='login'>Логин</Label>
                <Input {...register("email",
                    { required: 'Обязательное поле' })}
                    placeholder="email"
                    id='login'
                />
                {errors?.email && <Paragraf primary>{errors.email.message}</Paragraf>}
            </div>
            <div className='mt-20'>
                <Label htmlFor='password'>Пароль</Label>
                <Input {...register("password", { required: 'Обязательное поле' })}
                    type="password"
                    placeholder="пароль"
                    id='password'
                />
                {errors?.password && <Paragraf primary>{errors.password.message}</Paragraf>}
            </div>
            <InputCheckbox />
            <Button type='submit' value='Войти' disabled={Btn} />
        </form>
    );
}
export default LoginForm;