import { Module } from './../../modules/Module';
import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
modules: Module[]=[];
statusModule=false;
myModule: Module={
  id:'',
  name:'',
  prof:'',
};
  constructor(private ServiceContact: ContactService) { }

  ngOnInit(): void {
    this.ServiceContact.getModules().subscribe((res)=>{
this.modules=res;

    })
  }
  update(module: Module){
    this.ServiceContact.Modifier(module);
  }
  editer(module: Module){
this.myModule=module;
this.statusModule=true;
  }
  delete(module: Module){
    if(confirm('are you sure you want to delete this module?')){
      this.ServiceContact.deleteModule(module);
    }
    else{
      this.statusModule=false;
    }
    
    
      }
}
