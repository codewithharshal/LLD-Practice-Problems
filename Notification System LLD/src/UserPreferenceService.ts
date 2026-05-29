import UserPreference from "./UserPreference.js";

export default class UserPreferenceService {
  preferences = new Map<string, UserPreference>();

  getPreference(userId: string): UserPreference | undefined {
    return this.preferences.get(userId);
  }
}
