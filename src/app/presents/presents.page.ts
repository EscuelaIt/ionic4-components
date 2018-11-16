import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController, ModalController } from '@ionic/angular';

import { ModalPage } from './../modal/modal.page';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.page.html',
  styleUrls: ['./presents.page.scss'],
})
export class PresentsPage implements OnInit {

  constructor(
    private actionCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const action = await this.actionCtrl.create({
      header: 'opciones',
      buttons: [
        {
          text: 'compartir',
          icon: 'share'
        },
        {
          role: 'destructive',
          text: 'eliminar',
        },
        {
          role: 'cancel',
          text: 'cerrar',
        }
      ]
    });

    await action.present();
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Se borrará un archivo',
      message: '¿Está seguro que quiere borrar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: () => {
            console.log('dijo si');
            // code
          }
        },
      ]
    });

    await alert.present();
  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hola',
      position: 'bottom',
      duration: 8000,
      showCloseButton: true,
      closeButtonText: 'Cerrar'
    });

    await toast.present();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });

    await modal.present();
  }

}
