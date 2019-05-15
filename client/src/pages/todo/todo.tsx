import React from 'react';
import styled from 'styled-components';
import { Button, List, Input, Icon } from 'antd';
import { AddTodoForm } from './addTodoForm';

type Props = {
    
}

type State = {
    editing: boolean;
    currentInput: string;
    todos: { text: string, done: boolean }[];
}

class TodoPage extends React.Component<Props, State> {
    
    state: State = {
        editing: false,
        currentInput: '',
        todos: [],
    }
    
    onFinishToggleButton = (id: number): void => {
        const newTodos = this.state.todos;
        newTodos[id].done = !newTodos[id].done;
        
        this.setState({
            todos: newTodos
        })
    }
    
    onDeleteTodoItemButton = (id: number): void => {
        const newTodos = this.state.todos.filter((item, index) => index !== id);
        this.setState({
            todos: newTodos
        })
    }
    
    render(){
        
        return (
            <TodoWrapper>
                <TodoCard>
                    <TodoTitle>TODO</TodoTitle>
                    <AddTodoForm />
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.todos}
                        renderItem={(item,index) => (
                        <List.Item style={{ textDecoration: item.done === true ? 'line-through' : 'none', display: 'flex', justifyContent: 'space-between' }}
                            actions={[
                            <Icon type="check-square" theme="twoTone" twoToneColor="#52c41a" 
                            onClick={() => this.onFinishToggleButton(index)} />,
                            <Icon type="delete" onClick={() => this.onDeleteTodoItemButton(index)} />
]}>
                            {item.text}
                        </List.Item>)}
                        />
                </TodoCard>
            </TodoWrapper>
            )
    }
}


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

export default TodoPage;