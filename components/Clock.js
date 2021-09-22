import React  from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles'

export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    newTime() {
        this.setState({time: new Date()});
    }
    
    componentDidMount() {
        this.clock = setInterval(() => this.newTime(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.clock);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.clock}>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        );
    }
}