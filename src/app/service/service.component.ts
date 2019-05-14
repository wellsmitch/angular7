import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequest {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     // Authorization : 'mu-auth-token',
    })
      // .set('Content-Type', 'formdata')
};
  constructor(private httpClient: HttpClient) {
  }
  // public httpPost(reqUrl: string, reqBody): Observable<any> {
  public httpPost(reqUrl: string, reqBody) {
    // 后台接收数据 需要 @RequestBody 标签
   return this.httpClient.post(reqUrl, reqBody, this.httpOptions);
  }

  public httpGet(reqUrl) {
    return this.httpClient.get(reqUrl, {});
  }

  show(): string {
    return '我是 HttpRequestService 调用我干嘛';
  }
}
