'use strict';

var grunt = require('grunt');
var helpers = require('../tasks/util/helpers.js');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.devbliss = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    testGruntTarget: function (test) {

        test.expect(2);
        var actual = helpers.gruntTarget("test");
        var expected = ":test";
        test.equal(actual, expected, 'A : will be appended at the beginning of the given string.');

        var actual = helpers.gruntTarget(null);
        var expected = "";
        test.equal(actual, expected, 'If the given string is null, an empty string will be returned.');

        test.done();
    },

    testMergeJson: function (test) {

        var object1 = {
            name1: {
                cutout: {
                    cutout1: "cutout1"
                },
                name12: {
                    name121: "name121"
                },
                name13: {
                    name131: "name131"
                }
            }
        };

        var object2 = {
            name1: {
                cutout: {
                    cutout2: "cutout2"
                },
                name12: {
                    name122: "name122"
                },
                name13: {
                    name131: "nameXXX"
                }
            }
        };

        var objectResult1 = {
            name1: {
                cutout: {
                    cutout1: "cutout1"
                },
                name12: {
                    name121: "name121",
                    name122: "name122"
                },
                name13: {
                    name131: "name131"
                }
            }
        };

        var objectResult2 = {
            name1: {
                cutout: {
                    cutout1: "cutout1",
                    cutout2: "cutout2"
                },
                name12: {
                    name122: "name122",
                    name121: "name121"
                },
                name13: {
                    name131: "name131"
                }
            }
        };

        test.expect(2);
        var actual = helpers.mergeJSON(object1, object2, "cutout");
        test.deepEqual(actual, objectResult1, 'The merged result must be the combination of the two input configs using a cutout.');

        actual = helpers.mergeJSON(object1, object2, null);
        test.deepEqual(actual, objectResult2, 'The merged result must be the combination of the two input configs without a cutout.');

        test.done();
    }
};
