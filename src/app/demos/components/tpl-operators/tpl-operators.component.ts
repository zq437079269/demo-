import { Component, OnInit } from '@angular/core';
interface Hero {
  id: string;
  name: string;
}
@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styleUrls: ['./tpl-operators.component.less']
})
export class TplOperatorsComponent implements OnInit {
  title='aBc';
  obj = {
    name: 'aaa',
    time: '1980-02-25T05:00:00.000Z',
    price: '$333'
  };
  now=Date.now()
  hero: Hero;
  constructor() {
    setTimeout(() => {
      this.hero = {
        id: 'hero_00',
        name: '龙龟'
      };
    }, 2000);
  }

  ngOnInit(): void {
  }

}
