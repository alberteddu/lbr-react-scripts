import { getEnvironment } from 'app/functions/environment';

/**
 * Returns true if the current environment is "development".
 */
export const isDevelopment = () => getEnvironment() === 'development';
