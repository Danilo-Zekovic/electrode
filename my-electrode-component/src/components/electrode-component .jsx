import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/electrode-component .css";
import messages from "../lang/default-messages";

export default class ElectrodeComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

ElectrodeComponent.displayName = "ElectrodeComponent";

ElectrodeComponent.propTypes = {};

ElectrodeComponent.defaultProps = {};
