import { Component, OnInit, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-IAchatbot',
  templateUrl: './IAchatbot.component.html',
  styleUrls: ['./IAchatbot.component.css']
})

export class IAchatbotComponent implements OnInit {
  @Input() conversation: any[] = [];
  messageText: string = '';

  constructor(private socket: Socket) {  }

  ngOnInit() {
    this.socket.fromEvent<any>('response').subscribe((data) => {
      console.log(data);
      this.conversation.push({
        text: data["msg"],
        isUser: false
      });
      this.scrollAuto();
    });
  }

  addMessageToConversation() {
    if (!this.messageText.trim().length) {
      return false;
    } else {
      this.socket.emit("ask", {
        "msg": this.messageText
      });
      this.conversation.push({
        text: this.messageText,
        isUser: true
      });
      this.messageText = '';
      this.scrollAuto();
      return true;
    }
  }

  scrollAuto() {
    const el = document.getElementById("area-messages");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }
}
