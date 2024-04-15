import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAudioDeviceManagerViewProps } from './ExpoAudioDeviceManager.types';

const NativeView: React.ComponentType<ExpoAudioDeviceManagerViewProps> =
  requireNativeViewManager('ExpoAudioDeviceManager');

export default function ExpoAudioDeviceManagerView(props: ExpoAudioDeviceManagerViewProps) {
  return <NativeView {...props} />;
}
