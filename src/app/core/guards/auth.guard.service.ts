import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthGuardService {
  modules: any = [];

  constructor(private router: Router, public auth: LocalStorageService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = !!this.auth.getValue(environment.authKey, false);
    if (user) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
