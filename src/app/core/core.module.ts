import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiService} from './http/api.service';
import {LocalStorageService} from './services/local-storage.service';
import {SharedServiceService} from './services/shared-service.service';
import {ApiPrefixInterceptor} from './interceptors/api-prefix.interceptor';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';
import {AuthGuardService} from './guards/auth.guard.service';
import {NoAuthGuardService} from './guards/no-auth.guard.service';
import {DigitOnlyDirective} from './directives/digit-only.directive';
import {UppercaseDirective} from './directives/uppercase.directive';
@NgModule({
  declarations: [
    DigitOnlyDirective,
    UppercaseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DigitOnlyDirective,
    UppercaseDirective
  ],
  providers: [
    ApiService,
    AuthGuardService,
    NoAuthGuardService,
    LocalStorageService,
    SharedServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true}
  ]
})
export class CoreModule {
}
