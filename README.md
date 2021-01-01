# RxJS test marble error - human-readable test results

RxJS Test Scheduler implementation with to create marble diagram test failure output.

# Development

Used marble [syntax from this site](https://rxjs-dev.firebaseapp.com/guide/testing/internal-marble-tests#marble-syntax).

# Usage



# Limitations

* Everything is reverse engineered from test results, so some things may not work as expected.
* Reverse mapping only works for simple types at the moment (booleans, numbers, strings, etc).
* No support for:
    * Sync groups `"()"`
    * Subscription point: `"^"`

# Improvements

Feel free to use this code or add PRs.
