import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnChanges() {
    console.log('About - ngOnChanges');
  }

  ngOnInit() {
    console.log('About - ngOnInit');
  }

  ngDoCheck() {
    console.log('About - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('About - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('About - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('About - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('About - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('About - ngOnDestroy');
  }

}
