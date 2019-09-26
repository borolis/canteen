import {
    API_URL,
} from './config'

import React from 'react';
import { Admin, fetchUtils, Resource } from 'react-admin';
import restClient from './restClient';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import product from './product';
import lunchbox from './lunchbox';
import order from './order';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    //Tip: fetchJson() is just a shortcut for fetch().then(r => r.json()), plus a control of the HTTP response code to throw an HTTPError in case of 4xx or 5xx response.
    return fetchUtils.fetchJson(url, options);
}

const App = () => (
    <Admin
        dataProvider={restClient(
            API_URL,
            httpClient
        )}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource name="manage/orders/late" options={{ label: 'Late Orders' }} {...order} />
        <Resource name="manage/lunchboxes" options={{ label: 'Ланчбоксы' }} {...lunchbox} />
        <Resource name="manage/products" options={{ label: 'Продукты' }} {...product} />
    </Admin>
);
export default App;
