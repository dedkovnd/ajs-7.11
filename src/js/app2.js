let bowmanTwo = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

class TeamTwo {
  constructor() {
    this.members = [];
  }
  addChar(char) {
    this.members.push(char)
  }
  addAllChar(...chars) {
    for (let char of chars){
      this.members.push(char)
    }
  }
  *[Symbol.iterator](){
    for (let i in this.members) {
      yield this.members[i]
    }
  }
}
