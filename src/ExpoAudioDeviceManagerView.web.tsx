import * as React from 'react';

import { ExpoAudioDeviceManagerViewProps } from './ExpoAudioDeviceManager.types';

export default function ExpoAudioDeviceManagerView(props: ExpoAudioDeviceManagerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
