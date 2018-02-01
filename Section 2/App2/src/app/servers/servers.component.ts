import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',//  '[app-servers]' is like an element attribute,
  //selector:'.app-servers', // select by class
  selector: 'app-servers',// 'app-servers' is like an element
  template/*Url*/:/*'./servers.component.html',*/
  //'<app-server></app-server><app-server></app-server>'
  `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
