// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(length_, width_, height_){
      this.length = Number(length_);
      this.width = Number(width_);
      this.height = Number(height_);
    }

    volume(){
       return this.length*this.width*this.height;
    }
    surfaceArea(){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
    }
  }

// Test your volume and surfaceArea methods by uncommenting the logs below:
let cuboid2 = new CuboidMaker(4,5,5);
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2 {
    volume(){
       return this.width*this.width*this.width;
    }
    surfaceArea(){
        return 6*(this.width*this.width);
    }
  }

let cube = new CubeMaker(4,4,4);
console.log(cube);
console.log(cube.volume());
console.log(cube.surfaceArea());