import { Component,OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers:[AccountsService] can add instance at the highest hierarchy ie appModule
})
export class AppComponent {
  accounts:{name:string, status:string}[] = [];

  constructor(private accountsService: AccountsService){

  }
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
