import { Component, OnInit  } from '@angular/core';
import { ChkBoxDataService } from 'src/services/chkboxData.service';

@Component({
  selector: 'searchBar-comp',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  chkVal:boolean;
  constructor(private chkBoxDataService:ChkBoxDataService) { 
    this.chkVal=false;
  }

  onClick(values:any){
    this.chkBoxDataService.sharedChkboxValue=values.target.checked;
    this.chkBoxDataService.changeMessage(values.target.checked);
  }

  ngOnInit(): void {
    this.chkBoxDataService.currentMessage.subscribe(chkVal => this.chkVal = chkVal)
  }

  search(serchStr:any) {
    this.chkBoxDataService.changeSearch(serchStr.target.value);
  }
}
