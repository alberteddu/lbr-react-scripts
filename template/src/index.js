import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { isStaging } from 'app/functions/environment';
import { getStore } from 'app/store';
import { WithData } from 'app/containers/WithData';
import { Application } from 'app/containers/Application';
import { getOptions, getStagingOptions, getDevelopmentOptions } from 'app/options';

const target = document.getElementById('app');

const mount = (providedOptions = {}) => {
    const options = getOptions(providedOptions);
    const store = getStore({
        general: {
            options,
        },
    });

    render(
        <Provider store={store}>
            <WithData {...options}>
                <Application />
            </WithData>
        </Provider>,
        target,
    );

    // If HMR is enabled, we rerender the application
    // if anything has changed.
    if (module.hot) {
        module.hot.accept(['./containers/Application'], () => {
            const NextComponent = require('./containers/Application').Application; // eslint-disable-line global-require

            render(
                <Provider store={store}>
                    <WithData {...options}>
                        <NextComponent />
                    </WithData>
                </Provider>,
                target,
            );
        });
    }
};

mount(isStaging() ? getStagingOptions() : getDevelopmentOptions());
