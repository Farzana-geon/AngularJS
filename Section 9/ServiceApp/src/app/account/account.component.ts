import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers: [LoggingService] add this to appmodule as appmodule is the highest hierarchy for service injection
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
  private accountsService: AccountsService) {

  }

  ngOnInit() {
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

}
