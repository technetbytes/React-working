import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Todo extends Component {
    delete(e) {
        e.preventDefault();
        console.log(this.props.match.params.id);
        axios.delete('http://localhost:4000/todos/delete/5c63b6373a4b143e9ae70140')
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }
    render() {
        return (
            <tr>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                <td>
                    <Link to={"/edit/" + this.props.todo._id}>Edit</Link>
                    &nbsp;
<Link to="#" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete() }}>
                        
                    Delete



                    </Link>
                </td>
            </tr>
        )
    }
}


