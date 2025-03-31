import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonRow, IonCol, IonText, IonList, IonFab, IonIcon, IonFabButton, IonModal, IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { addIcons } from 'ionicons';
import {add} from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core';
import { Router} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonItem, IonModal, IonIcon, IonFab, IonList, IonText, IonCol, IonRow, IonBackButton, IonButtons, IonContent, IonBackButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class ListDetailsPage implements OnInit {
  listId: any;
  list: any;
  listDetails: any;
    @ViewChild(IonModal) modal!: IonModal;
  constructor(private route:ActivatedRoute, private dataservice:DataService) {
    addIcons({ add });
   }
   

  ngOnInit() {
const idparams = this.route.snapshot.paramMap.get('Id')
this.listId = idparams ? +idparams : 0; 
this.list = this.dataservice.getListById(this.listId);
console.log(this.list);


  }
onWillDismiss(event: CustomEvent<OverlayEventDetail>){

}
cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.listDetails, 'confirm');
}
removeList(listId: any) {
  this.dataservice.removeList(listId);
  this.list = this.dataservice.getlist();
}
}
