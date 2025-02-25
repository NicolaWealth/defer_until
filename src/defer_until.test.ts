import {deferUntilFactory} from "./defer_until";
import sinon from "sinon";

describe("defer_until tests", () => {

  it("later empties deferrals", async () => {
    const deferralsT2 = deferUntilFactory();
    const func1 = sinon.stub();
    const func2 = sinon.stub();
    deferralsT2.defer(func1);
    deferralsT2.defer(func2);
    deferralsT2.later();
    deferralsT2.later();
    sinon.assert.calledOnce(func1);
    sinon.assert.calledOnce(func2);
  });
});