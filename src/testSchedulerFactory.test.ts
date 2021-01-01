import {Notification} from "rxjs/internal/Notification";
import {convertToTestMessage} from "./testSchedulerFactory";

describe('test message conversion', () => {
    it('should detect and type test message objects', () => {
        const testMessage = { frame: 2, notification: Notification.createNext(false)};
        expect(convertToTestMessage(testMessage)).toBe(testMessage);
    });

    it('should not work on none test message object', () => {
       expect(
           () => convertToTestMessage({ abc: 'xyz'})
       ).toThrowError('value is not a TestMessage:');
    });
});