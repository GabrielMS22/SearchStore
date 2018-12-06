import { Component, Renderer, ElementRef } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  //Queda a implementar con render y element si queda tiempo
  //Sin embargo, los proximos componentes creados se utilizara Renderer y ElementRef
  constructor(private render: Renderer, private element: ElementRef) { }

  faqSHOW(id) {
    document.getElementById("myDIV1").style.display = 'none';
    document.getElementById("myDIV2").style.display = 'none';
    document.getElementById("myDIV3").style.display = 'none';

    document.getElementById("how1").style.opacity = '1';
    document.getElementById("how2").style.opacity = '1';
    document.getElementById("how3").style.opacity = '1';

    document.getElementById('how'+id).style.opacity = '0';
    var x = document.getElementById("myDIV" + id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  cerrarFaq(id) {
    document.getElementById("myDIV" + id).style.display = 'none';
    document.getElementById("how"+id).style.opacity = '1';

  }
  
}
