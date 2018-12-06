import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class SocialsharingService {

  url = 'https://www.facebook.com/SearchStore/' ;
  constructor(private social:SocialSharing) { }

  socialShare(name){
    switch (name) {
      case 'facebook':
        this.shareFacebook();
        break;
      case 'twitter':
        this.shareTwitter();
       break;
      
       case 'instagram':
        this.shareInstagram();
        break;
      default:
        break;
    }
  }
  shareFacebook(){
    this.social.canShareVia('facebook').then( ()=>{
      //this.social.shareViaFacebook('SearchStore','assets/img/logo.png',this.url);

      this.social.shareViaFacebookWithPasteMessageHint('Searchstore', 'www/assets/img/logo.png', this.url,'Searchstore');
    }).catch( (error) =>{
      console.log(error)
    });

  }
  shareInstagram(){
    this.social.canShareVia('instagram').then( () => {
      this.social.shareViaInstagram('Searchstore',undefined);
    }).catch( () => console.log('impossible'));
  }
  shareTwitter(){
    this.social.canShareVia('twitter').then(() => {
      this.social.shareViaTwitter('SearchStore','www.assets/img/logo.png',this.url);
    }).catch(() => console.log('impossible'));
  }
}
