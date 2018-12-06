import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  
  constructor() { }

  openMedia(val){
    const facebook = 'https://www.facebook.com/SearchStore/';
    const twitter = 'https://www.twitter.com/SearchStore/';
    const instagram = 'https://www.instagram.com/SearchStore/';
    switch (val) {
      case 'f':
        window.open(facebook, '_system');
        break;

      case 't':
        window.open(twitter, '_system');
      break;
      
      case 'i':
        window.open(instagram, '_system');
      break;

      default:
        break;
    }
  }
}
