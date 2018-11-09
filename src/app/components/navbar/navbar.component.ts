import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Location } from '../../../../node_modules/@angular/common';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    background;

  @ViewChild('changeClass') elementRef: ElementRef;
  constructor(private location:Location,private renderer: Renderer2,private router:Router){
      this.background="#FFFFFF";
   }
   
  ngOnInit(){
    var n = this.router.url.indexOf("intel");
    if(n>0)
        this.background="intel"
    else
        this.background="amd"
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.elementRef.nativeElement, 'intel');
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
