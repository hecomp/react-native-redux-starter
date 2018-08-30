import React from 'react'
import { View } from 'react-native'
import LoginForm from '../components/LoginForm'
import IdeaList from '../components/IdeaList'
import AddIdea from '../components/AddIdea'
import EditIdea from '../components/EditIdea'
import HeaderIcon from '../components/HeaderIcon'
import Register from '../screens/Register'

export const authRoute = {
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: 'Register'
        },
    },
}

export const appRoute = {
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({navigation}) => ({
            title: 'Your Ideas',
            headerRight: (
                <HeaderIcon 
                    styles={{paddingRight: 5}}
                    name='plus-circle' 
                    color='gray'
                    size={30}
                    onPress={() => navigation.navigate('AddIdeas', { routeName: 'AddIdeas'})}
                />
            )
        })
    },
    AddIdeas: {
        screen: AddIdea,
        navigationOptions: {
            headerTitle: 'Add your Ideas'
        }
    },
    EditIdea: {
        screen: EditIdea,
        navigationOptions: {
            headerTitle: 'Edit your Idea'
        }
    }
}