import {Notification} from "rxjs/internal/Notification";
import {notificationToMarble} from "./notificationConversion";

describe('Single test messages (single marble)', () => {
    const mappingEmpty = {};

    it('should show completion', () => {
        expect(notificationToMarble(Notification.createComplete(), mappingEmpty)).toBe('|');
    });

    it('should show error', () => {
        expect(notificationToMarble(Notification.createError('oops'), mappingEmpty)).toBe('#');
    });


    it('should show real result', () => {
        const mapping = {
            true: 't',
            false: 'f',
        }
        expect(notificationToMarble(Notification.createNext(true), mapping)).toBe('t');
    });

    it('should show "?" when mapping is oncomplete', () => {
        expect(notificationToMarble(Notification.createNext(true), mappingEmpty)).toBe('?');
    });

    it('should show empty result', () => {
        const mapping = {
            // @ts-ignore
            [undefined]: 'u',
        }
        expect(notificationToMarble(Notification.createNext(undefined), mapping)).toBe('u');
    });
});