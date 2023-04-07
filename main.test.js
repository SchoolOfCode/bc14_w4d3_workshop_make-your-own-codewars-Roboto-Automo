//👉 Write your tests below here:

import {expect, jest, test} from '@jest/globals';

import { calculateUKIncomeAfterTax } from './main';


test("Test for gross income £60000", ()=> {

const actual = calculateUKIncomeAfterTax(60000)
const expected = "£48568"
expect(actual).toBe(expected)

} )

test("Test for gross income decimal £60000.2485", ()=> {

    const actual = calculateUKIncomeAfterTax(60000.2485)
    const expected = "£48569"
    expect(actual).toBe(expected)
    
    } )