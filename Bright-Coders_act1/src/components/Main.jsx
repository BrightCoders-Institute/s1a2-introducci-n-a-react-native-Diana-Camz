import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './RespositoryList.jsx';

const Main =()=> {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Aplicacion funcionando</Text>
      <RepositoryList/>
    </View>
  )
}

export default Main