import React, { useState, useEffect } from 'react';
import { Col, Row, List, Input, Button } from 'antd';
import TodoItem from './components/TodoItem';
import axios from 'axios';

const App = () => {
  const [todoList, setTodoList] = useState([{ id: 1, task: "google" }]);
  const [inputValue, setInputValue] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5555/todos');
    setTodoList(res.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  //create
  const addTodo = () => {
    axios.post('http://localhost:5555/todos', { task: inputValue })
      .then(res => {
        fetchTodos();
        
        setInputValue("");
      });
  };

  //delete
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5555/todos/${id}`)
      .then(res => {
        fetchTodos();
      });
  };

  //edit/update
  const editTodo = (id, updatedTask) => {
    axios.put(`http://localhost:5555/todos/${id}`, { task: updatedTask })
      .then(res => {
        fetchTodos();
      });
  };
  return (
    <Row justify="center" >
      <Col span={6} style={{ border: "1px solid salmon" }} style={{ border: "1px solid salmon" }}>
        <Row>
          <Col span={20}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </Col>
          <Col span={4}>
            <Button onClick={addTodo} style={{ width: "100%" }}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <List
              size="small"
              header={<div>Todo List</div>}
              bordered
              dataSource={todoList}
              renderItem={item => (
                <>
                  <TodoItem editTodo={editTodo} item={item} deleteTodo={deleteTodo} />
                </>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default App;