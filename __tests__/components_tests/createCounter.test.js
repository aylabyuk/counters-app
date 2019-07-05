import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import to_json from "enzyme-to-json";

import CreateCounter from "../../client/components/CreateCounter";

configure({ adapter: new Adapter() });

describe("<CreateCounter />", () => {
  it("Renders correctly", () => {
    const wrapper = shallow(<CreateCounter />);
    expect(to_json(wrapper)).toMatchSnapshot();
  });
});
