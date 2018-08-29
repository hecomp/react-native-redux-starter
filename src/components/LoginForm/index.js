import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Alert, 
    ActivityIndicator,
    // AsyncStorage 
} from 'react-native';
import { login } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => (
    {
        onLogin: (user) => {
            dispatch(login(user))
        }
    }
)

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            email: '',
            password: ''
        };

        this.loginUser = this.loginUser.bind(this)
    };

    componentWillReceiveProps(nextProps) {
        if(Object.keys(nextProps.user).length > 0) {
            this.props.navigation.navigate('App')
        }
    }

    loginUser = ()=>{
        if ( !this.state.email ){
            Alert.alert('Please enter a email')
        } else if ( !this.state.password ){
            Alert.alert('Please enter a password')
        } else {
            this.props.onLogin(this.state)
            // AsyncStorage.getItem('userLoggedIn', (err, result) => {
            //     if (result!=='none'){
            //         Alert.alert('Someone already logged on');
            //         this.props.navigation.navigate('HomeRT');
            //     } else{
                    
            //         AsyncStorage.getItem(this.state.email, (err, result) => {
            //             if (result!==null){
            //                 if(result!==this.state.password) {
            //                     Alert.alert('Password incorrect')
            //                 } else {
            //                     AsyncStorage.setItem('userLoggedIn',this.state.email, (err, result) => {
            //                         Alert.alert(`${this.state.email} Logged in`);
            //                         this.props.navigation.navigate('HomeRT');
            //                     });
            //                 }
            //             } else{
            //                 Alert.alert(`No account for ${this.state.email}`);
            //             }
            //         })
            //     }
            // })        
        }
    }

    render() {
        const { email, password } = this.state 
        const { loading, error } = this.props 
        return (
            <View style={styles.container}>
                {/* <Text style={styles.label}>Enter Email</Text> */}
                <TextInput 
                    style={styles.inputs} 
                    onChangeText={(text) => this.setState({email: text})}
                    value={email}
                    placeholder='Email'
                />
                
                {/* <Text style={styles.label}>Enter Password</Text> */}
                <TextInput 
                    style={styles.inputs} 
                    onChangeText={(text) => this.setState({password: text})}
                    value={password}
                    secureTextEntry={true}
                    placeholder='Password'
                />

                { loading ? (
                   <View>
                       <ActivityIndicator size='small' />
                   </View>
                ) : (
                    <React.Fragment>
                        { error !== "" && <View><Text style={styles.error}>{error}</Text></View>}
                        <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981' style={styles.buttonContainer}>
                            <Text style = {styles.buttons}>
                                Login
                            </Text>
                        </TouchableHighlight>
                    </React.Fragment>
                )}
                
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%',
        // backgroundColor: 'gray'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs:{
        height: 35,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    buttonContainer: {
        backgroundColor: '#7DDBE6',
        paddingVertical: 10,
        borderRadius: 5,
        width: '80%',
    },
    buttons:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    label:{
        color: 'gray'        
    },
    error: {
        color: 'red',
        paddingBottom: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
