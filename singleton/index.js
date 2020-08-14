const Database = require('./Database');

class Application {
  main() {
    const foo = Database.getInstance();
    foo.query('a');
    console.log(foo);
    const bar = Database.getInstance();
    bar.query('b');
    console.log(foo);
    console.log(bar);
  }
}

const app = new Application();
app.main();
