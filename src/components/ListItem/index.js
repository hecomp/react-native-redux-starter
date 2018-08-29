import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class ListItem extends React.PureComponent {
    render() {
        const { item, separators, navigation } = this.props
        const { title, idea, } = item
        return (
            <TouchableHighlight
                onPress={() => navigation.navigate('EditIdea', {idea: item})}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
            >   
                <View style={styles.container}>
                    <View style={styles.lightBulb}>
                        <Icon name='lightbulb' color='gray' size={20} />
                    </View>
                    <View style={styles.content}>
                        <Text>{title}</Text>
                        <Text>{idea}</Text>
                    </View>
                    <View style={styles.chevronRight}>
                        <Icon name='chevron-right' color='gray' size={20} />
                    </View>
                </View>
                
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 8
    },
    content: {
        paddingLeft: 15
    },
    lightBulb: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    chevronRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10
    }
})

export default ListItem