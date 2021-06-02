// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// // uma interface de user do firebase
// import { User } from 'firebase';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { AuthService } from './auth.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class PostService {
//     currentUser: User;

//     constructor(private angularFirestone: AngularFirestore,
//         private afAuth: AngularFireAuth,
//         private authService: AuthService) {
//         this.afAuth.authState.subscribe(user => this.currentUser = user);
//     }

//     // pega os posts do firebase
//     getAllPosts(): Observable<any> {
//         // os posts vão aparecer pelo tempo de forma descendente
//         return this.angularFirestone.collection<any>('posts', ref => ref.orderBy('time', 'desc'))
//             // snapshotchanges pega o id de documentos indivisualmente
//             .snapshotChanges()
//             .pipe(
//                 map(actions => {
//                     return actions.map(item => {
//                         return {
//                             // aqui vai dar erro por estar usando um <any> e não estar declarando este id
//                             id: item.payload.doc.id,
//                             ...item.payload.doc.data(),
//                         };
//                     });
//                 })
//             );
//     }

//     // postar   || estrutura
//     postMessage(message: string, ownerName: string, otherItem): void {
//         this.angularFirestone.collection('posts').add({
//             message,
//             title: ownerName,
//             user_id: this.currentUser.uid,
//             // tempo:
//             time: firebase.firestore.FieldValue.serverTimestamp(),
//             ...otherItem
//         }).then(res => console.log(res));
//     }


// }

// export interface PostData {
//     id?: string;
// }