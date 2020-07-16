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

const SignUp= props=> {
    
    const [email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const[username, setUsername]= useState('');
    const[userId,setUserId]=useState(1);

    const {navigate}= props.navigation;
    
    const signUpMethod= (email,password)=>{
        try{
            if(password.length<6){
                alert("Password  must be more than 6 characters");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password).then(response=>{
                navigate('Dashboard',{name: username});
                setEmail('');
                setPassword('');
                setUsername('');
            })
        }
        catch(error){
            console.log(error.toString());
        }
    }
    
    const storeUsername= (userId,username) =>{
        
        let id=userId+1;
        setUserId(id);

        setTimeout(()=>{
            firebase.database().ref('users/'+userId).set({
                name: username
            }).then((data)=>{
                console.log('data',data)
            }).catch((err)=> {
                console.log('error',error)
            })
        },3000
        )
    }
        return(
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>HapPeace</Text>
                </View>
                
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../assets/images/camera.png')}
                    />
                </View>
               <View style={styles.formContainer}>

               <TextInput style={styles.input} placeholder="Username"
                returnKeyType="next"
                onChangeText={(username)=>setUsername(username)}
                value={username}/>

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

                
                    <TouchableOpacity >
                        <Button title="Signup"
                        onPress={()=> {
                            signUpMethod(email, password);
                            storeUsername(userId,username);
                        }}/>
                    </TouchableOpacity>
                
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

export default SignUp;