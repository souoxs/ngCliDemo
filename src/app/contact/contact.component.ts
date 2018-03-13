import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
    console.log('contact ng on changes.......');
  }

  ngOnInit() {
    console.log('contact ng on init.......');
  }

  ngDoCheck() {
    console.log('contact ng do check.......');
  }

  ngAfterContentInit() {
    console.log('contact ng after content init.......');
  }

  ngAfterContentChecked() {
    console.log('contact ng after content checked.......');
  }

  ngAfterViewInit() {
    console.log('contact ng after view init.......');
  }

  ngOnDestroy() {
    console.log('contact ng on destory...........');
  }

}
