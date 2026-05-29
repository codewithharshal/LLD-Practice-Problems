import Notification from "./Notification.js";

export interface INotificationChannel {
  send(notification: Notification): void;
}

export class EmailNotificationChannel implements INotificationChannel {
  send(notification: Notification): void {
    console.log(`EMAIL: ${notification.message} to ${notification.userId}`);
  }
}

export class PushNotificationChannel implements INotificationChannel {
  send(notification: Notification): void {
    console.log(`PUSH: ${notification.message} to ${notification.userId}`);
  }
}

export class SmsNotificationChannel implements INotificationChannel {
  send(notification: Notification): void {
    console.log(`SMS: ${notification.message} to ${notification.userId}`);
  }
}
