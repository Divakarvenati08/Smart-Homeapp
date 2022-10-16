import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';

const DashboardComponent = lazy(() => import('./dashboard'));
const ConnectedDevices = lazy(()=> import('./devices'));
const connectedDeviceList = lazy(()=> import('./devicedetaillist'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.ConnectedDevices} component={ConnectedDevices} />
                <Route exact path={SLUGS.connectedDeviceList} component={connectedDeviceList} />
                <Route exact path={SLUGS.ParentalControls} component={DashboardComponent} />
                <Route exact path={SLUGS.ideasTwo} component={DashboardComponent} />
                <Route exact path={SLUGS.ideasThree} component={DashboardComponent} />
                <Route exact path={SLUGS.ideas} component={DashboardComponent} />
                <Route exact path={SLUGS.contacts} component={DashboardComponent} />
                <Route exact path={SLUGS.agents} component={DashboardComponent} />
                <Route exact path={SLUGS.articles} component={DashboardComponent} />
                <Route exact path={SLUGS.settings} component={DashboardComponent} />
                <Route exact path={SLUGS.subscription} component={DashboardComponent} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
