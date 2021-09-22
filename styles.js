import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        fontSize: 50,
        fontFamily: 'sans-serif'
    },
    stopwatch: {
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        marginTop: 10,
    },
});

export const options = {
    container: {
      padding: 5,
      width: 300,
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      color: '#000',
      marginLeft: 7,
    },
  };