import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ComentariosService } from '../services/comentarios.service';
import { NavigationService } from '../services/navigation.service';
import { Firebase } from '@ionic-native/firebase/ngx';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  @ViewChild('comment',{read:ElementRef}) myContainer;
  @ViewChild('gracias') afterM:ElementRef;
  
  dataComment = {
    name:'Customer',
    comment: ''
  };

  message: boolean = false;
  btnBack: boolean = false;
  stateMessage: boolean = true;
  constructor(public comentarios: ComentariosService, 
              public element: ElementRef,
              public render: Renderer2,
              public nav: NavigationService,
              ) { }

  
  ngOnInit() {
    
  }

  moveBack(){
    this.nav.moveBack();

  }
  sendComment(){
    
    if(this.dataComment.comment != '' ){
      
      this.stateMessage = true;
      //Agregamos el comentario a la BD
      this.comentarios.addComentario(this.dataComment).then(() => {
        //Animaciones after
          this.render.setStyle(this.myContainer.nativeElement, 'opacity', '0');
          setTimeout(() => {
            this.message = true;
            setTimeout(() => {
              const element = document.getElementById('gracias');
              this.render.removeClass(element, 'bounceIn');
              this.render.addClass(element, 'bounceOut');
              this.btnBack = true;
              setTimeout(() => {
                
              }, 1000);
              
            }, 3000);
          }, 1000);
    
        
        });
    }else{ 
      this.stateMessage = false;
      setTimeout(() => {
        this.stateMessage = true;
      }, 3000);
    }

  }

}
