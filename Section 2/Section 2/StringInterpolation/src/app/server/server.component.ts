import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})

export class ServerComponent
{
    serverId = 10; //server : number = 10 --can be used for specifying data type
    serverStatus ='offline'; //serverStatus : string = 'offline' --can be used for specifying data type
    getServerStatus(){
        return this.serverStatus;
    }
}

