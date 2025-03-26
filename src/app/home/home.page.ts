import { Component,ViewChild } from '@angular/core';
import { RefresherCustomEvent,IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonRefresher, IonRefresherContent, IonList  } from '@ionic/angular/standalone';
import {IonButtons,IonInput,IonItem,  IonModal,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,[IonHeader, IonToolbar, IonTitle, IonContent, IonButton, FormsModule, IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonModal,
    IonItem,
    IonTitle,
    IonToolbar],],
})
export class HomePage {
[x: string]: any;
  @ViewChild(IonModal) modal!: IonModal;
  shopping:string=""
  coding:string=""
  budget:number=1000
  constructor() {}

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

