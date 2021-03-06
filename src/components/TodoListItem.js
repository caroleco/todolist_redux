import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, onLongPressTodo } from 'react-native'
import { Button } from "react-native";


const TodoListItem = ({ todo, onPressTodo, onLongPressTodo, deleteTodo }) =>
    <TouchableOpacity onPress={onPressTodo}
    onLongPress={onLongPressTodo}>
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThrough : null]}>
                {todo.text}
            </Text>
            <Button title="x" onPress={deleteTodo}  />

        </View>
    </TouchableOpacity>


const styles = StyleSheet.create({
    line: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    lineThrough: {
        textDecorationLine: 'line-through'
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default TodoListItem;