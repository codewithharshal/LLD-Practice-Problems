import ChannelType from "./ChannelTypes.js";
import {
  EmailNotificationChannel,
  PushNotificationChannel,
  SmsNotificationChannel,
} from "./NotificationChannel.js";
import type { INotificationChannel } from "./NotificationChannel.js";

export default class NotificationChannelFactory {
  getChannel(preferredChannel: ChannelType): INotificationChannel {
    switch (preferredChannel) {
      case ChannelType.EMAIL:
        return new EmailNotificationChannel();
      case ChannelType.PUSH:
        return new PushNotificationChannel();
      case ChannelType.SMS:
        return new SmsNotificationChannel();
    }
  }
}
