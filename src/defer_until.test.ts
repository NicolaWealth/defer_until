import {deferUntilFactory} from "./defer_until";
import sinon from "sinon";

describe("defer_until tests", () => {
  it("basic functionality", async () => {
    const deferralsT1 = deferUntilFactory();
    const func1 = sinon.stub();
    const func2 = sinon.stub();
    const func3 = sinon.stub();
    deferralsT1.defer(func1);
    deferralsT1.defer(func2);
    deferralsT1.defer(func3);
    deferralsT1.later();
    sinon.assert.calledOnce(func1);
    sinon.assert.calledOnce(func2);
    sinon.assert.calledOnce(func3);
    sinon.assert.callOrder(func3, func2, func1);
  });
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
  it("this test fails", async () => {
    const deferralsT2 = deferUntilFactory();
    const func1 = sinon.stub();
    deferralsT2.defer(func1);
    deferralsT2.later();
    sinon.assert.notCalled(func1);
  });
});