import { detect } from 'detect-browser'
import compareVersions from 'compare-versions'

const detectBrowserCapabilities = () => {
  let browserCapabilities = {}
  const browser = detect()
  
  switch (browser && browser.name) {
    case 'chrome':
      compareVersions(browser.version, '62') >= 0 ? browserCapabilities.class = 'modern' : browserCapabilities.class = 'outdated'
      break
    case 'firefox':
      compareVersions(browser.version, '57') >= 0 ? browserCapabilities.class = 'modern' : browserCapabilities.class = 'outdated'
      break
    case 'edge':
      compareVersions(browser.version, '16') >= 0 ? browserCapabilities.class = 'modern' : browserCapabilities.class = 'outdated'
      break
    case 'ie':
      compareVersions(browser.version, '11') >= 0 ? browserCapabilities.class = 'semi-modern' : browserCapabilities.class = 'outdated'
      break
    case 'safari':
      compareVersions(browser.version, '10.3') >= 0 ? browserCapabilities.class = 'modern' : browserCapabilities.class = 'outdated'
      break
    default:
      browserCapabilities.class = 'unknown'
  }

  if (window && window.navigator) {
    let navigator = window.navigator
    browserCapabilities.cookiesEnabled = navigator.cookieEnabled
    browserCapabilities.languages = navigator.languages
    browserCapabilities.mediaDevices = navigator.mediaDevices
    browserCapabilities.permissions = navigator.permissions
    browserCapabilities.online = navigator.onLine
    browserCapabilities.userAgent = navigator.userAgent
    browserCapabilities.localStorage = navigator.localStorage
    browserCapabilities.sessionStorage = navigator.sessionStorage
  }

  return browserCapabilities
}

export default detectBrowserCapabilities
