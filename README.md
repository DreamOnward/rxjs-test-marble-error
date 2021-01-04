# RxJS test marble error - human-readable test results

RxJS Test Scheduler implementation with to create marble diagram test failure output.

# Development

Used marble [syntax from this site](https://rxjs-dev.firebaseapp.com/guide/testing/internal-marble-tests#marble-syntax).

# Usage

Install

    npm install --dev https://github.com/DreamOnward/rxjs-test-marble-error.git

or

    yarn add --dev https://github.com/DreamOnward/rxjs-test-marble-error.git




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
