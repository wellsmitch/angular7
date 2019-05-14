 // https://www.cnblogs.com/xianxiaobo/p/9166015.html service 传参  传说很好用 目前还没有进行测试*************************************
import { Component, ViewChild, OnInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './parent.component.html',
  // styleUrls: ['./app.component.css']
})
export class ParentComponent implements OnInit {
  userName = '小明';
  aa = 'xmssss';
  // 获取子组件的属性的第二种方法 start
  @ViewChild(ChildComponent)
  childd: ChildComponent;
  // 第二种方法 end
  // 第三种方法
  constructor() {
  }
  nameChanged(newName) {
    console.log(newName);   // 'newName'
  }
  ngOnInit(): void {
    console.log(this.childd, '这是子组件的信息');
    // console.log(this.ChildComponentT, '这是子组件的信息11111111111');
  }
//  方法2
}
