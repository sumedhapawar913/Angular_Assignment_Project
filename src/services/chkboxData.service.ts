import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class ChkBoxDataService{
    sharedChkboxValue:boolean;
    sharedSearchValue:string;

    private messageSource = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();

    private searchText = new BehaviorSubject("");
    currText = this.searchText.asObservable();

    constructor(){
        this.sharedChkboxValue=false;
        this.sharedSearchValue=""
    }

    changeMessage(message: boolean) {
        this.messageSource.next(message)
    }

    changeSearch(srchMessage: string) {
        console.log(`srchMessage : ${srchMessage}`);
        this.searchText.next(srchMessage)
    }
}