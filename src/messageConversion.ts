import {TestMessage} from "rxjs/internal/testing/TestMessage";
import {ReverseMapping} from "./types";
import {notificationToMarble} from "./notificationConversion";

/**
 * Convert RxJS test scheduler output to a marble diagram string.
 * @param messages
 * @param mapping
 */
export const toMarbleString = (messages: TestMessage[], mapping: ReverseMapping) => {
    let frame = 0;
    const marbles: string[] = [];
    for (let index = 0; index < messages.length; ++frame) {
        if (frame < messages[index].frame)
            marbles.push('-');
        else {
            marbles.push(notificationToMarble(messages[index].notification, mapping))
            ++index;
        }
    }
    return marbles.join('');
}