import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(public firebase: Firebase, public firModule: AngularFirestore, private plat: Platform) { }

  async getToken(){

    let token;
    if(this.plat.is('android')){
      token = await this.firebase.getToken();
    }
    if(this.plat.is('ios')){

      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }
    
    return this.saveTokenFireBase(token);
  }

  private saveTokenFireBase(token){
    if(!token) return;
    const deviceRef = this.firModule.collection('devices');

    const docData = {
      token,
      userId :'testUser'
    };

    return deviceRef.doc(token).set(docData);

  }

  listenNotif(){
    return this.firebase.onNotificationOpen();
  }

  
}
