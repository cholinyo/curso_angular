<<<<<<< HEAD

import { Component } from '@angular/core';


@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
 
})
 
export class HeaderComponent { 

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> f5e2debf4256a80cb284177d9403b2f5a16da621
