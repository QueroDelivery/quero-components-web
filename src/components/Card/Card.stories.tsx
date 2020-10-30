import React, { useState } from 'react';
import Card from './Card';
import { faBell } from '@fortawesome/pro-solid-svg-icons';

export default {
    title: 'Card',
    component: Card,
};

export const Shadow = () => {
    return (
        <div style={{ width: `80%`, padding: 20 }}>
            <Card type="shadow" width="80">
                <div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>
                    <div>ASDsdasdaAS</div>

                </div>
            </Card>
        </div>
    );
};

export const Button = () => {
    return (
        <div style={{ width: `80%`, padding: 20 }}>
            <Card type="button" icon={faBell} text="Testeeee" width="80" />
        </div>
    );
};
