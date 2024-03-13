import React from 'react';
import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({}) => {
    return (
        <MainLayout>
            <Text>Cuiyi's To Do List App</Text>
            <Text>Written by: Cuiyi Ye</Text>
            <Text>Date: March 25,2024</Text>
        </MainLayout>
    );
}

export default AboutScreen;