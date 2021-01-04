import { TestScheduler } from "rxjs/testing";
import { TestMessage } from "rxjs/internal/testing/TestMessage";
/**
 * Type object as TestMessage and error if it is not
 * @param value
 */
export declare const convertToTestMessage: (value: object) => TestMessage;
/**
 * TestScheduler creator that also formats errors as marble diagram comparisons.
 * @note Uses Jest comparison functions syntax
 * @param mapping
 */
export declare const createTestScheduler: (mapping?: {}) => TestScheduler;
