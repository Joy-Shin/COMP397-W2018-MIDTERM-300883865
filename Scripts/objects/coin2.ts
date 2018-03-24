module objects {
    export class Coin2 extends objects.GameObject {
        // private instance variables

        // public properties

        // constructors
        constructor() {
            super("coin");
            this.Start();
        }

        // private methods

        // public methods
        public Start(): void {

        }

        public Update(): void {
            this.CheckBounds();
        }

        public CheckBounds(): void {
            //      if(this.y > (480 + this.height)) {
            if (this.x <= 0 - this.halfWidth) {
                this.alpha = 1;
            }
        }
    }
}
