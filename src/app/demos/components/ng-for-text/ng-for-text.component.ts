import { Component, OnInit } from '@angular/core';
const Heros = [
  {
    id: 'hero_0',
    name: '盖伦'
  },
  {
    id: 'hero_1',
    name: '赵信'
  },
  {
    id: 'hero_2',
    name: '嘉文'
  },
  {
    id: 'hero_3',
    name: '易大师'
  },
  {
    id: 'hero_3',
    name: '泰达米尔'
  }
];
//接口 约束变了类型
interface Hero {
  id: string;
  name: string;
}
@Component({
  selector: 'app-ng-for-text',
  templateUrl: './ng-for-text.component.html',
  styleUrls: ['./ng-for-text.component.less']
})
export class NgForTextComponent implements OnInit {
  heros: Hero[] = Heros;
  value: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.heros.push({
      id:'hero'+Date.now(),
      name:this.value
    })
  }
  reset() {
    this.heros = [
      {
        id: 'hero_4',
        name: '盖伦4'
      },
      {
        id: 'hero_5',
        name: '赵信5'
      },
      {
        id: 'hero_2',
        name: '嘉文'
      },
      {
        id: 'hero_6',
        name: '易大师6'
      },
      {
        id: 'hero_7',
        name: '泰达米尔7'
      }
    ];
  }
  trackByHero(hero:Hero): string{
    return hero.id
  }
}
