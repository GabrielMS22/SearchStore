import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})

  //Servicio para guardar un comentario en Firebase
  //en la colección de comentarios
export class ComentariosService {

  constructor(public afs: AngularFirestore) { }

  
  addComentario(dataForm) {

    console.log(dataForm)
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/Comentarios').add({
        name: dataForm.name,
        comment: dataForm.comment 
      })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
    })
  }

  requestTrabajador() {

    
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/Customers').add({
        comment: 'Necesito ayuda!'
      })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
    })
  }

}
