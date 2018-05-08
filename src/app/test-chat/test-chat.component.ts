import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../web-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-chat',
  templateUrl: './test-chat.component.html',
  styleUrls: ['./test-chat.component.scss']
})
export class TestChatComponent implements OnInit {
  chatInputForm: FormGroup;
  
  constructor(private fb: FormBuilder, private webService : WebServiceService) { }

  onChatInputSubmit(chatInputForm) {
    console.log(chatInputForm.value);
    this.webService.postMessage(chatInputForm.value);

  }

  async ngOnInit() {
    // LogIn
    this.chatInputForm = this.fb.group({
      chatOwnerName: [''],
      chatText: ['']
    });

    // var response = await this.webService.getMessages();
    // this.messages = response.json();
  }

  // messages = [];
  

}
