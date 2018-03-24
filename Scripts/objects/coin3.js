var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Coin3 = /** @class */ (function (_super) {
        __extends(Coin3, _super);
        // private instance variables
        // public properties
        // constructors
        function Coin3() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Coin3.prototype.Start = function () {
        };
        Coin3.prototype.Update = function () {
            this.CheckBounds();
        };
        Coin3.prototype.CheckBounds = function () {
            if (this.x > 640 + this.halfWidth) {
                this.alpha = 1;
            }
        };
        return Coin3;
    }(objects.GameObject));
    objects.Coin3 = Coin3;
})(objects || (objects = {}));
//# sourceMappingURL=coin3.js.map