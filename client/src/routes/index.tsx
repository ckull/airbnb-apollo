import React from 'react';
import Register from '../containers/register'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                component={Register}
            />

        </Switch>
    </BrowserRouter>
)

export default Routes