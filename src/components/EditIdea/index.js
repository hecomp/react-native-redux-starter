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
import { editIdea, ideaInputChange, deleteIdea } from '../../actions'
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
        onIdeaPopulate: (idea) => {
            dispatch(ideaInputChange(idea))
        },
        onEditIdea: (idea) => {
            dispatch(editIdea(idea))
        },
        onDeleteIdea: (idea) => {
            dispatch(deleteIdea(idea))
        }
    }
)

class EditIdea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
    };

    componentDidMount() {
        const { idea } = this.props.navigation.state.params
        Object.entries(idea).forEach(([field, value]) => {
            field !== 'id' && this.props.onIdeaPopulate({ field, value })
        })
    }

    edit = () => {
        const { id } = this.props.navigation.state.params.idea
        const { title, idea } = this.props
        this.props.onEditIdea({title, idea, id})
        this.props.navigation.navigate('Ideas')
    }   

    delete = () => {
        const { id } = this.props.navigation.state.params.idea
        this.props.onDeleteIdea({id})
        this.props.navigation.navigate('Ideas')
    }

    render() {
        const { loading, error } = this.props 
        return (
            <View style={styles.container}>
                <IdeaPadForm {...this.props} navigation={this.props.navigation} />
                { loading ? (
                   <View>
                       <ActivityIndicator size='small' />
                   </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight onPress={this.edit} underlayColor='#31e981' style={styles.saveButton}>
                            <Text style = {styles.buttons}>
                                Save
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.delete} underlayColor='#31e981' style={styles.deleteButton}>
                            <Text style = {styles.buttons}>
                                Delete
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
    saveButton: {
        backgroundColor: '#7DDBE6',
        paddingVertical: 10,
        borderRadius: 5,
        width: '80%',
        marginTop: 10
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 5,
        width: '80%',
        marginTop: 10
    },
    buttons:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white' 
        
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIdea)
