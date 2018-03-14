import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  showHello: boolean;

  UserInfo: string;

  constructor() {
    this.showHello = true;
    this.UserInfo = 'LiLei';
  }

  ngOnChanges() {
    console.log('Life - ngOnChanges');
  }

  ngOnInit() {
    console.log('Life - ngOnInit');
  }

  ngDoCheck() {
    console.log('Life - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Life - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Life - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Life - ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('Life - ngOnDestroy');
  }



  toggle() {
    this.showHello = !this.showHello;
  }

}
