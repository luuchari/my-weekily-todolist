import { Component } from '@angular/core';
import { RefresherCustomEvent,IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonRefresher, IonRefresherContent, IonList  } from '@ionic/angular/standalone';
import {IonButtons,IonInput,IonItem,  IonModal,} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';



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
  constructor() {}
}
