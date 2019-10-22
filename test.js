const unflattenObject = require("./unflattenObject");
const expect = require("expect");

describe("Object Unflatten function", () => {
    
    it("should unflatten the object with two keys", () => {
        expect(unflattenObject({ "a.b": 3 })).toEqual({ a: { b: 3 } });

    });
    it("should unflatten the object one key", () => {
        expect(unflattenObject({ "b": 3 })).toEqual({ b: 3 });

    });
    it("should unflatten the object three key", () => {
        expect(unflattenObject({ "b.c.c": 3 })).toEqual({ b: { c: { c: 3 } } });

    });
    it("should unflatten the object double keys", () => {
        expect(unflattenObject({ "b.c.c": 3, "b.d.c": 13 })).toEqual({ b: { c: { c: 3 } }, b: { d: { c: 13 } } });

    });
    it("should unflatten the object double keys", () => {
        expect(unflattenObject({ "b": 3, "b.d.c": 13 })).toEqual({ b: 3  , b: { d: { c: 13 } } });

    });
    it("should unflatten the object four key", () => {
        expect(unflattenObject({ "b.c": 3 })).toEqual({ b: { c: 3 } });

    });
    it("should unflatten the object four key", () => {
        expect(unflattenObject(null)).toEqual({ });

    });
});