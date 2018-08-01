import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";
// service needs a metadata attached to 
//use another service ie to inject a service
// to this service so use @Injectable
@Injectable()
export class AccountsService{
    accounts = [
        {
          name : 'Master Account',
          status : 'active'
        },
        {
          name : 'TestAccount',
          status : 'inactive'
        },
        {
          name : 'Hidden Account',
          status : 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();
      constructor(private loggingService: LoggingService){}

      addAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});
        this.loggingService.logStatusChange(status);
      }

      updateAccount(id:number, status:string){
         this.accounts[id].status = status;
         this.loggingService.logStatusChange(status);
      }
}