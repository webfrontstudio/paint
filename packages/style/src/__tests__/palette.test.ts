import {palette} from "..";


describe("palette", () => {
	test("should match snapshot", () => {
		expect(palette).toMatchSnapshot();
	});
});
