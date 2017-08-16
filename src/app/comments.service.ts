import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService {

  constructor() { }


comments = [];


commentText = '';
authorText = '';
comment = {
  text:'',
  author: ''
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
    this.commentFormComponent.comments.splice(i, 1)
  }

  updateComment(i){
    console.log('update function hit!');
    this.commentFormComponent.comment = {
      text:this.commentText,
      author:this.authorText
    }
    this.commentFormComponent.comments.splice(i,1,this.comment)
  }
};

