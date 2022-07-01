/* eslint-disable */
import PropTypes from "prop-types";
import SLabel from "./style";

export default function Label(props) {
  return (
    <SLabel>
      <p>{props.name}</p>
    </SLabel>
  );
}

Label.prototype = {
  name: PropTypes.string.isRequired,
};
