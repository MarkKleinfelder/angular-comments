import { Component, OnInit } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public commentFormComponent: CommentFormComponent) { }

  ngOnInit() {
  }





//   deleteComment(i){
//     console.log('delete function hit')
//     this.commentFormComponent.comments.splice(i, 1)
// }

//   updateComment(i){
//     console.log('update function hit!');
//     this.commentFormComponent.comment = {
//       text:this.commentText,
//       author:this.authorText
//     }
//     this.commentFormComponent.comments.splice(i,1,this.comment)
   
//   }
// };


