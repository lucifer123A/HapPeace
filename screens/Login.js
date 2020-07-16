import React, {useState, Component} from 'react';
import {View,
        Text,
        StyleSheet,
        Image,
        TextInput,
        TouchableOpacity,
        Button
} from 'react-native';

import * as firebase from 'firebase';

const Login= props=> {
    
    const [email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const {navigate}= props.navigation;

    const getUsername= () =>{
        setTimeout(()=>{
            firebase.database().ref('users/').on('value',(snapshot)=>{
                const snap= snapshot.val();
                console.log("name= "+snap.username);
                console.log("snap= "+snap);
                navigate('Dashboard',{name: snap.username});
            }),3000
        })
    }

    const logInMethod= (email,password)=> {
        try{
            firebase.auth().signInWithEmailAndPassword(email,password).then(response =>{
                setEmail('');
                setPassword('');
            });
        }
        catch(error){
            console.log(error.toString());
        }
    }

    

        return(
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>HapPeace</Text>
                </View>
                
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../assets/images/brain.png')}
                    />
                </View>
               <View style={styles.formContainer}>

               <TextInput style={styles.input} placeholder="Email"
                returnKeyType="next"
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={(email)=>setEmail(email)}
                value={email}/>

                <TextInput style={styles.input} placeholder="Password" secureTextEntry
                returnKeyType="go"
                onChangeText={(password)=>setPassword(password)}
                value={password}/>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnsize}>
                        <Button style={styles.btn} title="Login"
                        onPress={()=>{
                            logInMethod(email,password);
                            getUsername();
                            }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnsize}>
                        <Button style={styles.btn}  title="Signup"
                        onPress={()=> {
                            navigate('SignUp');
                        }}/>
                    </TouchableOpacity>
                </View>
               </View>
            </View>
        );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'brown'
    },
    txtContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    txt:{
        fontSize:30,
        fontStyle:'italic',
        color:'white'
    },
    logoContainer:{
        justifyContent: 'center',
        flexGrow:1,
        alignItems:'center'
    },
    logo:{
        height:100,
        width:100,
        borderRadius:50,
        borderColor:'black',
        borderWidth:3
    },
    formContainer:{
        padding:20
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.2)',
        height:50,
        marginBottom:30,
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    btn:{
        flex:1
    },
    btnsize:{
        width:120
    }
});

export default Login;