import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private isUserLoggedIn = false;
    private userName = '';

    public login(name: string) {
        this.userName = name;
        this.isUserLoggedIn = true;
    }

   public getUserName(): string {
        return this.userName;
    }

    public getUserIsLoggedIn(): boolean {
        return this.isUserLoggedIn;
    }
}
