import React from 'react';

import { Container, Header, HeaderContent, Profile, Content, Schedule, NextAppointment, Calendar } from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();

    return (
        <Container>
        <Header>
            <HeaderContent>
                <img src={logoImg} alt="GoBarber" />

                <Profile>
                    <img src= {user.avatar_url} alt={user.name} />

                    <div>
                        <span>Bem vindo,</span>
                        <strong>{user.name}</strong>
                    </div>
                </Profile>

                <button type="button" onClick={signOut}>
                    <FiPower />
                </button>
            </HeaderContent>
        </Header>

        <Content>
            <Schedule>
                <h1>Horários agendados</h1>
                <p>
                    <span>Hoje</span>
                    <span>Dia 06</span>
                    <span>Segunda-feira</span>
                </p>

                <NextAppointment>
                    <strong>Atendimento a seguir</strong>
                    <div>
                        <img src="dd" alt="Daniel Souza" />

                        <strong>Daniel Souza</strong>
                        <span>
                            <FiClock />
                            00:00
                        </span>
                    </div>
                </NextAppointment>
            </Schedule>
            <Calendar />
        </Content>
    </Container>
    )
};

export default Dashboard;