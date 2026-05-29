import ChannelType from "./ChannelTypes.js";

export default class Notification {
  userId: string;
  message: string;
  type: ChannelType;

  constructor(userId: string, message: string, type: ChannelType) {
    this.userId = userId;
    this.message = message;
    this.type = type;
  }
}
