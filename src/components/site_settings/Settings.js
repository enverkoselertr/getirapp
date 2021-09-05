import './Settings.css'
import React, { Component } from 'react'
import Sorting from './components/sorting'
import Brands from './components/Brands'
import Tags from './components/Tags'

class Settings extends Component {
    render() {
        return (
            <div>
                <Sorting />
                <Brands />
                <Tags />
            </div>
        )
    }
}

export default Settings;