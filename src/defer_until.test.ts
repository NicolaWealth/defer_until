import {deferUntilFactory} from "./defer_until";
import sinon from "sinon";

describe("defer_until tests", () => {
  it("basic functionality", async () => {
    const deferralsT1 = deferUntilFactory();
    const func1 = sinon.stub();
    deferralsT1.defer(func1);
  });
});