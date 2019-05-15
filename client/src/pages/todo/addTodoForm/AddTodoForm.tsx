import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';

import { getTodos, postTodo } from 'store/todo/todo.action';

const mapDispatchProps = {
    getTodos: getTodos.request,
    postTodo: postTodo.request,
}

type Props = typeof mapDispatchProps;

type State = {
    currentInput: string
};

class AddTodoForm extends React.Component<Props, State> {
    state: State = {
        currentInput: ''
    }
    
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            currentInput: e.target.value
        })
    }
    
    handleAddButton = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        const { currentInput } = this.state;

        if(currentInput === '') 
            return ;
            
        this.props.getTodos(currentInput);
        this.props.postTodo(currentInput);
    }
    
    render() {
        return (
            <form style={{ display: 'flex'}} >
                <Input onChange={this.handleInputChange} placeholder="오늘 뭐하지?" value={this.state.currentInput} />
                <Button onClick={this.handleAddButton} style={{ marginBottom: '16px', marginLeft: '4px'}} shape="circle" type="primary" icon="plus" htmlType="submit"/>
            </form>
        )   
    }
}

export default connect(
  null,
  mapDispatchProps
)(AddTodoForm);