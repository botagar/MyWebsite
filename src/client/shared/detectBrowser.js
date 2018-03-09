import { detect } from 'detect-browser'
import compareVersions from 'compare-versions'

const detectBrowserCapabilities = () => {
  let browserCapabilities = {}
  const browser = detect()
  
  switch (browser && browser.name) {
    case 'chrome':
      compareVersions(browser.version, '62') >= 0 ? browserCapabilities.Class = 'modern' : browserCapabilities.Class = 'outdated'
      break
    case 'firefox':
      compareVersions(browser.version, '57') >= 0 ? browserCapabilities.Class = 'modern' : browserCapabilities.Class = 'outdated'
      break
    case 'edge':
      compareVersions(browser.version, '16') >= 0 ? browserCapabilities.Class = 'modern' : browserCapabilities.Class = 'outdated'
      break
    case 'ie':
      compareVersions(browser.version, '11') >= 0 ? browserCapabilities.Class = 'semi-modern' : browserCapabilities.Class = 'outdated'
      break
    case 'safari':
      compareVersions(browser.version, '10.3') >= 0 ? browserCapabilities.Class = 'modern' : browserCapabilities.Class = 'outdated'
      break
    default:
      browserCapabilities.Class = 'unknown'
  }

  return browserCapabilities
}

export default detectBrowserCapabilities
