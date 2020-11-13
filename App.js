import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import fraseAño from "./library/library";

export default class App extends Component {

  constructor(props){
    super(props)
    this.handlerClick = this.handlerClick.bind(this);
    }

    
  render (){
    
    return(
    <View style={styles.container}>
      <Text style={styles.Text}>Bienvenido</Text>
      <Image
          source={{
            uri: 'https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s',
          }}
          style={{ width: 200, height: 200 }}
        />
      <StatusBar style="auto" />
      <button title="Probar la Api" onClick={this.handlerClick}>Probar api</button>
    </View>
  );
}

handlerClick(){
  function funcionCallback(datos){
    alert(datos.text)
}
fraseAño(funcionCallback);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
