import { FlexPlugin } from 'flex-plugin';
import React from 'react';

const PLUGIN_NAME = '{{pluginClassName}}';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    alert('this plugin is now being used');
  }
}
