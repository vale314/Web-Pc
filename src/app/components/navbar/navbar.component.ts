import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Location } from '../../../../node_modules/@angular/common';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    background;

  @ViewChild('changeClass') elementRef: ElementRef;
  constructor(private location:Location,private renderer: Renderer2){
      this.background="#FFFFFF";
   }
   
  ngOnInit(){
     
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
