/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Product from './Product';
import styles from './Styles';


// const port = 8000;
const url = `http://10.0.2.2:8000/`;

const App: () => Node = () => {  

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {method: "GET"})
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(json => {
        setData(json);
      })
      .catch(error => {
        alert(error);
      })
      .finally(setLoading(false));
  });
  
  console.log(data);
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Product image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jv9io4X8vDv9hHVkCAkn5QHaEX%26pid%3DApi&f=1" name="Kokos" description="The fckn best kokos ever" price="300" seller="Kokosovic"/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
