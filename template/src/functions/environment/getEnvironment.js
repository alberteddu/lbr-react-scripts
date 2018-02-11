/**
 * Return current environment.
 */
export const getEnvironment = () => {
    if (process.env.REACT_APP_STAGING) {
        return 'staging';
    }

    return process.env.NODE_ENV;
};
