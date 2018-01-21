import { connect } from "react-redux";
import SubmitButton from "../components/SubmitButton";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({turktool: state}, ownProps) => {
  const committedBoxes = state.committedBoxes.present;
  return {
    hasDrawnBox: Object.keys(committedBoxes).length > 0,
    boundingBoxes: committedBoxes,
    imageHeight: state.turktool.imageProps.height,
    imageWidth: state.turktool.imageProps.width
  };
};

const SubmitButtonContainer = withRouter(
  connect(mapStateToProps)(SubmitButton)
);

export default SubmitButtonContainer;
