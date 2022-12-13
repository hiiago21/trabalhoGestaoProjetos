import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Contato from '../components/contato/Contato'
import Noticias from '../components/noticias/Noticias'
import Fotos from '../components/fotos/Fotos'
import Instituicao from '../components/instituicao/Instituicao'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contato' component={Contato} />
        <Route path='/news' component={Noticias} />
        <Route path='/fotos' component={Fotos} />
        <Route path='/promocao' component={Instituicao} />
        <Redirect from='*' to='/' />
    </Switch>