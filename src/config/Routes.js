import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailPost from '../components/DetailPost'
import DetailUser from '../components/DetailUser'

import Home from '../Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail-post/:id' component={DetailPost} />
            <Route exact path='/detail-user/:id' component={DetailUser} />
        </Switch>
    )
}

export default Routes
