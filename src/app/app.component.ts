import { Component } from '@angular/core';
interface TransferItem {
  key: string;
  value: string;
  checked?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularTest';
  showList: TransferItem[] = [];
  search=true;
  constructor() {
    this.setList();
  }
  setList() {
    this.showList = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for (let i = 0; i < 20; i++) {
      this.showList.push({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0
      });
    }
  }
  onChange(selecteds:TransferItem[]){
    console.log(selecteds)
  }
  showInput(){
    this.search=!this.search
  }
}
