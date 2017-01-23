import {connect} from "react-redux";
import ShipDetail from "./ship_detail";

const mapStateToProps = state => ({
  shipDetail: state.shipDetail.ship
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipDetail);
