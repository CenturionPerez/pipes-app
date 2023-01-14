import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Utilizamos BrowserAnimationsModule cuando usamos animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app para hacer uso en pipes y demas
import  localeEs  from '@angular/common/locales/es';
import  localeFr  from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } //Hacemos global la variable, en otras palabras el idioma en la app
    //Importante importar tambien el LOCALE_ID y hacer uso de provide y useValue
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
