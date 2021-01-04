# RxJS test marble error - human-readable test results

RxJS Test Scheduler implementation with to create marble diagram test failure output.

# Development

Used marble [syntax from this site](https://rxjs-dev.firebaseapp.com/guide/testing/internal-marble-tests#marble-syntax).

# Usage

Install

    npm install --dev https://github.com/DreamOnward/rxjs-test-marble-error.git

or

    yarn add --dev https://github.com/DreamOnward/rxjs-test-marble-error.git

In the test do:

    const comparisonFunc = (actual: any, expected: any) => expect(actual).toEqual(expected);
    const mapping = { t: true, f: false };
    createTestScheduler(comparisonFunc, mapping).run(helpers => {
        const e1 = helpers.cold('----t-t-|', mapping);
        const expected = '----t|';

          const result = e1.pipe(first());

        helpers.expectObservable(result).toBe(expected, mapping);
    });

# Limitations

* Everything is reverse engineered from test results, so some things may not work as expected.
* Reverse mapping only works for simple types at the moment (booleans, numbers, strings, etc).
* No support for:
    * Sync groups `"()"`
    * Subscription point: `"^"`

# Improvements

Feel free to use this code or add PRs.
I probably only use this code for a short while, so I'm not planning to maintain it.

# Breadcrumbs

Used:

* rollup guide: https://github.com/rollup/rollup-starter-lib/tree/typescript 
