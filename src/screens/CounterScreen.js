import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const reducer = (state, action) => {
    return action.type == "Increment"
      ? { ...state, counter: state.counter + 1 }
      : { ...state, counter: state.counter - 1 };
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "Increment" });
        }}
      />
      <Text>Current Count:{state.counter}</Text>
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "Decrement" });
        }}
      />
    </View>
  );
};

const Style = StyleSheet.create({});

export default CounterScreen;
