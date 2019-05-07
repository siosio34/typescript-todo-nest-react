import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const TodoWrapper = styled.div`
    padding: 16px;
    background: #f2f2f2;
    display: flex;
    height: 100%;
    `
const TodoTitle = styled.h3`
    font-size: 1.5em;
    text-align: center;
    `
class TodoPage extends React.Component {
    
    render(){
        return (
        <>
            <TodoWrapper>
                <TodoTitle>TODO</TodoTitle>
                <Button>우오</Button>
            </TodoWrapper>
        </>
            )
    }
}



export default TodoPage;