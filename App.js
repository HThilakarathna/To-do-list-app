import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity, TextInput} from 'react-native';


const App = () => {
  const [taskname,taskUpdate] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>To Do List</Text>
      </View>
      <View style={styles.imagewrapper}>
        <Image 
          source={{uri:"https://img.freepik.com/free-vector/illustration-list_53876-28518.jpg?size=626&ext=jpg&ga=GA1.2.1349837809.1689877740&semt=ais"}}
          style={{width: 120, height: 120,alignSelf: 'center'}}
        />
      </View>
      <View style={styles.listwrapper}>
        <ScrollView>
        <Component task="Task 1" />
        <Component task="Task 2" />
        <Component task="Task 3" />
        <Component task="Task 4" />
        <Component task="Task 5" />
        <Component task="Task 6" />
        <Component task="Task 7" />
        <Component task="Task 8" />
        <Component task="Task 9" />
        <Component task="Task 10" />
        <Component task="Task 11" />
        <Component task="Task 12" />
        <Component task="Task 13" />
        </ScrollView>
      </View>
      <View style={styles.buttonwrapper}>
        <TextInput 
          style = {styles.textInput}
          onChangeText={taskUpdate}
          value={taskname}
          placeholder='Type Task Here!'
        />
        <TouchableOpacity
          style = {styles.button} 
          onPress={() => Alert.alert('you are going to add a new task')}>
            <Text> + </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {styles.button}
          onPress={() => Alert.alert('Changes are saved')}>
            <Text> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Component = (props) => {
  const [isSelected,setSelection] = useState(false);
  return (
    <View style={styles.component}>
      <View> 
      <View
          style ={{width: 15, height:15, backgroundColor: '#fff', borderWidth: 1.5, borderColor: 'red', borderRadius: 10, alignSelf: 'flex-end'}}
          onPress={() => Alert.alert('todo deleted')}
      />
      </View>
      <View style={styles.task}>
        <View
          style ={{width: 25, height:25, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey'}}
          value ={isSelected}
          onValueChange={setSelection}
        />
        <Text style={{fontSize : 25, marginLeft: 20, color: 'blue'}}>{props.task}</Text>
      </View>
    </View>
  );
}
function myfunction(){
  return (
    x = 0
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    flexDirection: 'column',
    padding: 10
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
    paddingLeft: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign : 'center'
  },
  heading: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  imagewrapper: {
    flex: 3,
  },
  buttonwrapper: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  listwrapper: {
    flex: 10,
    padding: 25,
    flexwrap: 'wrap'
  },
  component: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'grey',
   
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  textInput:{
    color: "white",
    backgroundColor: "grey",
    width: 200,
    height: 50,
    borderRadius : 10
  },
});

