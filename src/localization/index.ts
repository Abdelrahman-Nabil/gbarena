import { ar } from './ar'
import { en } from './en'

import { NativeModules, Platform } from 'react-native'

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier

let rtl = deviceLanguage.search('ar') !== -1
export const translator = {
  dictionary: rtl ? ar : en,
  translate: (word) => translator.dictionary[word]
}
export default function isRTL(){
  return deviceLanguage.search('ar') !== -1
}
