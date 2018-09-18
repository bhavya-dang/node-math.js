const math = require("./app");

test("Adds 2 + 2 to be 4", () => {
    expect(math.add(2, 2)).toBe(4);
});

test("Subtract 2from 2 to be 0", () => {
    expect(math.sub(2, 2)).toBe(0);
});

test("Divides 2 by 2 to be 1", () => {
    expect(math.div(2, 2)).toBe(1);
});

test("Multiply 2 by 2 to be 4", () => {
    expect(math.prod(2, 2)).toBe(4);
});

test("Rounds down 2.99 to 2", () => {
    expect(math.ceil(2)).toBe(2);
});

test("Gives area of square with length 2", () => {
    expect(math.sqArea(2)).toBe(4);
});

test("Gives perimeter of square with length 2 to be 8", () => {
    expect(math.sqPer(2)).toBe(8);
});

test("Gives perimeter of rectangle with length and breadth each 2 to be 4", () => {
    expect(math.recPer(2, 2)).toBe(8);
});

test("Gives area of rectangle with length and breadth each 2 to be 4", () => {
    expect(math.recArea(2, 2)).toBe(4);
});

test("Gives area of circle with radius 1", () => {
    expect(math.circleArea(1)).toBe(Math.PI);
});

test("Gives perimeter of circle with radius 1", () => {
    expect(math.circlePer(1)).toBe(2 * Math.PI);
});
