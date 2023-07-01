import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getActivatedCardCodes(): string[] {
    let localStorageCardCodes = localStorage.getItem('cards');
    if (localStorageCardCodes === null) {
      localStorage.setItem("cards", JSON.stringify([]));
      return [];
    }

    let activatedCardCodes: string[] = JSON.parse(localStorageCardCodes);
    return activatedCardCodes;
  }

  public addActivatedCardCode(cardCode: string): void {
    let localStorageCardCodes = localStorage.getItem('cards');
    if (localStorageCardCodes === null) {
      localStorage.setItem("cards", JSON.stringify([cardCode]));
    } else {
      let parsedCardCodes: string[] = JSON.parse(localStorageCardCodes);
      parsedCardCodes.push(cardCode);
      localStorage.setItem("cards", JSON.stringify(parsedCardCodes));
    }
  }
  public checkIfAlreadyActivated(cardCode: string): boolean{
    let localStorageCardCodes = localStorage.getItem('cards');
    if(localStorageCardCodes !== null){
      let parsedCardCodes: string[] = JSON.parse(localStorageCardCodes);
      return parsedCardCodes.includes(cardCode)
    }
    return false;
  }
}
