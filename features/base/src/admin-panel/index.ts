import type { Config, Plugin } from 'payload/config'

import type { PluginTypes } from './types'


export const samplePlugin =
  (pluginOptions: PluginTypes): Plugin =>
    (incomingConfig): Config => {
      let config = { ...incomingConfig }

      // If the plugin is disabled, return the config without modifying it
      // The order of this check is important, we still want any webpack extensions to be applied even if the plugin is disabled
      if (pluginOptions.enabled === false) {
        return config
      }

      config.onInit = async payload => {
        if (incomingConfig.onInit) await incomingConfig.onInit(payload)
        // Add additional onInit code by using the onInitExtension function
      }

      return config
    }