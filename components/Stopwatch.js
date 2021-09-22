import React, {useState}  from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles'
import { Stopwatch } from 'react-native-stopwatch-timer';

export const MyStopwatch = () => {
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sectionStyle}>
                <Stopwatch
                    laps
                    msecs
                    start={isStopwatchStart}
                    reset={resetStopwatch}
                />
            </View>
            <View style={styles.button}>
                <Button title={'Start'}/>
                <Button title={'Reset'}/>
            </View>
        </View> 
    )
}

// export default class StopwatchScreen extends React.Component {
//     render() {
//         // let twoDigits = (number) => (number <= 9 ? `0${number}`: number);
//         return (
//             <View style={styles.container}>
//                 <View>
//                 <Text style={styles.title}>
//           Example of React Native Timer and Stopwatch
//         </Text>
//                     <View>
//                         {MyStopwatch}
//                     </View>
//                 </View>
//                 <View style={styles.button}>
//                     <Button title={'Start'}/>
//                     <Button title={'Reset'}/>
//                 </View>
//             </View>    
//         );
//     }
// }