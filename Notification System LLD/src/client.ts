import Notification from "./Notification.js";
import NotificationService from "./NotificationService.js";
import NotificationDispatcher from "./NotificationDisaptcher.js";
import NotificationChannelFactory from "./NotificationChannelFactory.js";
import UserPreferenceService from "./UserPreferenceService.js";
import UserPreference from "./UserPreference.js";
import ChannelType from "./ChannelTypes.js";

// Setup user preferences
const userPreferenceService = new UserPreferenceService();
userPreferenceService.preferences.set(
  "user1",
  new UserPreference("user1", new Set([ChannelType.EMAIL, ChannelType.PUSH])),
);
userPreferenceService.preferences.set(
  "user2",
  new UserPreference("user2", new Set([ChannelType.SMS])),
);

// Setup channel factory and dispatcher
const channelFactory = new NotificationChannelFactory();
const dispatcher = new NotificationDispatcher(
  userPreferenceService,
  channelFactory,
);
const notificationService = new NotificationService(dispatcher);

// Send notifications
test();

function test() {
  const notification1 = new Notification(
    "user1",
    "Hello User1!",
    ChannelType.EMAIL,
  );
  const notification2 = new Notification(
    "user2",
    "Hello User2!",
    ChannelType.SMS,
  );
  const notification3 = new Notification(
    "user1",
    "Push for User1!",
    ChannelType.PUSH,
  );

  console.log("--- Sending notification to user1 (EMAIL, PUSH) ---");
  notificationService.sendNotification(notification1);
  notificationService.sendNotification(notification3);

  console.log("--- Sending notification to user2 (SMS) ---");
  notificationService.sendNotification(notification2);
}
