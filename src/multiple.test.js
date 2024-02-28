import {multiple ,Sum}from "./multiple"

test('multiplication of 1 and 2 is 2',()=>{
    const result = multiple(1,2)
    expect(result).toBe(2)
});

test("sum of 1 and 2 is 3",()=>{
    const result = Sum(1,2);
    expect(result).toBe(3)
});

test("sum of string 1 and 2 is 3",()=>{
    const result = Sum("1","2");
    expect(result).toBe(3)
});
