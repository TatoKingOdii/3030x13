import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Item} from "../../model/item";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  selectedContent$: BehaviorSubject<Item | null> = new BehaviorSubject<Item | null>(null);
  contentList$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  contentSubscription$!: Observable<Item[]>;

  constructor() { }
}
