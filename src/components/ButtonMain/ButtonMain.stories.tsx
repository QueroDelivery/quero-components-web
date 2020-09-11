import React from 'react';
import ButtonMain from './ButtonMain';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { colors } from '../../styles/colors';

export default {
    title: 'ButtonMain',
    component: ButtonMain,
};

export const Default = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain textFirst="Testeee" strong />
        </div>
    );
};

export const Secundary = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                firstStrong
                icon={faBell}
                secundary
            />
        </div>
    );
};

export const Tertiary = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                tertiary
            />
        </div>
    );
};

export const sizes = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='mini'
            />
            <br />
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='tiny'
            />
            <br />
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='small'
            />
            <br />
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='medium'
            />
            <br/>
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='large'
            />
            <br/>
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='big'
            />
            <br/>
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='huge'
            />
            <br/>
            <ButtonMain
                textFirst="Testeee"
                tertiary
                size='massive'
            />
        </div>
    );
};

export const BackPurple = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                textEnd="Teste2"
                notStrong
                backPurple
            />
        </div>
    );
};

export const Notification = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                textEnd="Teste2"
                notification
                amount="2"
            />
        </div>
    );
};

export const noBorder = () => {
    return (
        <div style={{ margin: 50 }}>
            <ButtonMain
                textFirst="Testeee"
                noBorder
                colorText={colors.brand20}
            />
        </div>
    );
};
