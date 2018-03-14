import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  @Input('UserInfo') UserInfo: string;
  @Input('tip') Tip: string;

  constructor() { }

  ngOnChanges() {
    console.log('Cycle - ngOnChanges');
  }

  ngOnInit() {
    console.log('Cycle - ngOnInit');
  }

  ngDoCheck() {
    console.log('Cycle - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Cycle - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Cycle - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Cycle - ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('Cycle - ngOnDestroy');
  }

}
