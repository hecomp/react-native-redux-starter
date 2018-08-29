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
import { createIdea, ideaInputChange } from '../../actions'
import { connect } from 'react-redux'
import IdeaPadForm from '../IdeaPadForm';

const mapStateToProps = state => {
    return {
        title: state.ideaPad.title,
        idea: state.ideaPad.idea,
        loading: state.ideaPad.loading,
        error: state.ideaPad.error,
    }
}

const mapDispatchToProps = dispatch => (
    {
        onCreateIdea: (idea) => {
            dispatch(createIdea(idea))
        },
        onResetField: (idea) => {
            dispatch(ideaInputChange(idea))
        }
    }
)

class AddIdea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.create = this.create.bind(this)
    };

    create = ()=>{
        if ( !this.props.title ){
            Alert.alert('Please enter a title')
        } else if ( !this.props.idea ){
            Alert.alert('Please enter an Idea')
        } else {
            this.props.onCreateIdea(this.props)  
            this.props.onResetField({'field': 'title', 'value': ''})
            this.props.onResetField({'field': 'idea', 'value': ''})    
        }
    }

    render() {
        const { loading, error } = this.props 
        return (
            <View>
                <IdeaPadForm navigation={this.props.navigation} />
                { loading ? (
                   <View>
                       <ActivityIndicator size='small' />
                   </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight onPress={this.create} underlayColor='#31e981' style={styles.button}>
                            <Text style = {styles.buttons}>
                                Submit
                            </Text>
                        </TouchableHighlight>
                    </View>
                )}
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIdea)
