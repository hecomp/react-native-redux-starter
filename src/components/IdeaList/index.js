import React from 'react'
import {
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'
import ListItem from '../ListItem'
import Separator from '../Separator';
import { connect } from 'react-redux' 
import { getIdeas } from '../../actions'

const toArray = firebaseObj => {
    if(firebaseObj) {
        return Object.keys(firebaseObj).map(id => {
            return Object.assign(firebaseObj[id], {id})
        })
    }
    return []
}

const mapStateToProps = state => {
    const ideas = toArray(state.ideas.ideaList)
    return {
        ideas 
    }
}

const mapDispatchToProps = dispatch => ({
    onGetIdeas: () => {
        dispatch(getIdeas())
    }
})

class IdeaList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.props.onGetIdeas()
    }
    renderSeparator = () => {
        return (
            <Separator />
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.ideas}
                    renderItem={({ item, separators }) => <ListItem item={item} separators={separators} navigation={this.props.navigation} />}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList)