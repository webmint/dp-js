class Database {
  static instance = null;
  static getInstance() {
    if (this.instance === null) {
      this.instance = new Database();
    }
    return this.instance
  }
  
  constructor() {
    this.queryArgument = '';
  }
  
  query(query) {
    this.queryArgument = query;
  }
};

module.exports = Database;
