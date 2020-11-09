import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Input } from 'antd';

class App extends Component {
  state = {
    inputValue: "",
    todoList: []
  };

  render() {
    return (
      <div className="App">
        <Form>
          <Form.Item
            name="todoList"
            style={{ width: "25%" }}
          >
            <Input onChange={e => this.setState({ inputValue: e.target.value })} />
            <Button>Add todo</Button>
          </Form.Item>
        </Form>
      </div >
    );
  }
}

export default App;
