import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  status=false;
  module={
    name:'',
    prof:''
  }
  constructor(private Service: ContactService) { }

  ngOnInit(): void {
  }
   insert(){
    this.Service.createModule(this.module);
    this.module={
      name:'',
      prof:''
    };
    this.status=false;
   }
}
