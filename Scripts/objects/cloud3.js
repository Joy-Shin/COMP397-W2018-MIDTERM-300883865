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
    var Cloud3 = /** @class */ (function (_super) {
        __extends(Cloud3, _super);
        // private instance variables
        // public properties
        // Constructor
        function Cloud3() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Cloud3.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        Cloud3.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Cloud3.prototype.Reset = function () {
            this.x = 0;
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
            this._dy = Math.floor((Math.random() * 4) - 2);
            this._dx = Math.floor((Math.random() * 5) + 5);
        };
        // move the object to some new location
        Cloud3.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Cloud3.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x >= 640 + this.halfWidth) {
                this.Reset();
            }
        };
        return Cloud3;
    }(objects.GameObject));
    objects.Cloud3 = Cloud3;
})(objects || (objects = {}));
//# sourceMappingURL=cloud3.js.map