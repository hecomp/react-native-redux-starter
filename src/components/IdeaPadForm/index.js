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
import { ideaInputChange } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        title: state.ideaPad.title,
        idea: state.ideaPad.idea,
    }
}

const mapDispatchToProps = dispatch => (
    {
        onIdeaChange: (idea) => {
            dispatch(ideaInputChange(idea))
        }
    }
)

class IdeaPadForm extends React.Component {
    componentWillMount() {
        if(this.props.navigation.state.routeName === 'AddIdeas') {
            this.props.onIdeaChange({'field': 'title', 'value': ''})
            this.props.onIdeaChange({'field': 'idea', 'value': ''})
        } 
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputs} 
                    onChangeText={(text) => this.props.onIdeaChange({'field': 'title', 'value': text})}
                    value={this.props.title}
                    placeholder='Title'
                />
                <TextInput 
                    style={styles.inputsIdea} 
                    onChangeText={(text) => this.props.onIdeaChange({'field': 'idea', 'value': text})}
                    value={this.props.idea}
                    secureTextEntry={true}
                    multiline = {true}
                    numberOfLines={10}
                    editable={true}
                    placeholder='Jot down your ideas here ...'
                />
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
    },
    inputsIdea:{
        height: 100,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    inputs:{
        height: 35,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaPadForm)
