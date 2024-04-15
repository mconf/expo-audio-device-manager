import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAudioDeviceManager.web.ts
// and on native platforms to ExpoAudioDeviceManager.ts
import ExpoAudioDeviceManagerModule from './ExpoAudioDeviceManagerModule';
import ExpoAudioDeviceManagerView from './ExpoAudioDeviceManagerView';
import { ChangeEventPayload, ExpoAudioDeviceManagerViewProps } from './ExpoAudioDeviceManager.types';

// Get the native constant value.
export const PI = ExpoAudioDeviceManagerModule.PI;

export function hello(): string {
  return ExpoAudioDeviceManagerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAudioDeviceManagerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAudioDeviceManagerModule ?? NativeModulesProxy.ExpoAudioDeviceManager);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAudioDeviceManagerView, ExpoAudioDeviceManagerViewProps, ChangeEventPayload };
