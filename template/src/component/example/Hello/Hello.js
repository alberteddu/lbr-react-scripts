import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hello.scss';

const Hello = ({ name }) => (
    <div className={styles.hello}>Hello, {name}!</div>
);

Hello.propTypes = {
    name: PropTypes.string,
};

Hello.defaultProps = {
    name: 'World',
};

export default Hello;
