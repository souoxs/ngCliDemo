import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
    console.log('Contact - ngOnChanges');
  }

  ngOnInit() {
    console.log('Contact - ngOnInit');
  }

  ngDoCheck() {
    console.log('Contact - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Contact - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Contact - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Contact - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Contact - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Contact - ngOnDestroy');
  }

}
