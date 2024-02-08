import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"bossel","appId":"1:1075134453561:web:f57f0d4cb8816e44b73ae8","storageBucket":"bossel.appspot.com","apiKey":"AIzaSyB0l-UgqD5Qc5I4NifphLlJh4V3ewMXrdc","authDomain":"bossel.firebaseapp.com","messagingSenderId":"1075134453561"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
