import { Component } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hubConnection: HubConnection;
  name = '';
  message = '';
  users: User[] ;

  public sendMessage(): void {
    this.hubConnection
      .invoke('sendToAll', this.name, this.message)
      .catch(err => console.error(err));
  }

  ngOnInit() {
  

    this.hubConnection = new HubConnection('http://localhost:5000/chat');

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

      this.hubConnection.on('sendToAll', (name: string, receivedMessage: string) => {
        name = this.name;
        receivedMessage= this.message;
        this.users.push(new User(name, receivedMessage));
      });

    }
}
