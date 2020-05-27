// TODO: write your code here
import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
let bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

class Team {
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
  [Symbol.iterator](){
    let i = 0;
    let members = this.members;
    return {
      next(){
        if (i < members.length) {
          return { value: members[i++],done: false };
        } else {
          return { done: true }
        }
      }
    }
  }
}
