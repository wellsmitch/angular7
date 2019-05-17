import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
@Component({
  selector: 'app-child1',
  templateUrl: './child.component.html',
  // styleUrls: ['./app.component.css']
})
export class ChildComponent implements OnInit {
  private info = '';
  private newName = 'newName';
  @Output() NameChanged = new EventEmitter();
  @Input()
  set name(name: string) {
    this.info = name + '改变后的数据';
  }
  // noinspection JSAnnotator
  get name() {
    return this.info ;
  }// 父组件向子组件船只需要@input
  ngOnInit() {
    console.log(this, this.info, 78945); // 'user1'
  }
  emitNewName() {
    this.NameChanged.emit(this.newName);
  }
}
