import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SourceOfData from '../views/SourceOfData';
import TrainTable from '../views/TrainTable';
import trainActions from '../actions/trainActions';

const mapStateToProps = state => ({
  allTrains: state.allTrains,
});

class MainContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(trainActions.getAllRequest());
  }

  render() {
    const { allTrains } = this.props;
    return (
      <Fragment>
        <TrainTable
          trains={allTrains}
        />
        <SourceOfData />
      </Fragment>
    );
  }
}

MainContainer.defaultProps = {
  allTrains: [],
  dispatch: () => {},
};

MainContainer.propTypes = {
  allTrains: PropTypes.arrayOf({}),
  dispatch: PropTypes.func,
};

export default compose(
  connect(mapStateToProps),
)(MainContainer);
