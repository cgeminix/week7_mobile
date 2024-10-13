import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, CheckBox } from "react-native";
import { useState, useEffect } from "react";
import {createStore} from "redux"
  
export default function Screen2({ navigation,route}) {
    var [name, setName] = useState("")
    var [data, setData] = useState([
        {
            job:"To check email",
            isChecked: true
        },
        {
            job: "UI task web page",
            isChecked: true
        },
        {
            job: "Learn javascript basic",
            isChecked: true
        },
        {
            job: "Learn HTML Advanced",
            isChecked: true
        },
        {
            job: "Medical App UI",
            isChecked: true
        },
        {
            job: "Learn Java",
            isChecked: true
        },
    ]);
  
    useEffect(() => {
      setName(route.params.name)
    },[route.params.name])
  
    useEffect(() => {
      if (route.params.job !== "") {
        store.dispatch({ type: 'INSERT', job: route.params.job });
      }
    }, [route.params.job]);
    
    function jobReducer(state = data, action) {
      switch (action.type) {
        case 'INSERT':
          return [{ job: action.job, isChecked: false }, ...state]
        case 'UPDATE' :
          navigation.navigate("Screen3", { job: action.job, isUpdate: true })
          return state.filter(o => o.job !== action.job)
        case 'DELETE':
          return state.filter(o=>o.job !== action.job)
        default:
          return state
      }
    }
    let store = createStore(jobReducer)
    store.subscribe(() => setData(store.getState()))
  
    return (
        <View style={styles.container}>
          <View style={styles.viewAvatar}>
            <Pressable style={{marginRight:60}} onPress={() => navigation.navigate('Screen1')}>      
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
        <View style={styles.viewSearch}>
          <Image
            source={require("../assets/images/SearchIcon.png")}
            style={{ width: 20, height: 20, marginLeft: -100 }}
          ></Image>
          <TextInput placeholder="Search"></TextInput>
        </View>
        
        <View style={styles.viewTotalJob}>
        <ScrollView style={{width: '100%'}}>
    {data.filter(o => o.job).map((job, index) => (
        <View key={index} style={styles.viewJob}>
            <CheckBox
                value={job.isChecked}
                onValueChange={() =>
                    setData(
                        job.isChecked
                            ? [{ job: job.job, isChecked: !job.isChecked }, ...data.filter(f => f.job !== job.job)]
                            : [...data.filter(f => f.job !== job.job), { job: job.job, isChecked: !job.isChecked }]
                    )
                }
                style={{ marginLeft: 20 }}
            />
            <Text style={{ marginLeft: 20, fontWeight: 700, fontSize: 16, width: 220 }}>{job.job}</Text> 
            <Pressable onPress={() => store.dispatch({ type: 'UPDATE', job: job.job })}>
                <Image
                    source={require("../assets/images/EditIcon.png")}
                    style={{ width: 20 }}
                />
            </Pressable>
            <Pressable onPress={() => store.dispatch({ type: 'DELETE', job: job.job })}>
              <Image
                source={require("../assets/images/DeleteIcon.png")} 
                style={{ width: 20, height:20, marginLeft: 15 }}
              />
            </Pressable>
        </View>
    ))}
</ScrollView>
        </View>
        <Pressable style={styles.btnAdd} onPress={()=>{navigation.navigate("Screen3",{name, job:"", isUpdate:false})}}>
            <Text style={{fontWeight:700,fontSize:40,color:"#fff"}}>+</Text>
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
    viewSearch: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 350,
      height: 40,
      marginTop: 40,
      borderRadius: 5,
      borderWidth: 2,
    },
    viewTotalJob:{
        width: 350,
        height: 350,
        alignItems: "center",
        justifyContent: "center",
    },
    viewJob: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      width: 350,
      height: 48,
      backgroundColor: "rgba(222, 225, 230, 0.47)",
      borderRadius: 25,
      display: 'flex',
    },
    btnAdd: {
        marginTop: 40,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00BDD6",
        borderRadius: 30,
      },
  })