import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  analyses: Array<{ image: string, name: string, id: string }>;

  constructor(public http: Http) {

    this.http
      .get('./assets/analyses/analyses.json')
      .map((res: Response) => res.json()).subscribe(
      (res: Array<{ image: string, name: string, id: string }>) => {
        this.analyses = res;
        console.log(this.analyses)
      },
      (error) => console.log(error)
      );
  }

  ngOnInit() {
  }

}
