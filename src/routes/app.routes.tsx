import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard  from '../pages/Dashboard';
import List from '../pages/List';
import Students from '../pages/Students';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/list/:type" exact component={List} />
            <Route path="/students" exact component={Students} />
        </Switch>
    </Layout>
);

export default AppRoutes;