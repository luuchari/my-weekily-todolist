import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private weekilytodoList: any[] = [];

  constructor() { }

  addlist(shopping: string, budget: number, ) {
    const newlist = {
      id: Date.now(),
      shopping,
      budget,
      
    };
    this.weekilytodoList.push(newlist);
    return newlist.id;
  }
  getlist() {
    return[...this.weekilytodoList];
  }
  removeList(listId: number){
    this.weekilytodoList = this.weekilytodoList.filter(list => list.id !== listId);

  }
}
