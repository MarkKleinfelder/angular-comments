import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

comments = [];

  // comments = [{
  //   text: 'first comment!',
  // 	author: 'A. Person'
  // 	}
      // 'nice work!',
      // 'I would also like to congratulate you!'
  //];

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
  //   
  // }
  // values = '';

  // commentText(event: any) {
  //   this.values += event.target.value + ' | ';
  //   console.log(this.values)
  // }


};
