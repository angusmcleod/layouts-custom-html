import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('custom-html', {
  tagName: 'div.custom-html',

  html() {
    return new RawHtml({ html: this.siteSettings.layouts_custom_html })
  }
})
