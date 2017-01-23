import {connect} from 'react-redux';
import Splash from './splash';
import {requestShip, removeShip} from '../../actions/ship_actions';

const mapStateToProps = state => ({
  shipDetail: state.shipDetail
});

const mapDispatchToProps = dispatch => ({
  requestShip: (id) => dispatch(requestShip(id)),
  removeShip: () => dispatch(removeShip())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
