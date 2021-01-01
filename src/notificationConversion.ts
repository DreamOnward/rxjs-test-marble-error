import {Notification} from "rxjs/internal/Notification";
import {ReverseMapping} from "./types";

/**
 * Convert single test schedule frame result to marble representation.
 * @param message
 * @param mapping
 */
export const notificationToMarble = <T>(note: Notification<T>, mapping: ReverseMapping): string => {
    if (note.error) {
        return '#';
    }
    switch (note.kind) {
        case "N":
            // @ts-ignore Map typing is not well implemented, yet
            if (mapping.hasOwnProperty(note.value)) {
                // @ts-ignore Map typing is not well implemented, yet
                return mapping[note.value];
            } else
                return '?';
            break;
        case "E":
            return '#';
        case "C":
            return '|';
    }
}