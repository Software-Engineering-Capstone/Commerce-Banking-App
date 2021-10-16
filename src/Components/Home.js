import React, { Component } from 'react';

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render()
    {
        return(
            <div>
                <h1>You are logged in</h1>
                <button>Logout</button>
            </div>
        )
    }
}
export default Home;