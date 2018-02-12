import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName ='';
  serverCreationStatus ='No server was created';
  allowServer = false;
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() { 
    setTimeout(()=> {
      this.allowServer = true;
    },2000)
  }

  ngOnInit() {
   }
   onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
   }
}
