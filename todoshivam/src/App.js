import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';

class  App extends Component {
  state={
    todos: [
      // {id: 1, content: 'Buy Icecream'},
      // {id: 2, content: 'Playing Cricket'}
    ]
  }
  componentDidMount() {
    axios.get(`https://gorest.co.in/public/v2/todos`)
   .then(res => {
      const todos = res.data;
      this.setState({ todos });
     })
   }
  deleteTodo = (id)=> {
    const todos =this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
todo.id= Math.random();
let todos =[...this.state.todos, todo]
this.setState({
  todos
})
  }
  render() {
  return (
    <div className='todo-app container'>
      <h1 className='center orange-text deep-purple darken-3'>what-Todo's</h1>
      <div className='purple-text'><Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /></div>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  )
}
}

export default App



