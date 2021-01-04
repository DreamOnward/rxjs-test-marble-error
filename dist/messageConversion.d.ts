import { TestMessage } from "rxjs/internal/testing/TestMessage";
import { ReverseMapping } from "./types";
/**
 * Convert RxJS test scheduler output to a marble diagram string.
 * @param messages
 * @param mapping
 */
export declare const toMarbleString: (messages: TestMessage[], mapping: ReverseMapping) => string;
