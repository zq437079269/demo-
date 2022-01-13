import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-tongxin',
  templateUrl: './text-tongxin.component.html',
  styleUrls: ['./text-tongxin.component.less']
})
export class TextTongxinComponent implements OnInit {
  fruit: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  show(){
    console.log(this.fruit)
  }
}
