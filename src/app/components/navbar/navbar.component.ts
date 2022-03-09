import { Component, OnInit , HostListener} from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navAboutMe = true;
  nabSkills = false;
  navProjects = false;
  navContact = false;
  activeNav = " active";

  constructor() {}
  @HostListener("window:scroll", [])
  onWindowScroll() {

      const yPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (yPosition < 190){this.navAboutMe = true}
      else{
        this.navAboutMe = false
      }

      if (yPosition > 200) {
        this.navAboutMe = false;
        this.nabSkills = true;
      }else{this.nabSkills = false;}

      if (yPosition > 650){
          this.nabSkills = false;
          this.navProjects = true;
      }else{this.navProjects = false;}

      if (yPosition > 1100){
        this.navProjects = false;
        this.navContact = true;
      }else{this.navContact = false}

    }

  ngOnInit(): void {
    this.scrollToTopF()
  }
  
  scrollToTopF(){
    const mybutton = document.getElementById("btn-back-to-top")!;
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction () {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        mybutton.style.opacity = "0.7";
      } else {
        mybutton.style.opacity = "0";
      }
    }

    mybutton.addEventListener("click", ()=>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}
