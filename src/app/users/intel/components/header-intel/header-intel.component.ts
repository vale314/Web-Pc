import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-intel',
  templateUrl: './header-intel.component.html',
  styleUrls: ['./header-intel.component.css']
})
export class HeaderIntelComponent implements OnInit {

  private logoB:boolean = true;
  private image:boolean = true;

  ngOnInit(){
    this.imgW();
    this.logoH()
  }

  imgW(){
    if (window.outerWidth > 768) {
      return this.image = true;
    }else{
      return this.image = false;

    }
  }

  logoH(){
    if (window.outerHeight > 630) {
      return this.logoB = true;
    }else{
      return this.logoB = false;
    }
  }

}
