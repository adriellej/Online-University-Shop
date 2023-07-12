import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nocart',
  templateUrl: './nocart.page.html',
  styleUrls: ['./nocart.page.scss'],
})
export class NocartPage implements OnInit {

  constructor(private router:Router) 
  {}

  Home(){
    this.router.navigate(['/allprod'])
  }
  ngOnInit() {
  }


}
