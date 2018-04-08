import React, { Component } from 'react';
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class SelectSMF extends Component {
    constructor(props) {
        super(props);
        this.temp = Firebase.database().ref().child('Temp');
        this.moist = Firebase.database().ref().child('moist');
        this.hr = Firebase.database().ref().child('Setting/TimeWater/hr');
        this.min = Firebase.database().ref().child('Setting/TimeWater/min');
        this.date = Firebase.database().ref().child('Setting/Timepui/datepui');
        this.state = {
            temp : '',
            moist : '',
            waterhr : null,
            watermin : null,
            datepui : null,
            
        };
        // this.checkEmailReg = this.checkEmailReg.bind(this);
        
    }
    componentDidMount(){
        this.temp.on('value',snap => {
            this.setState({ 
                temp : snap.val()
            });
        });
        this.moist.on('value',snap => {
            this.setState({ 
                moist : snap.val() 
            });
        });
        this.hr.on('value',snap => {
            this.setState({ 
                waterhr : snap.val() 
            });
        });
        this.min.on('value',snap => {
            this.setState({ 
                watermin : snap.val() 
            });
        });
        this.date.on('value',snap => {
            this.setState({ 
                datepui : snap.val() 
            });
        });
    }
    onSubmit(){
        Actions.set();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Show the status of your farm.
                </Text>
                
                <Text style={styles.Text}>
                    Temp : {this.state.temp}°C
                </Text>

                <Text style={styles.Text}>
                    Moist : {this.state.moist}%
                </Text>
                <Text style={styles.Text}>
                    เวลารดน้ำ {this.state.waterhr} : {this.state.watermin} น.
                </Text>
                <Text style={styles.Text}>
                    รดปุ๋ยทุก {this.state.datepui} วัน
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>Setting</Text>
                </TouchableOpacity>

    
            </View>
            
        );
    }



} export default SelectSMF

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#32cd32' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1
    },
    Text: {
        fontSize : 20,
        marginVertical : 25,
        fontWeight : '500',
        color : 'white',
        padding : 10,
        backgroundColor : '#874514'
    },
    TextInput: {
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
    },
    button: {
        marginVertical : 25,
        backgroundColor : '#874514',
        borderRadius : 30,
        width : 220,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color : '#F5FFFA',
    },
});
