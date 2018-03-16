import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
    console.log('about ng on changes.......');
  }

  ngOnInit() {
    console.log('about ng on init.......');
  }

  ngDoCheck() {
    console.log('about ng do check.......');
  }

  ngAfterContentInit() {
    console.log('about ng after content init.......');
  }

  ngAfterContentChecked() {
    console.log('about ng after content checked.......');
  }

  ngAfterViewInit() {
    console.log('about ng after view init.......');
  }

  ngAfterViewChecked() {
    console.log('about ng after view checked.......');
  }

  ngOnDestroy() {
    console.log('about ng on destory...........');
  }

}
