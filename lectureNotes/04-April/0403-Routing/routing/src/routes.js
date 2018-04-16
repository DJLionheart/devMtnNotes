import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Colors from './Components/Colors';
import Results from './Components/Results'
export default (
    <Switch>
        <Route exact path='/' component={ Colors }/>
        <Route path='/results/:color' component={ Results }/>
      {/* <Route exact path="/" render={ () => <FirstRoute /> } />
          <Route path="/second" component={ SecondRoute } />
          <Route path="/third" render={ () => <ThirdRoute /> } /> */}
    </Switch>
)