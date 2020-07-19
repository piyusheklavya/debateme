import React, { Component } from 'react'
import './Login.css'
export class Login extends Component {

    login(){
        alert('clicked')

    }

    render() {
        return (
            <div className="container">
                <div className="introText">
                    <p>Debate me! is a one-on-one anonymous debate platform. List topics and your opening speech on topics you are ready to debate about.
                       Look up random listed people, read their brief view and challenge them on it, in a one-on-one chat.<br/>
                
                    </p>
                    <p className="LoginByTEXT">SignUp | Login using...</p>
                </div>
                <button className="googleBTN" onClick={this.login} >Google</button>
            </div>
        )
    }
}

export default Login
