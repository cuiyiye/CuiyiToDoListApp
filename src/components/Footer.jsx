import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer} />
  );
};

// Styles for the footer
const styles = StyleSheet.create({
  footerContainer: {
    height: 50, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee', // A light grey background
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Light border color for the top border
  },
  footerText: {
    color: '#333', // Dark text color for contrast
  },
});

export default Footer;