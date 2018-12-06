import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Servicio para enviar información a FireBase para que la app de trabajador reciba una notificación
@Injectable({
  providedIn: 'root'
})
export class ProvlocaliService {

  key = 'AAAAHOUCL9c:APA91bEFR7PzFlXbwCU9owVtjiVf4igCnvzkSTM0hHWED0lr6TKwgqNJSGohTyeK-WPA0qsjA-CNtBuz2xlEEa8tRnn4MuwXS7y7hlbGhAwdAKM7hTVUj4pfUWKnJwSqKq06qdWEG5lX';
  
  constructor(public http: HttpClient) { }

  sendNotification() {
    let body = {
      "notification": {
        "title": "Cliente en espera",
        "body": "Acude al modulo de localización!",
        "sound": "default",
        "click_action": "FCM_PLUGIN_ACTIVITY",
        "icon": "fcm_push_icon"
      },
      "data": {
        "param1": "value1",
        "param2": "value2"
      },
      "to": "/topics/all",
      "priority": "high",
      "restricted_package_name": ""
    }
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post("https://fcm.googleapis.com/fcm/send", body, {
      headers: options.set('Authorization', 'key='+this.key),
    })
      .subscribe();
  }
}
