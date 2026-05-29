import Notification from "./Notification.js";
import NotificationDispatcher from "./NotificationDisaptcher.js";

export default class NotificationService {
  private dispatcher: NotificationDispatcher;

  constructor(dispatcher: NotificationDispatcher) {
    this.dispatcher = dispatcher;
  }

  sendNotification(notification: Notification): void {
    this.dispatcher.dispatch(notification);
  }
}
