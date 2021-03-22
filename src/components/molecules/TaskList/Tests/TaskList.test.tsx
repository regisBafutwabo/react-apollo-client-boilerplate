import React from "react";
import ReactDOM from "react-dom";
import { WithPinnedTasks } from "../../../../stories/4-TaskList.stories";

it("renders archived Tasks at the start of the list", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WithPinnedTasks />, div);

    const lastTaskInput = div.querySelector(
        '.list-item:nth-child(1) label span:nth-child(1) input[id="eat"] ',
    );
    expect(lastTaskInput).not.toBe(null);
    ReactDOM.unmountComponentAtNode(div);
});
