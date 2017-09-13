import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

//     /* upload image handler*/
//   handleFileSelect(event) {
//     const file = event.target.files[0]; // <--- File Object for future use.
//     this.profileForm.controls['ImagePath'].setValue(event.target.files[0].name);
//     const files = event.target.files;
//     /* const file = files[0]; */
//     this.fileType = file.type;
//     this.fileName = file.name;
//     if (files && file) {
//       const reader = new FileReader();
//       reader.onload = this._handleReaderLoaded.bind(this);
//       reader.readAsBinaryString(file);
//     }
//   }




// /* upload image base64 conversion */
//   _handleReaderLoaded(readerEvt) {
//     const binaryString = readerEvt.target.result;
//     this.base64textString = btoa(binaryString);
//     this.logo = 'data:' + this.fileType + ';base64,' + this.base64textString;
//     this.profileForm.controls['ImagePath'].setValue(this.base64textString);
//   }
  constructor() { }

  ngOnInit() {
  }
}
