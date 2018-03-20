import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('Index - ngDoCheck');
  }

  @ViewChild('title') Title: ElementRef;

  Toggle() {
    let a = Math.random() * 10 + 'red';
    this.Title.nativeElement.className = a;

    console.log(this.router.url);


    this.router.events.subscribe(e => {
      // console.log(e);
      // console.log(e.__proto__.constructor.name);
      if (e instanceof RouterEvent) {
        // console.log(e.id, e.url);
      }
    });

    this.router.navigate(['contact']);

  }

  

  

  



}
