import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, Observable } from 'rxjs';


import {Module} from '../modules/Module';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  documents: AngularFirestoreDocument<Module> | undefined;
ModulesCollection: AngularFirestoreCollection<Module> | undefined;
Modules: Observable<Module[]>;
  constructor(private afs: AngularFirestore) { 
   this.ModulesCollection= this.afs.collection('Modules');
    this.Modules=this.ModulesCollection.snapshotChanges().pipe( map(actions => {
      return actions.map(a => {
   
       const key = a.payload.doc.id;
       const data = a.payload.doc.data() as Module;
       return ({id:key,...data});
     })
   }
     ));
  
     };
 
  
  getModules(){
    return this.Modules;
  }
  createModule(module: Module){
    this.afs.collection('Modules').add(module);

  }
  Modifier(module: Module){
   this.documents= this.afs.collection('Modules').doc<Module>(module.id);
   this.documents.update(module);
  }
  deleteModule(module: Module){
    this.documents= this.afs.collection('Modules').doc<Module>(module.id);
   this.documents.delete();
  }
}

