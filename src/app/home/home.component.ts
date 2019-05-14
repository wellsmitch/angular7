import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpRequest } from '../service/service.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private Http: HttpRequest) {
  }
  jumpHandle() {
    // this.router.navigate(['/about'], {queryParams: {id: '11ss1', name: '2dd22'}})
  }
  ngOnInit() {
    const f = new FormData();
    f.append('mobile',  '18239081715');
    f.append('event', 'register');
    // {mobile: 18239081715, event : 'register'}
    this.Http.httpPost('http://zhuang.tainongnongzi.com/api/sms/send', f)
      .subscribe(
        val => {
          console.log('post请求成功', val);
        },
        error => {
          console.log('post请求失败', error);
        }
      );

    this.Http.httpGet('http://jx.xuzhixiang.top/ap/api/login.php?username=11&password=1212').subscribe(
        val => {
          console.log('get请求成功', val);
        }
      );
  }
}
