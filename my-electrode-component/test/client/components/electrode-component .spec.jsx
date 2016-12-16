/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import ElectrodeComponent from "src/components/electrode-component ";

describe("components/electrode-component ", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<ElectrodeComponent />);
      expect(component).to.not.be.null;
    });

  });

});
