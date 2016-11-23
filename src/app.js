import {AddShit} from './addShit'

export class App {
  constructor() {
    this.heading = 'Add shit that needs to be done'
    this.message = 'Hello World!'
    this.addStuff = []
    this.addShitDesc = ''
  }

  addShit() {
    if(this.addShitDesc) {
      this.addStuff.push(new AddShit(this.addShitDesc))
      this.addShitDesc = ''
    }
  }

  removeShit(shit) {
    let index = this.addStuff.indexOf(shit)
    if (index !== -1) {
      this.addStuff.splice(index,1)
    }
  }
}
