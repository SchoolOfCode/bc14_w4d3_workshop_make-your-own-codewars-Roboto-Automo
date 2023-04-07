//👉 Write your tests below here:

import {expect, jest, test} from '@jest/globals';

import { calculateUKIncomeAfterTax } from './main';

//named tests, actual and expected 
test("Test for gross income highest rate £500000", ()=> {
    const actual = calculateUKIncomeAfterTax(500000)
    const expected = "£293825"
    expect(actual).toBe(expected) } )

test("Test for gross income higher rate £60000", ()=> {
    const actual = calculateUKIncomeAfterTax(60000)
    const expected = "£48568"
    expect(actual).toBe(expected) } )

test("Test for gross income basic rate £25000", ()=> {
    const actual = calculateUKIncomeAfterTax(25000)
    const expected = "£22514"
    expect(actual).toBe(expected) } )

test("Test for gross income personal allowance £11000", ()=> {
    const actual = calculateUKIncomeAfterTax(11000)
    const expected = "£11000"
    expect(actual).toBe(expected) } )

test("Test for gross income decimal £60000.2485", ()=> {
    const actual = calculateUKIncomeAfterTax(60000.2485)
    const expected = "£48569"
    expect(actual).toBe(expected) } )

test("Test for negative number", ()=> {
    const actual = calculateUKIncomeAfterTax(-500)
    const expected = "£-500"
    expect(actual).toBe(expected) } )

test("Test for negative number decimal low", ()=> {
    const actual = calculateUKIncomeAfterTax(-500.23240)
    const expected = "£-500"
    expect(actual).toBe(expected) } )

 test("Test for negative number decimal high", ()=> {
    const actual = calculateUKIncomeAfterTax(-500.93240)
    const expected = "£-500"
    expect(actual).toBe(expected) } )

test("Test for zero income", ()=> {
    const actual = calculateUKIncomeAfterTax(0)
    const expected = "£0"
    expect(actual).toBe(expected) } )

test("numerous tests", ()=> {
//numerous tests can be written independently wihtin a test in jest as below 
expect(calculateUKIncomeAfterTax(0)).toBe("£0");
expect(calculateUKIncomeAfterTax(5000)).toBe("£5000");
})
