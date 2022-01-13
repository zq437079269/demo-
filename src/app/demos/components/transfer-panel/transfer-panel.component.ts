import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
  interface TransferItem {
  key: string;
  value: string;
  checked?: boolean;
}
@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.less']
})
export class TransferPanelComponent implements OnInit,OnChanges {
  @Input() showList: TransferItem[] = [];
  @Input() search=false
  showTableList: TransferItem[] = [];
  selecteds: TransferItem[] = [];
  @Output() change=new EventEmitter<TransferItem[]>()
  constructor() {
    // this.setList();
  }
  ngOnChanges(changes: SimpleChanges) {
    const {showList}=changes
    if(showList){
      // console.log(showList.currentValue)
      this.showTableList=showList.currentValue.slice()
      this.selecteds=this.showList.filter(d=>d.checked);
    }
      // console.log(changes)
  }

  ngOnInit(): void {
  }
  onInput(event:Event){
    const {value}=(event.target as HTMLInputElement)
    console.log(value)
    this.showTableList=this.showList.filter(d=>d.value.includes(value))
  }
  itemClick(item:TransferItem){
    const index=this.targetIndex(item.key)
    if(index>-1){
      this.selecteds.splice(index,1)
    }else {
      this.selecteds.push(item)
    }
    this.change.emit(this.selecteds)
  }
  targetIndex(key:string):number{
    return this.selecteds.findIndex(d=>d.key===key)
  }
  // setList() {
  //   this.showList = [];
  //   const prefix = 'item' + Date.now().toString().slice(-3);
  //   for (let i = 0; i < 20; i++) {
  //     this.showList.push({
  //       key: prefix + '_' + i,
  //       value: `${prefix}${i + 1}`,
  //       checked: i % 6 === 0
  //     });
  //   }
  // }
}
