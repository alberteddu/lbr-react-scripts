import {
    UPDATE_OPTIONS,
} from 'app/actions';

const defaultState = {
    options: {},
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.options,
                },
            };
        default:
            return state;
    }
};
