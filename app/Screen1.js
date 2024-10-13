import { Text, View, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import {useState, useEffect} from "react"


export default function Screen1({navigation}) {
    var [name, setName] = useState("");
  
    var handleLogin = () => {
        if (name) {
        navigation.navigate("Screen2", {name : name});
        } else 
        alert("Phải nhập tên");
        }
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/PenNote.png")}
                style={{ width: 270, height: 270, marginTop: 30 }}
            />

            <Text style={styles.viewManage}>
                MANAGER YOUR {`\n`} TASK
            </Text>

            <View style={styles.viewEmail}>
                <Image
                    source={require("../assets/images/EmailIcon.png")}
                    style={{ width: 25, height: 25 }}
                ></Image>
                <TextInput
                    placeholder="Enter your name"
                    style={{ marginLeft: 10 ,width:250, height: 30, fontSize:16}}
                    onChangeText={(text) => setName(text)}
                ></TextInput>
            </View>

            <Pressable style={styles.btnStart} onPress={handleLogin}>
                <Text style={{color:'#fff', fontWeight:700, fontSize:16}}>GET STARTED</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "column",
    },
    viewManage:{
        marginTop: 20,
        textAlign: "center",
        color: "#8353E2",
        fontFamily: "Epilogue",
        fontSize: 24,
        fontWeight: 700,
    },
    viewEmail: {
        width: 320,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 15,
        borderColor: "grey",
        borderWidth: 2,
        marginTop: 50,
    },
    btnStart: {
        marginTop: 60,
        width: 200,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00BDD6",
        borderRadius: 15,
    },
});
