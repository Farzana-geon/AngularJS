import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  //@ViewChild(CockpitComponent) serverContentInput; can be used instead of passing the local ref serverContentInput
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName:nameInput.value,//this.newServerName, 
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    //this.serverContentInput.nativeElement.value ='test'; not recommended to access dom like this
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent : this.serverContentInput.nativeElement.value
    });
  }
}
