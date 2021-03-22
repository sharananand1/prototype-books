import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  login(data): Observable<any> { // login
    return this.httpClient.post('login', data);
  }

  signUp(data): Observable<any> { // new registration
    return this.httpClient.post('register', data);
  }

  cmsGetFaq(): Observable<any> { // get all faq
    return this.httpClient.get('cms/faq');
  }

  cmsGetBlog(): Observable<any> { // get all blog
    return this.httpClient.get('cms/blog');
  }

  cmsGetTestimonials(): Observable<any> { // get all testimonial
    return this.httpClient.get('cms/testimonial');
  }
}

