import React from 'react';
import { Provider } from 'react-redux';
import storeConfig from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Components
import Home from './components/User/Home';
import HomeContainer from './components/User/HomePage';

import Admin from './components/Admin/Admin';

import AdminContainer from './components/Admin/Pages/AdminPage';
import ProjectsContainer from './components/Admin/Pages/ProjectsPage';
import SectionsContainer from './components/Admin/Pages/SectionsPage';

import AddProjectContainer from './components/Admin/AddProject';
import AddSectionContainer from './components/Admin/AddSection';

const store = storeConfig();

// http://razvanmiclau.com/ => Home -> HomeContainer
// http://razvanmiclau.com/admin => Admin -> AdminContainer
// http://razvanmiclau.com/admin/projects => ProjectsContainer
// http://razvanmiclau.com/admin/projects/add => AddProjectContainer
// http://razvanmiclau.com/admin/sections => SectionsContainer
// http://razvanmiclau.com/admin/sections/add AddSectionContainer


const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRoute component={HomeContainer} />
      </Route>
      <Route path="/admin" component={Admin}>
        <IndexRoute component={AdminContainer} />
        <Route path="projects" component={ProjectsContainer}>
          <Route path="add" component={AddProjectContainer} />
        </Route>
        <Route path="sections" component={SectionsContainer}>
          <Route path="add" component={AddSectionContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;
