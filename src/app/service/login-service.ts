import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private userName = '';

    public login(name: string) {
        this.userName = name;
        this.isUserLoggedIn.next(true);
    }

   public getUserName(): string {
        return this.userName;
    }

    public getUserIsLoggedIn(): Observable<boolean> {
        return this.isUserLoggedIn.asObservable();
    }
}
