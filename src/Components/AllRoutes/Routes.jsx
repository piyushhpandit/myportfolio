import { Switch } from '@chakra-ui/react'
import React from 'react'
import { Route, Router } from 'react-router-dom'
import Main from '../main'
import Intro from '../Intro/Intro'
import Aboutme from '../AboutMe/Aboutme'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Contact from '../ContactMe/Contact'
import Newsletterfooter from '../Newsletter/Newsletterfooter'

const Routes = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Intro" exact component={Intro} />
      <Route path="/AboutMe" exact component={Aboutme} />
      <Route path="/Experience" exact component={Experience} />
      <Route path="/Projects" exact component={Projects} />
      <Route path="/ContactMe" exact component={Contact} />
      <Route path="/Subscribe" exact component={Newsletterfooter} />
    </Switch>
  </Router>
  )
}

export default Routes