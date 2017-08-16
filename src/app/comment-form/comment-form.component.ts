import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(public commentsComponent: CommentsComponent) { }

  ngOnInit() {
  }


// comments = [];


// commentText = '';
// authorText = '';
// comment = {
//   text:'',
//   author: ''
// }

//    submitComment(){
//     console.log(this.authorText);
//     console.log(this.commentText);
//     this.comment = {
//       text: this.commentText,
//       author: this.authorText
//     }

//     console.log(this.comment)
//     this.comments.push(this.comment)
//   }

// }
