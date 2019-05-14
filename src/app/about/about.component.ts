import { Component, OnInit, OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {
  constructor(private activateRoute: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((data: any) => {
      console.log(data, 999);
    });
  }
  ngOnChanges(): void {
  }
}
