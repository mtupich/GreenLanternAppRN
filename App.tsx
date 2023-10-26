import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import lanternOn from './assets/pictures/symbol-on.png';
import lanternOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isActive, setActive] = useState(false)
  let lanternImg = isActive ? "./assets/pictures/symbol-on.png" : "./assets/pictures/symbol-off.png"
  
   function handlePress() {
    setActive((oldValue:boolean) =>{
      return !oldValue
    })
   }

  return (
    <View style={ isActive ? styles.containerOn : styles.containerOff }>
      <TouchableOpacity onPress={handlePress}>
         <Image source={isActive ? lanternOn : lanternOff} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  containerOn:{
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff:{
    flex: 1,
    backgroundColor: "rgba(80, 159, 103, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});
