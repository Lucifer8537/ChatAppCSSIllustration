import { Component } from '@angular/core';
interface chatObj {
  action: string;
  data: string;
  sentTwo: boolean;
  cash: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Simple booking';
  details =
    'Stay in touch wit our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.';
  chat: chatObj[] = [
    {
      action: 'recieved',
      data: "That sounds great. I'd be happy with that",
      sentTwo: false,
      cash: 0,
    },
    {
      action: 'recieved',
      data: 'Could you send over some pictures of your dog.please?',
      sentTwo: false,
      cash: 0,
    },
    {
      action: 'img',
      data: '',
      sentTwo: false,
      cash: 0,
    },
    {
      action: 'sent',
      data: "Here are a few pictures. She's a happy girl!",
      sentTwo: false,
      cash: 0,
    },
    {
      action: 'sent',
      data: 'Can you make it?',
      sentTwo: true,
      cash: 0,
    },
    {
      action: 'recieved',
      data: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
      sentTwo: false,
      cash: 0,
    },
    {
      action: 'cost',
      data: '30 minute walk',
      sentTwo: false,
      cash: 29,
    },
    {
      action: 'cost',
      data: '1 hour walk',
      sentTwo: false,
      cash: 49,
    },
  ];
}
