import React from 'react';
import UserService from '../Api/UserService';

class UserComponent extends React.Component {

    // Create the constructor by passing in any props from the parent. In this case, that is App.js
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    //  React hook for when the component is mounted on the DOM
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    // Example implementation for displaying all users stored on local server
    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.username}</td>   
                                     <td> {user.name}</td>   
                                     <td> {user.email}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent