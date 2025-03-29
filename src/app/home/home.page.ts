import { Component,ViewChild } from '@angular/core';
import { RefresherCustomEvent,IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonRefresher, IonRefresherContent,} from '@ionic/angular/standalone';
import {IonButtons,IonInput,IonModal,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonItem, IonLabel, IonItemOption, IonItemOptions,IonList,IonItemSliding,IonText,IonCard,IonFab,IonCol,IonRow, IonFabButton, IonIcon,} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';




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
      IonModal,
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
  coding:string=""
  budget:number=1000
  list=[]
  constructor() {
    addIcons({ add });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.shopping, 'confirm');
  }
  name(name: any, arg1: string) {
    throw new Error('Method not implemented.');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      console.log(this.shopping, this.budget,this.coding,this.budget)
    }
  }
}

