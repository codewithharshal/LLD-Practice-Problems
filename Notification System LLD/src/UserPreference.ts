import ChannelType from "./ChannelTypes.js";

export default class UserPreference {
  userId: string;
  preferredChannels: Set<ChannelType>;

  constructor(userId: string, preferredChannels: Set<ChannelType>) {
    this.userId = userId;
    this.preferredChannels = preferredChannels;
  }
}
