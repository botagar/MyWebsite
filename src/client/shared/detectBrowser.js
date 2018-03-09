import { detect } from 'detect-browser'
import compareVersions from 'compare-versions'

const detectBrowser = () => {
  const browser = detect()
  switch (browser && browser.name) {
    case 'chrome':
      compareVersions(browser.version, '62') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'firefox':
      compareVersions(browser.version, '57') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'edge':
      compareVersions(browser.version, '16') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    case 'ie':
      compareVersions(browser.version, '11') >= 0 ? console.log('Style: Grid-Old') : console.log('Style: Old')
      break
    case 'safari':
      compareVersions(browser.version, '10.3') >= 0 ? console.log('Style: Grid') : console.log('Style: Old')
      break
    default:
      console.log('not supported')
  }
}

export default detectBrowser
