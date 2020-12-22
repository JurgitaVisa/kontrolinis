import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
import NavBar from './navigation/Navigation';
import Admin from './admin/Admin';
import AdminForm from './admin/AdminForm';
import PlaceForm from './firstcomponent/PlaceForm';
import NotFound from './components/NotFound';

import Congratulation from './lynxhome/CardListHome';
import CongratulationDetails from './lynxhome/DetailsContainer';
import CardList from './firstcomponentcards/CardList';





class App extends Component {

  render() {
    return (
      <div className="container">

        <NavBar />
        <Switch >
          <Route exact path="/" component={Congratulation} />
          <Route path="/congratulation/:id" component={CongratulationDetails} />
          <Route exact path="/admin/:id" component={AdminForm} />
          <Route exact path="/place/:id" component={PlaceForm} />
          <Route path="/admin" component={Admin} />
          <Route path="/placecard" component={CardList} />


          <Route path='*' component={NotFound} />
          <Route component={NotFound} />

        </Switch>

      </div>

    );
  }
}

export default App;
