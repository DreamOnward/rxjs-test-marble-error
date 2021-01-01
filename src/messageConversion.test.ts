import {toMarbleString} from "./messageConversion";
import {Notification} from "rxjs/internal/Notification";

describe('RxJS test results', () => {
    const mappingBool = {
        true: 't',
        false: 'f',
    }

    it('should handle basic case', () => {
        const messages = [
            {
                frame: 0,
                notification: Notification.createNext(false),
            },
            {
                frame: 1,
                notification: Notification.createComplete(),
            }
        ];
        expect(toMarbleString(messages, mappingBool)).toBe('f|');
    });

    it('should pad with "-"', () => {
        const messages = [
            {
                frame: 4,
                notification: Notification.createNext(true),
            },
            {
                frame: 5,
                notification: Notification.createComplete(),
            }
        ];
        expect(toMarbleString(messages, mappingBool)).toBe('----t|');
    });

    it('should handle missing mapping', () => {
        const messages = [
            {
                frame: 4,
                notification: Notification.createNext({ not: 'mapped' }),
            },
            {
                frame: 5,
                notification: Notification.createComplete(),
            }
        ];
        expect(toMarbleString(messages, mappingBool)).toBe('----?|');
    });

});