import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
@Component({
  selector: 'app-ch',
  templateUrl: './child2.component.html',
  // styleUrls: ['./app.component.css']
})
export class Child2Component implements OnInit {
  private info = '';
  // @Input() name: string; // 父组件向子组件船只需要@input
  @Input()
  set msg(msg: string) {
    this.info = msg;
  }
  // noinspection JSAnnotator
  get msg() {
    return this.info;
  }
  ngOnInit() {
  }
}
