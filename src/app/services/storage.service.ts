import { Injectable } from '@angular/core';

@Injectable()
export class ChefStorageService {

    private data: any;

    getItem(source: string, item: string) {
        this.data = sessionStorage.getItem(source);
        if (this.data)
            return JSON.parse(this.data).response[item];
        return null;
    }

    setItem(name: string, value: string) {
        sessionStorage.setItem(name, value);
    }

    getStorage(source: string) {
        return sessionStorage.getItem(source);
    }

    isUserLoggedIn() {
        var authData = sessionStorage.getItem("authorizationData");
        if (authData) {
            var userId = this.getItem("authorizationData", "userId");
            if (userId && userId != '')
                return true;
        }
        return false;
    }

    logOutUser() {
        sessionStorage.removeItem("authorizationData");
    }
}