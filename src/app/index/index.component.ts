import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('Index - ngDoCheck');
  }

  @ViewChild('title') Title: ElementRef;

  Toggle() {
    let a = Math.random() * 10 + 'red';
    this.Title.nativeElement.className = a;
  }

}
