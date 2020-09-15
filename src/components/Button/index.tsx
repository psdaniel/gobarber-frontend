import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

import { Container } from './styles';


const Button: React.FC<ButtonProps> = ({children, ...rest }) => (
    <Container type="button" {...rest}>
        {children}
    </Container>
);

export default Button;