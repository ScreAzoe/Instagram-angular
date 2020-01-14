import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publishment',
  templateUrl: './publishment.component.html',
  styleUrls: ['./publishment.component.css']
})
export class PublishmentComponent implements OnInit {
  public showComments= false;
  public comments=[
    {
      id: 1,
      name: 'Juanito',
      comment: 'Buena foto'
    },
    {
      id: 2,
      name: 'Eduardo',
      comment: 'Buena foto X2'
    }
  ]

  public comment={
    name: 'Alberto',
    input: '',
    id: 0
  }

  constructor() { }

  ngOnInit() {
    

  }

  public toggleComments(){
    this.showComments= !this.showComments
  }

  public sendMessage(){
    this.comments.push(
      {
        name: this.comment.name,
        comment: this.comment.input,
        id: 5
      }
    )
  }

}
