import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Focus() {
    console.log('Input - Focus');
  }

  KeyPress() {
    console.log('Input - KeyPress');
  }

  KeyUp() {
    console.log('Input - KeyUp');
  }

  Blur() {
    console.log('Input - Blur');
  }

}
