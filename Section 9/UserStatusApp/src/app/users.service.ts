import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";
@Injectable()
export class UserService{
    activeUsers = ['Max','Anna'];
    inactiveUsers = ['Chris','Manu'];
   
    constructor(private counterService : CounterService){}
    setToStatus(id : number, toActive:boolean)
    {
        if(toActive){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.incrementCounter(false);
        }
        else{
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id,1);
            this.counterService.incrementCounter(true);
        }
    }
}