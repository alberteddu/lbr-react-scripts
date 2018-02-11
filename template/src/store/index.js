import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { isDevelopment, isProduction } from 'app/functions/environment';
import rootReducer from './reducers';

const enhancers = [];
const middleware = [
    thunk,
];

if (isDevelopment()) {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

export const getStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancers,
    );

    if (!isProduction()) {
        if (module.hot) {
            module.hot.accept('./reducers', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    return store;
};
