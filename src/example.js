"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.sync = function () {
        return "sync";
    };
    Example.prototype.asyncCallback = function (cb) {
        setTimeout(function () {
            cb("asyncCallback");
        }, 200);
    };
    Example.prototype.asyncPromise = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("asyncPromise");
            }, 50);
        });
    };
    return Example;
}());
exports.Example = Example;
console.log("dupa");
//# sourceMappingURL=example.js.map