/* tslint:disable:ban-types */
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import * as t from '../../../db.json';


@Component({
  selector: 'app-list',
  templateUrl: './workterms.component.html',
  styleUrls: ['./workterms.component.scss']
})
export class WorktermsComponent implements OnInit {
  workTerms: WorkTermInformation[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.getWorkTerms().subscribe(data => {
    //   this.workTerms = data as WorkTermInformation[];
    // });
    this.workTerms = t.workTerms;
  }
}
