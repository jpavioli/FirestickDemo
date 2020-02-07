import React from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import MParticle from 'react-native-mparticle'

export default class Buttons extends React.Component {
  state = {
    color: 'white',
  }

  button1 = () => {
    console.log('Button 1 Pressed')
    this.setState({ color: 'red' })
    MParticle.logEvent('Button Pressed',MParticle.EventType.Other,{'Button Number':'1'})
  }

  button2 = () => {
    console.log('Button 2 Pressed')
    this.setState({ color: 'green' })
    MParticle.logEvent('Button Pressed',MParticle.EventType.Other,{'Button Number':'2'})
  }

  button3 = () => {
    console.log('Button 3 Pressed')
    this.setState({ color: 'blue' })
    MParticle.logEvent('Button Pressed',MParticle.EventType.Other,{'Button Number':'3'})
  }


  render() {
    return (
      <View style={styles.container}>
        <Button title="Button 1" onPress={() => this.button1()} color="red"/>
        <Button title="Button 2" onPress={() => this.button2()} color="green"/>
        <Button title="Button 3" onPress={() => this.button3()} color="blue"/>
        <Button title="Selected Color" onPress={() => this.setState({ color: 'white' })} color={this.state.color } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
