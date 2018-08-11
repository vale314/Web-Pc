import { Component, OnInit } from '@angular/core';
import { Location } from '../../node_modules/@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private image:boolean = true;
  private logoB:boolean = true;
  constructor(private location:Location){
   }
   
  ngOnInit(){
    this.logoH();
    this.imgW();
  }

  logoH(){
    if (window.outerHeight > 630) {
      return this.logoB = true;
    }else{
      return this.logoB = false;
    }
  }
  

  imgW(){
    if (window.outerWidth > 768) {
      return this.image = true;
    }else{
      return this.image = false;

    }
  }

  

  
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if( titlee === '/home' ) {
        return true;
    }
    else {
        return false;
    }
}
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '/documentation' ) {
        return true;
    }
    else {
        return false;
    }
}
}
