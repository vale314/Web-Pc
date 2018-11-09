import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-amd',
  templateUrl: './header-amd.component.html',
  styleUrls: ['./header-amd.component.css']
})
export class HeaderAmdComponent implements OnInit {

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
