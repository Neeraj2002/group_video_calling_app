import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "fdf4e73822744269b3db31a636aad966";
const token =
  "006fdf4e73822744269b3db31a636aad966IABNOPnSJYiPn/vMwH2MgG+KqVEAngkSGvsPbePkmpW0vWTNKL8AAAAAEAD+bihbN4RFYQEAAQA2hEVh";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";