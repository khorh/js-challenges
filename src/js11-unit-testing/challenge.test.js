import * as challenge from "./js11";

/****** greet ******/
test("greet() test", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
})

/****** sumTwoNumbers ******/
describe("sumTwoNumbers tests", () => {
    test("two number inputs should return 30", () => {
        expect(challenge.sumTwoNumbers(10, 20)).toBe(30);
    });

    test("two string inputs should not return 30", () => {
        expect(challenge.sumTwoNumbers("10", "20")).not.toBe(30);
    })

    test("two undefined inputs should return NaN", () => {
        expect(challenge.sumTwoNumbers(undefined, undefined)).toBe(NaN);
    })
})

/****** checkLarger ******/
describe("checkLarger tests", () => {
    test("both number inputs are equal", () => {
       expect(challenge.checkLarger(1, 1)).toBe("Both numbers are equal");
    });

    test("first number is bigger than second number", () => {
        expect(challenge.checkLarger(10, 1)).toBe("10 is bigger than 1");
    })

    test("second number is bigger than first number", () => {
        expect(challenge.checkLarger(1, 10)).toBe("10 is bigger than 1");
    })
});

/****** filterByLength ******/

describe("filterByLength tests", () => {
    test("filtering should return a valid array", () => {
        expect(challenge.filterByLength(["matthew", "charlie", "andy"])).toMatchObject(["andy"]); // toStrictEqual for arrays and objects
    });

    test("filtering should return a valid array", () => {
        expect(challenge.filterByLength(["matt", "char", "andy"])).toMatchObject(["matt", "char", "andy"]); // toStrictEqual for arrays and objects
    });

    test("filtering should return an invalid array", () => {
        expect(challenge.filterByLength(["matthew collins", "charlie chalk", "andy friend"])).toBe("Sorry, no valid names supplied");
    })
})

/****** reduceNumbers ******/

describe("reduceNumbers tests", () => {
    test("should return number minus reducer", () => {
        expect(challenge.reduceNumbers([10, 20, 30], 1)).toMatchObject([9, 19, 29]);
    })

    test("should return 255", () => {
        expect(challenge.reduceNumbers([300, 400, 500], 1)).toMatchObject([255, 255, 255]);
    })

    test("should return 0", () => {
        expect(challenge.reduceNumbers([-100, -200, -300], 1)).toMatchObject([0, 0, 0]);
    })
})