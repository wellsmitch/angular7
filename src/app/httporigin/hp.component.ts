
import {Component, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './hp.component.html',
  // styleUrls: ['./app.component.css']
})


export class HpComponent {
  public api = '';
  private httpOptions: any;
  // public api = 'http://localhost:4200/';
  constructor(public http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json;application/x-www-form-urlencoded; charset=utf-8'})
    };
    // 'http://192.168.8.245:3000/users/login', {name: 123456, pw: 123456}
    this.doGet('http://jx.xuzhixiang.top/ap/api/productlist.php').subscribe(data => {
      console.log(data, 666666);
    });
    this.doPost('http://zhuang.tainongnongzi.com/api/sms/send', { mobile: 18239081715,
      event: 'register'}).subscribe((data) => {
        console.log(data, 654321);
    });
    // this.http.get('http://jx.xuzhixiang.top/ap/api/productlist.php')
    this.http.post('http://192.168.8.245:3000/users/login', {name: 123456, pw: 123456}, this.httpOptions)
    // this.http.post('http://zhuang.tainongnongzi.com/api/sms/send',
    //   {
    //     // name: 123456, pw: 123456
    //     mobile: 18239081715,
    //     event: 'register'
    //   }, {withCredentials: true})
    //   // .map((data) => {
    //   //   console.log(data);
    //   //   return data;
    //   // })
      .subscribe(response => {
      console.log(response, 66666615);
    });
  }
  getajaxdata() {
    console.log(1234567897498);
  }
  // get请求
  doGet(url: any, params?: any) {
    return new Observable(observer => {
      this.http.get(this.api + url, params)
        .subscribe(response => {
        observer.next(response);
      }, err => {
        observer.error(err);
      });
    });
  }

  // post请求
  doPost(url: any, params?: any) {

    // params.timespan = new Date().getTime();

    // params.signature = this.encryption(params);

    return new Observable(observer => {
      this.http.post(this.api + url, params, this.httpOptions).subscribe(response => {
        observer.next(response);
      }, err => {
        observer.error(err);
      });
    });
  }
}













// export class HpComponent {
//   constructor(private http: HttpClient) {
//     // console.log(this.getajaxdata());
//   }
//   getajaxdata() {
//     // get('http://jx.xuzhixiang.top/ap/api/login.php?username=11&password=1212')
//     // http://192.168.8.245:3000/users/login , {name: 123456, pw: 123456}
//     //   .subscribe( data => {
//     //   })
//     console.log(123465);
//     this.http.post('http://192.168.8.245:3000/users/login', {name: 123456, pw: 123456})
//       .subscribe((data) => {
//         console.log(data);
//       });
//       // console.log(JSON.stringify(data));
//   }
// }
