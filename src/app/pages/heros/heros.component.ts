import { Component, OnInit } from '@angular/core';
import {HeroArg,Hero} from '../../configs/types';
import HEROS from '../../configs/heros'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  searchParams:HeroArg={
    name:'',
    job:'',
    sort:'desc'
  }
  heros: Hero[] = HEROS
  constructor() {
    console.log(this.heros)
  }

  ngOnInit(): void {
  }
  search(){
    console.log(this.searchParams);
  }
}
