import {TestScheduler} from "rxjs/testing";
import {TestMessage} from "rxjs/internal/testing/TestMessage";
import {toMarbleString} from "./messageConversion";

/**
 * Type object as TestMessage and error if it is not
 * @param value
 */
export const convertToTestMessage = (value: object): TestMessage => {
    if (value.hasOwnProperty('frame') && value.hasOwnProperty('notification'))
        return value as TestMessage
    else
        throw new Error('value is not a TestMessage: ' + value);
}

/**
 * TestScheduler creator that also formats errors as marble diagram comparisons.
 * @note Uses Jest comparison functions syntax
 * @param mapping
 */
export const createTestScheduler = (mapping = {}) => new TestScheduler((actual, expected) => {
    if (Array.isArray(actual) && Array.isArray(expected)) {
        const actualT: TestMessage[] = actual.map(convertToTestMessage);
        const expectedT: TestMessage[] = expected.map(convertToTestMessage);

        try {
            expect(actual).toEqual(expected);
        } catch (e) {
            const actualDiagram = toMarbleString(actualT, mapping);
            const expectedDiagram = toMarbleString(expectedT, mapping);
            expect(actualDiagram).toEqual(expectedDiagram);
        }
    } else {
        expect(actual).toEqual(expected);
    }
});
