import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../services/social-media.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.page.html',
  styleUrls: ['./logout-modal.page.scss'],
})
export class LogoutModalPage implements OnInit {

  constructor(public media:SocialMediaService, public modal:ModalController) { }

  ngOnInit() {
  }

  socialMedia(mediaName: string) {
    this.media.openMedia(mediaName);
  }
 
  closeModal(){
    this.modal.dismiss();
  }
}
