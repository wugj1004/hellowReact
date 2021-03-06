/**
 * Created by wugj on 2018/4/9.
 */
import React,{Component} from 'react'
import {StyleSheet,View,Button } from 'react-native'
import {StackNavigator, } from 'react-navigation'

import NavigatorWithParams from './NavigatorWithParams'
import NavigatorOutParams from './NavigatorOutParams'


class NaviStack extends Component{

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={naviStackStyles.container}>
                <Button color="#841584" onPress={()=>navigate('WithParams',{user:'Sybil'})} title="带参跳转"/>
                <Button style={naviStackStyles.dMargin} onPress={()=>navigate('OutNavi')} title="不带参数"/>
            </View>
        );
    }

}

const naviStackStyles = StyleSheet.create({
    container:{
        flex:1,
    },
    dMargin:{
        marginTop:10
    }
});

export default naviStack = StackNavigator({
    Home: {screen: NaviStack},
    WithParams: {screen: NavigatorWithParams},
    OutNavi:{screen: NavigatorOutParams},
})
