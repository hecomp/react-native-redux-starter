import React from 'react'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const HeaderIcon = ({name, color, size, styles, onPress}) => {
    return (
        <TouchableHighlight 
            style={styles}
            onPress={onPress}
        >
            <Icon name={name} color={color} size={size} />
        </TouchableHighlight>
    )
} 

export default HeaderIcon