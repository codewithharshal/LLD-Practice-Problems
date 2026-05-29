import Notification from "./Notification.js";
import UserPreferenceService from "./UserPreferenceService.js";
import NotificationChannelFactory from "./NotificationChannelFactory.js";
import ChannelType from "./ChannelTypes.js";

export default class NotificationDispatcher {
  private preferenceService: UserPreferenceService;
  private channelFactory: NotificationChannelFactory;

  constructor(
    preferenceService: UserPreferenceService,
    channelFactory: NotificationChannelFactory,
  ) {
    this.preferenceService = preferenceService;
    this.channelFactory = channelFactory;
  }

  dispatch(notification: Notification): void {
    const userPref = this.preferenceService.getPreference(notification.userId);
    if (!userPref) {
      console.warn(`No preferences found for user: ${notification.userId}`);
      return;
    }
    // Send notification to all preferred channels
    userPref.preferredChannels.forEach((channelType) => {
      const channel = this.channelFactory.getChannel(channelType);
      if (channel) {
        channel.send(notification);
      } else {
        console.warn(`No channel found for type: ${ChannelType[channelType]}`);
      }
    });
  }
}
