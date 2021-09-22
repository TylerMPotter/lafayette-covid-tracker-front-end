import React from 'react';
import MainLayout from './MainLayout';

export const withMainLayout = (childComponent) => {
    return <MainLayout child={childComponent} />;
};
