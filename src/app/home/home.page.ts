import { Component,ViewChild } from '@angular/core';
import { RefresherCustomEvent,IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonRefresher, IonRefresherContent,} from '@ionic/angular/standalone';
import {IonButtons,IonInput,IonModal,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonItem, IonLabel, IonItemOption, IonItemOptions, IonList, IonItemSliding, IonText, IonCard, IonFab, IonCol, IonRow, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle,IonList, IonContent, IonFab, IonFabButton, IonIcon,
    IonButton,
     FormsModule,
     IonCol,IonRow, 
     IonButtons, 
     IonInput,
     NgFor,
      IonModal,
      CommonModule,
      IonItemSliding,
      IonLabel,
      IonItemOption,
      IonItemOptions,
      IonText,
      IonCard,
      IonItem],
})
export class HomePage {
[x: string]: any;
  @ViewChild(IonModal) modal!: IonModal;
  shopping:string=""
  budget:number=0
  lists:any= []
  constructor(private dataservice:DataService,private router:Router) {
    addIcons({ add });
  }
  ionviewillenter(){
    this.lists=this.dataservice.getlist();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.shopping, 'confirm');
  }
  removeList(listId: any) {
    this.dataservice.removeList(listId);
    this.lists = this.dataservice.getlist();
  }
  name(name: any, arg1: string) {
    throw new Error('Method not implemented.');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      if (this.shopping) {
        this.dataservice.addlist(this.shopping, this.budget);
        this.lists=this.dataservice.getlist();
        console.log(this.lists);
      }
    }
  }
  viewList(listId: any) {
    this.router.navigate(['/list-details', listId]);
    
  }
}

