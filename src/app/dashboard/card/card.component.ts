import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    
    this.httpClient.put('/api/skills/' + card.id, card).subscribe();
    card.likes ++;
  }

  onShare(card: any){
    // TODO: abrir o link do seu linkedin
    window.open("https://www.linkedin.com/in/lucas1994/", '_blank');
  }

}
