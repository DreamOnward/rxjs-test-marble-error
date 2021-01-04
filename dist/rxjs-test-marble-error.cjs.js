'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var testing = require('rxjs/testing');

/**
 * Convert single test schedule frame result to marble representation.
 * @param message
 * @param mapping
 */
var notificationToMarble = function (note, mapping) {
    if (note.error) {
        return '#';
    }
    switch (note.kind) {
        case "N":
            // @ts-ignore Map typing is not well implemented, yet
            if (mapping.hasOwnProperty(note.value)) {
                // @ts-ignore Map typing is not well implemented, yet
                return mapping[note.value];
            }
            else
                return '?';
        case "E":
            return '#';
        case "C":
            return '|';
    }
};

/**
 * Convert RxJS test scheduler output to a marble diagram string.
 * @param messages
 * @param mapping
 */
var toMarbleString = function (messages, mapping) {
    var frame = 0;
    var marbles = [];
    for (var index = 0; index < messages.length; ++frame) {
        if (frame < messages[index].frame)
            marbles.push('-');
        else {
            marbles.push(notificationToMarble(messages[index].notification, mapping));
            ++index;
        }
    }
    return marbles.join('');
};

/**
 * Type object as TestMessage and error if it is not
 * @param value
 */
var convertToTestMessage = function (value) {
    if (value.hasOwnProperty('frame') && value.hasOwnProperty('notification'))
        return value;
    else
        throw new Error('value is not a TestMessage: ' + value);
};
/**
 * TestScheduler creator that also formats errors as marble diagram comparisons.
 * @note Uses Jest comparison functions syntax
 * @param mapping
 */
var createTestScheduler = function (mapping) {
    if (mapping === void 0) { mapping = {}; }
    return new testing.TestScheduler(function (actual, expected) {
        if (Array.isArray(actual) && Array.isArray(expected)) {
            var actualT = actual.map(convertToTestMessage);
            var expectedT = expected.map(convertToTestMessage);
            try {
                expect(actual).toEqual(expected);
            }
            catch (e) {
                var actualDiagram = toMarbleString(actualT, mapping);
                var expectedDiagram = toMarbleString(expectedT, mapping);
                expect(actualDiagram).toEqual(expectedDiagram);
            }
        }
        else {
            expect(actual).toEqual(expected);
        }
    });
};

exports.createTestScheduler = createTestScheduler;
exports.notificationToMarble = notificationToMarble;
exports.toMarbleString = toMarbleString;
