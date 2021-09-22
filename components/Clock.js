import React  from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles'

export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    tick() {
        this.setState({time: new Date()});
    }
    
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.clock}>{this.state.time.toLocaleTimeString()}</Text>
            </View>
        );
    }
}