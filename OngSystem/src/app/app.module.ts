import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { en_AU, en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNzZorroAntdModule } from './DemoNgZorroAntdModule';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,  // Configuração de rotas
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNzZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  // Não declare o AppComponent no array de declarations
})
export class AppModule {}
