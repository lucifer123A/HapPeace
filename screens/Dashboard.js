import React from 'react';
import {View,
Text,
StyleSheet
} from 'react-native';

const Dashboard= (props)=>{
    return(
        <View>
            <Text> Welcome {props.route.params.name}</Text>
        </View>

    )
}

export default Dashboard;