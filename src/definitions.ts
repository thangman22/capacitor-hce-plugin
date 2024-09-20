import type { PluginListenerHandle } from '@capacitor/core';

enum ReaderStatusType {
  CardEmulatorStarted = 'card-emulator-started',
  ScanError = 'scan-error',
  ScanCompleted = 'scan-completed',
  CardEmulatorStopped = 'card-emulator-stopped'
}

export interface HCECapacitorPluginPlugin {
  startNfcHce(options: { content: string, mimeType?: string, persistMessage?: boolean }): Promise<{ success: boolean }>;
  stopNfcHce(): Promise<{ success: boolean }>;
  isNfcSupported(): Promise<{ supported: boolean }>;
  isNfcEnabled(): Promise<{ enabled: boolean }>;
  isNfcHceSupported(): Promise<{ supported: boolean }>;
  isSecureNfcEnabled(): Promise<{ enabled: boolean }>;
  enableApduService(options: { enable: boolean }): Promise<{ enabled: boolean }>;
  addListener(
    eventName: 'onStatusChanged',
    listenerFunc: (response: { eventName: ReaderStatusType }) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
