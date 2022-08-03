import './App.css'
import React, { useState } from 'react'
import { BrowserRouter } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, {data} from '../data/DataContext'

const App = props => {
    const [state, setState] = useState(data)
    return (
        <DataContext.Provider value={{state, setState}} >
            <div className="App">
                <BrowserRouter>
                    <Menu />
                    <Content />
                </BrowserRouter>
            </div>
        </DataContext.Provider>
    )
}

export default App