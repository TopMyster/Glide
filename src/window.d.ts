declare interface Window {
  volumeAPI: {
    increaseVolume: () => Promise<void>;
    decreaseVolume: () => Promise<void>;
    toggleMute: () => Promise<void>;
  };
}
