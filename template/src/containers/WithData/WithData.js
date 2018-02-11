import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { updateOptions } from 'app/actions';
import { options as optionsDefinition, defaultOptions } from 'app/options';
import { optionsSelector } from 'app/store/selectors';
import isEqual from 'lodash/isEqual';

const DumbWithData = ({ children }) => children;

const withLifecycle = lifecycle({
    async fetchData(props) {
        const { dispatch, ...rest } = props;
        const options = Object.keys(optionsDefinition).reduce((previous, current) => ({
            ...previous,
            [current]: (current in rest) ? rest[current] : defaultOptions[current],
        }), {});

        const oldOptions = Object.keys(optionsDefinition).reduce((accumulator, optionKey) => ({
            ...accumulator,
            [optionKey]: props[optionKey],
        }), {});

        if (!Object.keys(this.props.options).length || !isEqual(options, oldOptions)) {
            dispatch(updateOptions(options));
        }
    },

    componentDidMount() {
        this.fetchData(this.props);
    },

    componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps.options, this.props.options)) {
            this.fetchData({
                ...nextProps,
                ...nextProps.options,
            });
        }
    },
});

const mapStateToProps = state => ({
    options: optionsSelector(state),
});

export const WithData = compose(
    connect(mapStateToProps),
    withLifecycle,
)(DumbWithData);

WithData.propTypes = optionsDefinition;
WithData.defaultProps = defaultOptions;
