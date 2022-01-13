import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl-var',
  templateUrl: './tpl-var.component.html',
  styleUrls: ['./tpl-var.component.less']
})
export class TplVarComponent implements OnInit {
  size=16
  constructor() { }

  ngOnInit(): void {
  }
  callPhone(d){
    console.log(d)
  }
}
