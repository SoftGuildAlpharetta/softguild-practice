describe("Homework", () => {
  describe("Objects", () => {
    const object = {
      testZero: "Access top level property.",
      testOne: {
        one: "Access slightly-nested property.",
      },
      testTwo: {
        one: {
          two: {
            three: "Access deeply-nested property.",
          },
        },
      },
      testThree: () => "Access a function's return value.",
      testFour: {
        one: {
          two: {
            three: () => "Access a deeply nested function's return value.",
          },
        },
      },
      testFive: ["honk", "shoe", "Access an array's value.", "bonk"],
      testSix: {
        one: {
          two: {
            three: [
              "honk",
              "Access a deeply nested array's value.",
              "shoe",
              "bonk",
            ],
          },
        },
      },
    };
    test("Access top level property.", () => {
      // TODO: make it equal to 'Access top level property' from object and remove this comment.
      let result = "";
      expect(result).toBe("Access top level property.");
    });
    test("Access slightly-nested property.", () => {
      // TODO: make it equal the value of the three from object and remove this comment.
      let result = "";
      expect(result).toBe("Access slightly-nested property.");
    });
    test("Access deeply-nested property.", () => {
      // TODO: make it equal the value of the three from object and remove this comment.
      let result = "";
      expect(result).toBe("Access deeply-nested property.");
    });
    test("Access a functions return value.", () => {
      // TODO: make it equal the value of the three from object and remove this comment.
      let result = "";
      expect(result).toBe("Access a function's return value.");
    });
    test("Access a deeply nested function's return value.", () => {
      // TODO: make it equal the value of the three from object and remove this comment.
      let result = "";
      expect(result).toBe("Access a deeply nested function's return value.");
    });
    test("Access an array's value.", () => {
      // TODO: make it equal the value of the three from object and remove this comment.
      let result = "";
      expect(result).toBe("Access an array's value.");
    });
  });
});
