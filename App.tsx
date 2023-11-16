import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const arrButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const arrOperators = ['/', '-', 'x', '+', '='];
function App() {
  const [firstNumber,setFirstNumber]=useState('');
  const [secondNumber,setSecondNumber]=useState('');
  const [selectedOperator,setSelectedOperator]=useState('');
  const [display,setDisplay]=useState("0");

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(selectedOperator);

  function calculate(a:number,b:number,opr:string){
    console.log('a,b,opr',a,b,opr)
    switch(opr){
      case '+':
        return a+b;
       case '-':
        return a-b;
       case '*':
        return a*b; 
       case '/':
        return a/b;
       default:
        return display

    }
  }

  function handleNumbers(num:number){
    console.log('first-second',firstNumber,secondNumber)
    if(selectedOperator.length){
      const stringNum = secondNumber+num;
      setSecondNumber(stringNum);
      setDisplay(stringNum);
    }else{
      const stringNum=+firstNumber+num;
      setFirstNumber(stringNum.toString());
      setDisplay(stringNum.toString());
    }
  }

  function handleOperators(opr:string){
    console.log('secondNumber=====>>>',secondNumber)
    if(secondNumber.length){
      const result = calculate(+firstNumber,+secondNumber,opr);
      console.log("result",result),
      setFirstNumber(result.toString());
      setSecondNumber('');
      setDisplay(result.toString());
    }
    setSelectedOperator(opr);
  }





  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.buttons}>
          {arrButtons.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.button} onPress={()=>handleNumbers(item)}>
                <Text style={styles.displayButtonText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.operators}>
          {arrOperators.map((item, index) => {
            return (
              <TouchableOpacity   onPress ={()=> handleOperators(item)}key={index} style={styles.operator}>
                <Text style={styles.displayOperator}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  display: {
    flex: 0.3,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  actions: {
    flex: 0.7,
    flexDirection: 'row',
  },
  displayText: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
  },
  displayButtonText:{
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
  },
  displayOperator:{
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
  },
  buttons: {
    backgroundColor: 'black',
    flex: 0.75,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
  },
  operators: {
    backgroundColor: 'black',
    flex: 0.25,
    gap: 10,
    alignItems: 'center',
  },
  operator: {
    width: '90%',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;