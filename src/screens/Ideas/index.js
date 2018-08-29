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
import { createIdea } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        loading: state.ideaPad.loading,
        error: state.ideaPad.error,
    }
}

const mapDispatchToProps = dispatch => (
    {
        onCreateIdea: (idea) => {
            dispatch(createIdea(idea))
        }
    }
)

class Ideas extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            title: '',
            idea: ''
        };

        this.create = this.create.bind(this)
    };

    // cancelLogin = ()=>{
    //     Alert.alert('Login cancelled');
    //     this.props.navigation.navigate('HomeRT');
    // };

    create = ()=>{
        if ( !this.state.title ){
            Alert.alert('Please enter a title')
        } else if ( !this.state.idea ){
            Alert.alert('Please enter an Idea')
        } else {
            this.props.onCreateIdea(this.state)
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
        const { title, idea } = this.state 
        const { loading, error } = this.props 
        return (
            <View style={styles.container}>
                {/* <Text style={styles.heading}>Login</Text> */}
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.inputs} 
                    onChangeText={(text) => this.setState({title: text})}
                    value={title}
                    placeholder='Title'
                />
                
                <Text style={styles.label}>Idea</Text>
                <TextInput 
                    style={styles.inputsIdea} 
                    onChangeText={(text) => this.setState({idea: text})}
                    value={idea}
                    secureTextEntry={true}
                    multiline = {true}
                    numberOfLines={10}
                    editable={true}
                    placeholder='Jot down your ideas here ...'
                />

                { loading ? (
                   <View>
                       <ActivityIndicator size='small' />
                   </View>
                ) : (
                    <React.Fragment>
                        {/* { error !== "" && <View><Text style={styles.error}>{error}</Text></View>} */}
                        <TouchableHighlight onPress={this.create} underlayColor='#31e981' style={styles.buttonContainer}>
                            <Text style = {styles.buttons}>
                                Submit
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
        backgroundColor: 'gray'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputsIdea:{
        height: 100,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    inputs:{
        height: 35,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    buttonContainer: {
        backgroundColor: '#7DDBE6',
        paddingVertical: 10,
        borderRadius: 5,
        width: '80%'
    },
    buttons:{
        fontSize: 16,
        textAlign: 'center',
        
    },
    label:{
        color: 'white'        
    },
    error: {
        color: 'red',
        paddingBottom: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ideas)
