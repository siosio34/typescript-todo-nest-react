import React from 'react';
import styled from 'styled-components';
import { Button, List, Input } from 'antd';

const TodoWrapper = styled.div`
    background: #f2f2f2;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const TodoCard = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    min-width: 400px;
    min-height: 600px;
    background: #ffffff;
`
const TodoTitle = styled.h3`
    font-size: 1.5em;
    text-align: center;`
    
type TodoProps = {
    
}

type TodoState = {
    currentInput: string;
    todos: { text: string, done: boolean }[];
}

class TodoPage extends React.Component<TodoProps, TodoState> {
    
    state: TodoState = {
        currentInput: '',
        todos: [],
    }
    
    onChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            currentInput: e.target.value
        })
    }
    
    onClickAddTodoBtn = (): void => {
        const newTodos = this.state.todos.concat({
           text: this.state.currentInput,
           done: false,
        });
        
        this.setState({
            currentInput: '',
            todos: newTodos
        })
        
    }
    
    render(){
        return (
            <TodoWrapper>
                <TodoCard>
                    <TodoTitle>TODO</TodoTitle>
                    <Input onChange={this.onChangeTodoInput} style={{ marginBottom: 8}} placeholder="오늘 뭐하지? "/>
                    <Button style={{ marginBottom: 16}} shape="circle" type="primary" icon="plus" onClick={this.onClickAddTodoBtn}/>
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.todos}
                        renderItem={item => (<List.Item>{item.text}</List.Item>)}
                        />
                </TodoCard>
            </TodoWrapper>
            )
    }
}



export default TodoPage;