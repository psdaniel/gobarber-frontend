import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background } from './styles';

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
        try {
            formRef.current?.setErrors({});

        const schema = Yup.object().shape({
            email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido.'),
        });

        await schema.validate(data, {
            abortEarly: false, 
        });

        // recuperação de senha

    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }

        addToast({
            type: 'error',
            title: 'Erro na recuperação de senha',
            description: 'Ocorreu um erro ao tentar realizar a recuperação de senha',
        });
    }
}, [addToast]);

    return (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Recuperar senha</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail"/>

                <Button type="submit">Recuperar</Button>
            </Form>

            <Link to="/signin">
                <FiLogIn />
                Voltar ao login
            </ Link>
        </Content>
        <Background />
    </Container>
    );
}

export default ForgotPassword;