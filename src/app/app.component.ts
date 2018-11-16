import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'beer'
    },
    {
      title: 'Cards',
      url: '/cards',
      icon: 'add'
    },
    {
      title: 'toolbar',
      url: '/toolbar',
      icon: 'bed'
    },
    {
      title: 'presents',
      url: '/presents',
      icon: 'contact'
    },
    {
      title: 'forms',
      url: '/forms',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
