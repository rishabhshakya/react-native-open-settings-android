// @flow
import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  generalSettings: () => void;
  homeSettings: () => void;
  appDetailsSettings: () => void;
  wifiSettings: () => void;
  locationSourceSettings: () => void;
  wirelessSettings: () => void;
  airplaneModeSettings: () => void;
  apnSettings: () => void;
  bluetoothSettings: () => void;
  dateSettings: () => void;
  localeSettings: () => void;
  inputMethodSettings: () => void;
  displaySettings: () => void;
  securitySettings: () => void;
  internalStorageSettings: () => void;
  memoryCardSettings: () => void;
  accessibilitySettings: () => void;
  applicationSettings: () => void;
  deviceInfoSettings: () => void;
  appNotificationSettings: () => void;
}

export default (TurboModuleRegistry.get<Spec>("RTNOpenSettingsAndroid"): ?Spec);
