import React, { useState } from 'react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
};

export const Default = () => {
    return (
        <div style={{ width: `80%` }}>
            <Card type="shadow" width={50}>
                <div>ASDsdasdaAS</div>
            </Card>
        </div>
    );
};
