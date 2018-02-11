import { getEnvironment } from 'app/functions/environment';

/**
 * Returns true if the current environment is "production".
 */
export const isProduction = () => getEnvironment() === 'production';
