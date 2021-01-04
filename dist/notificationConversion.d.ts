import { Notification } from "rxjs/internal/Notification";
import { ReverseMapping } from "./types";
/**
 * Convert single test schedule frame result to marble representation.
 * @param message
 * @param mapping
 */
export declare const notificationToMarble: <T>(note: Notification<T>, mapping: ReverseMapping) => string;
