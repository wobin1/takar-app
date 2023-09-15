import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private store: LocalStorageService, private singleroute: ActivatedRoute) { }

  getUserId(){
    let getId = this.store.getStoredData("takaruser")
    console.log(getId.id)
    let user_id = getId.id

    return user_id
  }

  
}
