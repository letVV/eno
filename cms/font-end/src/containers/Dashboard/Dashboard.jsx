import React, { Component } from 'react';
import axios from 'axios';

// window.JSONP_CALLBACK = function(data){
//     console.log(data);
// }
class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    findAll() {
        var self = this;
        axios.get('http://localhost:3000/users/findAll')
            .then(function (response) {
                console.log(response.data.data);
                var users = response.data.data;
                self.setState({
                    users
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        // var script = document.createElement("script");
        // script.src = "http://localhost:3000/users/findAll?callback=JSONP_CALLBACK";
        // document.body.append(script);
    }
    
    componentDidMount(){
        this.findAll();
    }
    render() {
        return (
            <div>
                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>skill</th>
                                <th>age</th>
                                <th>location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (function(self){
                                    return self.state.users.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.skill}</td>
                                                <td>{item.age}</td>
                                                <td>{item.location}</td>
                                            </tr>
                                        )
                                    })
                                })(this)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Dashboard;
