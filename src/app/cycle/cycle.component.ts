import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {

  @Input('UserInfo') UserInfo: string;
  @Input('tip') Tip: string;

  start_time = new Date().valueOf();

  set;

  @ViewChild('ImageLoad') Image: ElementRef;

  constructor() {
    console.log(this.start_time);
  }

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
    console.log(this.Image.nativeElement.naturalWidth);
        
    this.set = setInterval(this.check.bind(this), 40);

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


  check() {
    // console.log(Image);
    //console.log(this.Image.nativeElement);
    if(this.Image.nativeElement.naturalWidth>0 || this.Image.nativeElement.naturalHeight>0){
      var diff = new Date().getTime() - this.start_time;
      clearInterval(this.set);
      console.log(diff);
    }
  }

  load(event) {
    console.log(event);
    var diff = new Date().getTime() - this.start_time;
    console.log(diff);
  }

}
