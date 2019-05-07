import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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
    width: 50em;
    height: 600px;
    background: #ffffff;
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
                <TodoCard>
                    <TodoTitle>TODO</TodoTitle>
                    <Button shape="circle" type="primary" icon="plus" />
                </TodoCard>
            </TodoWrapper>
        </>
            )
    }
}



export default TodoPage;