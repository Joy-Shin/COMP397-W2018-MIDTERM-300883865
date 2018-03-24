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
    var Island3 = /** @class */ (function (_super) {
        __extends(Island3, _super);
        // private instance variables
        // public properties
        // Constructor
        function Island3() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island3.prototype.Start = function () {
            this._dx = 5;
            this.Reset();
        };
        // updates the game object every frame
        Island3.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Island3.prototype.Reset = function () {
            this.x = 0;
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        };
        // move the object to some new location
        Island3.prototype.Move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Island3.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x > 640 + this.halfWidth) {
                this.Reset();
            }
        };
        return Island3;
    }(objects.GameObject));
    objects.Island3 = Island3;
})(objects || (objects = {}));
//# sourceMappingURL=island3.js.map