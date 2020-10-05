import React, { useState } from 'react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
};

export const Default = () => {
    return (
        <div style={{ width: `80%`, padding: 20 }}>
            <Card type="shadow" width="80" isMobile>
                <div>ASDsdasdaAS</div>
            </Card>
        </div>
    );
};
