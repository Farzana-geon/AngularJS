import { Component,Output, EventEmitter ,Input} from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _electronService : ElectronService){}
  //@Output() CreatAlert =  new EventEmitter<string>()
  @Output() CreateNotification =  new EventEmitter<string>()
  message: string ='';
  //@Input() alert :string;
 // alertMsg : string ='';

  //launchWindow()
  //{
    //const msg = 'AlertCreated';
    //this.CreatAlert.emit(msg);
    //console.log(msg);
     /*const notifier = require('node-notifier');
     notifier.notify('Message');*/
     
    //this._electronService.shell.openExternal('https://coursetro.com/posts/code/125/Angular-5-Electron-Tutorial');
    Notify()
    {
      this.CreateNotification.emit("AlertCreated!")
      console.log("AlertCreated!");
    }
    PrintMsg(msg:string)
    {
      console.log("AfterEventFired "+msg );
      this.message = msg;
    }
}
  


