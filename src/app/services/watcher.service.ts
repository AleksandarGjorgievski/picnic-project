import { Observable ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatcherService {
    private loginSubject = new Subject();
    private newPostSubject = new Subject();

    public loginListener(): Observable<any> {
        return this.loginSubject.asObservable();
    }
    
    public emitLoginChange(value:any) {
        this.loginSubject.next(value);
    }

    public newPostListener(): Observable<any> {
        return this.newPostSubject.asObservable();
    }

    public emitNewPostChange(value:any) {
        this.newPostSubject.next(value);
    }

}






