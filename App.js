import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

const App = () => {
  const [hearts, setHearts] = useState([]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Animated.View style={[styles.heartContainer]}>
          <Heart color="purple" />
        </Animated.View>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const Heart = props => (
  <View {...props} style={[styles.heart, props.style]}>
    <AntDesign name="heart" size={48} color={props.color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#E1306C',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
});

export default App;
