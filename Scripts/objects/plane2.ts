module objects {
    export class Plane2 extends objects.GameObject {
      // private instance variables
  
  
      // public properties
      public planeFlash: objects.PlaneFlash;
  
      // Constructor
      constructor() {
        super("plane");
        this.Start();
      }
  
    // private methods
    private _animationEnded():void {
      if(this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        //Rotate the plane
        this.rotation = 90;
        this.planeFlash = new objects.PlaneFlash();
        this.planeFlash.alpha = 1;
        this.planeFlash.rotation = 90;
        this.planeFlash.on("animationend", this._animationEnded.bind(this), false );
  
        this.x = 50;
        this.y = 250;
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
  
      }
  
      // move the object to some new location
      public Move():void {
       // mouse controls
       // this.x = objects.Game.stage.mouseX;
  
       // keyboard controls
       if(managers.Game.keyboardManager.moveForward) {
         this.y -= 5;
       }
  
       if(managers.Game.keyboardManager.moveBackward) {
         this.y += 5;
       }
  
       this.planeFlash.x = this.x;
       this.planeFlash.y = this.y;
  
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // up boundary
        if(this.y >= 480 - this.halfWidth) {
          this.y = 480 - this.halfWidth;
        }
  
        // down boundary
        if(this.y <= this.halfWidth) {
          this.y = this.halfWidth;
        }
      }
    }
  }
  