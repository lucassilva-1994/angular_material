import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  loading = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/skills')
    .subscribe((ret: Array<any>) => this.cards = ret, 
    error => { console.log(error)}, 
    () => this.loading = false);
  }

}
