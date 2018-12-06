import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoutModalPageModule } from './logout-modal/logout-modal.module';

import { SocialMediaService } from './services/social-media.service';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { ComentariosService } from './services/comentarios.service';
import { NavigationService } from './services/navigation.service';
import { ArticulosService } from './services/articulos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from './services/toast.service';
import { OfertasService } from './providers/ofertas.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SocialsharingService } from './services/socialsharing.service';
import { HttpClientModule } from '@angular/common/http';
import { ProvlocaliService } from './providers/provlocali.service';
import { LoginUsersService } from './services/login-users.service';
import { MenuService } from './services/menu.service';
import { ModalService } from './services/modal.service';
import { OfertasModalPageModule } from './ofertas-modal/ofertas-modal.module';
import { ArticuloPageModule } from './modals/articulo/articulo.module';
import { DepartamentosService } from './services/Departamentos/departamentos.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LogoutModalPageModule,
    OfertasModalPageModule, ArticuloPageModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialMediaService,
    Firebase,
    ComentariosService,
    NavigationService,
    ArticulosService,
    ToastService,
    OfertasService,
    SocialSharing,
    SocialsharingService,
    ProvlocaliService,
    LoginUsersService,
    MenuService,
    ModalService,
    DepartamentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
