import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, measures } from '@common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.successAlt,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: measures.defaultPadding,
    marginVertical: measures.defaultMargin
  },
  title: {
    fontWeight: 'bold',
    fontSize: measures.fontSizeMedium,
    color: colors.success,
    textAlign: 'center'
  },
  message: {
    fontSize: measures.fontSizeMedium - 2,
    color: colors.success,
    textAlign: 'center'
  }
});

export default ({ txn }) => (!txn || !txn.hash) ? null : (
  <View style={styles.container}>
    <Text style={styles.title}>Transaction successful</Text>
    <Text style={styles.message}>
      Your transaction was sent successfully and now is waiting for confirmation. Please wait.
    </Text>
  </View>
);