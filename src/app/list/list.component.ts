import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  comments = [];
  
  commentText = '';
  
  authorText = '';
  
  comment = {
    text:'',
    author: ''
}

  constructor() { }

  ngOnInit() {
  }


  submitComment(){
    console.log(this.authorText);
    console.log(this.commentText);
    this.comment = {
      text: this.commentText,
      author: this.authorText
    }

  console.log(this.comment)
  this.comments.push(this.comment)
  }


  deleteComment(i){
    console.log('delete function hit')
    this.comments.splice(i, 1)
}

  updateComment(i){
    console.log('update function hit!');
    this.comment = {
      text:this.commentText,
      author:this.authorText
    }
    this.comments.splice(i,1,this.comment)
   
  }

}
