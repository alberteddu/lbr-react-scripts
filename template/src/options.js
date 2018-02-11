import PropTypes from 'prop-types';

// This object contains the options used in development.
// It will be used when running the application locally
// and in staging. When adding a required option, the
// related development values should be added here.
export const getDevelopmentOptions = () => ({});

export const getStagingOptions = () => ({});

// This object contains all the options that the component
// supports. PropTypes is used here as its API is clean and stable.
// When an option is required, we specify it here. When it is not,
// the default value should be added to the defaultOptions array below.
// This object is also used by the main smart component.
// Every key here is accepted by that component as a prop and is validated
// accordingly. Also, all the options are validated when provided when
// the function `window.COMPONENT_NAME.mount` is called.
export const options = {};

// Default options
export const defaultOptions = {};

export const validateOptions = providedOptions =>
    PropTypes.checkPropTypes(options, providedOptions, 'option', process.env.REACT_APP_COMPONENT_NAME);

// DO NOT USE THIS FUNCTION DIRECTLY.
export const getOptions = (providedOptions) => {
    validateOptions(providedOptions);

    return {
        ...defaultOptions,
        ...providedOptions,
    };
};
