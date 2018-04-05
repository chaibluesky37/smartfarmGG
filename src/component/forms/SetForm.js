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

class SetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moistset : null,
            waterhr : null,
            watermin : null,
            datepui : null,
        };
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    onSubmit(){
        Firebase.database().ref('Setting').update({
            Moist : this.state.moistset,
        });
        Firebase.database().ref('Setting/TimeWater').update({
            hr : this.state.waterhr,
            min : this.state.watermin,
        });
        Firebase.database().ref('Setting/Timepui').update({
            datepui : this.state.datepui,
        });
        Actions.reset("main");
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Setting of your farm.
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Set Moist'
                    onChangeText={(moistset) => this.setState({moistset})}
                    value={this.state.moistset}
                    // onKeyPress={this.checkPasswordReg}

                />
                
                <Text style={styles.title}>
                    Settime to water
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Set Hour'
                    onChangeText={(waterhr) => this.setState({waterhr})}
                    value={this.state.waterhr}
                    // onKeyPress={this.checkPasswordReg}

                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Set Minute'
                    onChangeText={(watermin) => this.setState({watermin})}
                    value={this.state.watermin}
                    // onKeyPress={this.checkPasswordReg}

                />
                <Text style={styles.title}>
                    Setdate to Fertilizer
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Set Date'
                    onChangeText={(datepui) => this.setState({datepui})}
                    value={this.state.datepui}
                    // onKeyPress={this.checkPasswordReg}

                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onSubmit}
                >
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
    
            </View>
            
        );
    }



} export default SetForm

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
    textInput: {
        height : 42 ,
        width : 300,
        backgroundColor : '#F8F8FF',
        borderRadius : 20,
        marginVertical : 3,
        paddingLeft : 15,
        fontSize : 17,
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
