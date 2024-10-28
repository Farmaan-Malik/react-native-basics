
import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import Mytext from './component/Mytext/MyText';


const App = ()=> {
  return (
    <SafeAreaView>
        <View>
          <Mytext name='Farmaan'/>
        </View>
    </SafeAreaView>
  );
}

export default App;
