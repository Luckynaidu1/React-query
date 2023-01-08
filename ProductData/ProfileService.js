import { api } from "..";

class ProfileService {

  getProfiles() {
    
    return api.get("/profile");
  }
}

export const profileService = new ProfileService();
