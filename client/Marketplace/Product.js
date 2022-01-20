import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './Styles';

const Product = ({image, name, description, price, seller}): Node => {
    return (
      <View style={styles.productItem}>
        <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 4 }}/>
        <Text>{ name }</Text>
        <Text>{ description }</Text>
        <Text>{ price }</Text>
        <Text>{ seller }</Text>
      </View>
    )
  }

export default Product;
