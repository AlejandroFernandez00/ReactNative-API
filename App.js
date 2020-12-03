import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native';


const fraseAño = () => {
  return fetch('http://numbersapi.com/random/year?json')
    .then((response) => response.json())
    .then((json) => {
      return json.text;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isReady: false,
      texto: null
    };
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
      <Button onPress={() => this.handlerClick()}
                  title="Llamar API"
                  />
                  <Text>{this.state.texto}</Text>  
    </View>
  );
}

handlerClick(){
  fraseAño().then(resp=> {
    this.setState({texto: resp});
  });
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
