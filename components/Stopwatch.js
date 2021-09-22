import React, {useState}  from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles, options } from '../styles'
import { Stopwatch } from 'react-native-stopwatch-timer';

export const MyStopwatch = () => {
    const [started, setStarted] = useState(false);
    const [reset, setReset] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.stopwatch}>
                <Stopwatch
                    laps
                    msecs
                    start={started}
                    reset={reset}
                    options={options}
                />
            </View>
            <TouchableHighlight onPress={() => {
                setStarted(!started);
                setReset(false);
            }}>
                <Text style={styles.button}>
                    {!started ? 'START' : 'STOP'}
                </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
                setStarted(false);
                setReset(true);
            }}>
                <Text style={styles.button}>RESET</Text>
            </TouchableHighlight>
        </View> 
    )
}
