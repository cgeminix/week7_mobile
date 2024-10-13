import {StyleSheet, Text, View, Image, TextInput, Pressable} from "react-native";
import { useState, useEffect } from "react";

export default function Screen3({ navigation, route }) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (route.params) {
            setName(route.params.name || "");
            setJob(route.params.job || "");
            setIsUpdate(route.params.isUpdate || false);
        }
    }, [route.params]);

    let pressBtnFinish = () => {
        navigation.navigate("Screen2", { job: job });
    };
    return (
      <View style={styles.container}>
        <View style={styles.viewAvatar}>
            <Pressable style={{marginRight:60}} onPress={() => navigation.navigate('Screen2')}>      
                <Image
                    source={require("../assets/images/BackIcon.png")}
                    style={{width:40,height:40}}
                />
            </Pressable>

            <Image
                source={require("../assets/images/Avatar.png")}
                resizeMode="contain"
                style={{ height: 60, width: 60 }}
            />

            <View>
                <Text style={styles.viewTextAvatar}>
                    Hi {name}
                </Text>
                <Text style={{marginLeft:10, marginTop: -5, fontSize: 16, fontWeight:700, color:"grey"}}>
                    Have agrate day a head
                </Text>
            </View>
        </View>

        <Text style={styles.title}>{isUpdate ? "EDIT YOUR JOB" : "ADD YOUR JOB"}</Text>

        <View style={styles.viewInputJob}>
            <Image source={require("../assets/images/InputIcon.png")} style={{ width: 20, height: 20, marginLeft: -100 }} />
            <TextInput
                placeholder="Input your job"
                style={{ marginLeft: 10 , height:30}}
                value={job}
                onChangeText={setJob}
            />
        </View>

        <Pressable style={styles.btn} onPress={pressBtnFinish}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>FINISH</Text>
        </Pressable>

        <Image source={require("../assets/images/PenNote.png")} style={{ width: 190, height: 170, marginTop: 50 }} />
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
  btn: {
    marginTop: 40,
    width: 190,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00BDD6",
    borderRadius: 15,
  },
  viewAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 100,
    marginTop:10
  },
  viewTextAvatar:{
      width: 101,
      height: 30,
      marginLeft: 10,
      fontFamily: "Epilogue",
      fontSize: 24,
      fontWeight: 700,
      marginTop: 10,
  },
  viewInputJob: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    width: 320,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  avatarText: {
    width: 101,
    height: 30,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
  },
  subText: {
    marginLeft: 10,
    marginTop: -5,
    fontSize: 14,
    fontWeight: 700,
    color: "grey",
  },
  title: {
    width: "80%",
    height: 48,
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 30,
  },
});
