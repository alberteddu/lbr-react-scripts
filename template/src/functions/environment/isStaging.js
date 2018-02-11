import { getEnvironment } from 'app/functions/environment';

/**
 * Returns true if the current environment is "staging".
 */
export const isStaging = () => getEnvironment() === 'staging';
