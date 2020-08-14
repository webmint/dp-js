const Rectangle = require('./Rectangle');
const Circle = require('./Circle');
const source = {
  x: 0,
  y: 0,
  color: 'red',
  width: 20,
  height: 30,
  radius: 2,
}
const r1 = new Rectangle(source);
const c1 = new Circle(source);

class Application {
  constructor() {
    this.shapes = [];
    this.shapesCopy = [];

    const circle = new Circle(source);
    const rectangle = new Rectangle(source);
    this.shapes.push(circle);
    this.shapes.push(rectangle);
  }
  
  businessLogic() {
    this.shapes.forEach((s) => {
      this.shapesCopy.push(s.clone());
    })
    this.shapesCopy.forEach(sc => sc.x = 10);
  }
}

const app = new Application();
app.businessLogic();
console.log(app);

