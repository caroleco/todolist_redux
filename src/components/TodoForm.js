import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { addTodo, setTodoText, updateTodo } from '../actions';
import Input from './Input'

class TodoForm extends React.Component {

    onChangeText(text) {
        this.props.dispatchSetTodoText(text)
    }

    onPress() {
        const { todo } = this.props;
        const { text } = todo;

        if (todo.id)
            return this.props.dispatchUpdateTodo(todo)

        this.props.dispatchAddTodo(text)
    }

    render() {
        const { text, id } = this.props.todo;

        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={id ? "Save" : "Add"}
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    }
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps,
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    })(TodoForm);