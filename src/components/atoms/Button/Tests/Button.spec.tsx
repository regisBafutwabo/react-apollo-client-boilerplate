import React from "react";
import { shallow } from "enzyme";
import Button from "../Button.impl";

describe("Button component", () => {
    const clickFn = jest.fn();
    it("should render if Text props is not provided", () => {
        const component = shallow(<Button Text={undefined} />);
        expect(component).toMatchSnapshot();
    });

    it("renders if Text props is provided", () => {
        const component = shallow(<Button Text="hello" />);
        expect(component).toMatchSnapshot();
    });

    it("renders if Text props is filled with a span emojis", () => {
        const component = shallow(
            <Button
                Text={
                    <span role="img" aria-label="so cool">
                        😀 😎 👍 💯
                    </span>
                }
            />,
        );
        expect(component).toMatchSnapshot();
    });

    it("should render if Text props is filled with emojis", () => {
        const component = shallow(<Button Text="😀 😎 👍 💯" />);
        expect(component).toMatchSnapshot();
    });

    it("should be clickable", () => {
        const component = shallow(<Button onClick={clickFn} Text="Login" />);

        component.find("Styled(Button)").simulate("click");

        expect(clickFn).toHaveBeenCalled();
    });
});
