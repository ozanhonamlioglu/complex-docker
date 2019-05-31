import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class OtherPage extends Component {
    render() {
        return (
            <div>
                I am some other page!
                <Link to="/" >Go back button</Link>
            </div>
        )
    }
}
