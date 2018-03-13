import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit() {
  }

  goPage(url) {
    if(url !== '') {
      this.router.navigate([
        url
      ]);
    }
    else {
      this.router.navigate(['']);
    }
  }
  

}
