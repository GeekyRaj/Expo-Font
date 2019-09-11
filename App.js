import React ,{Component}from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import * as Font from 'expo-font';
//import Text from './components/CustomText';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
      'Gotham' : require('./assets/fonts/GothamBold.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <View>
          <Text style={{fontFamily: 'Open-sans'}}>Open Sans</Text>
          <Text style={{fontFamily: 'Gotham', fontSize:25,}}>NeoSTORE</Text>
          <Text style={{fontFamily: 'Gotham', fontSize:25,}}>NeoSTORE</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
