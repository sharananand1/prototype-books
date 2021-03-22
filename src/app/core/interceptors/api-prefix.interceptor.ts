import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('assets/i18n') === -1) {
      req = req.clone({
        url: environment.apiPrefix + req.url
      });
    }
    return next.handle(req);
  }
}
