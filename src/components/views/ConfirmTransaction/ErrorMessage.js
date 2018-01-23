import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.errorAlt,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: measures.defaultPadding,
    marginVertical: measures.defaultMargin
  },
  title: {
    fontWeight: 'bold',
    fontSize: measures.fontSizeMedium,
    color: colors.error,
    textAlign: 'center'
  },
  message: {
    fontSize: measures.fontSizeMedium - 2,
    color: colors.error,
    textAlign: 'center'
  }
});

export default ({ error }) => !error ? null : (
  <View style={styles.container}>
    <Text style={styles.title}>Transaction failed</Text>
    <Text style={styles.message}>{error.message}</Text>
  </View>
); 