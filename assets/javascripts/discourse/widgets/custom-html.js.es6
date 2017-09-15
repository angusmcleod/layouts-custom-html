import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('custom-html', {
  tagName: 'div.custom-html.widget-container',

  html() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $("div.custom-html").append(`<div>${this.siteSettings.layouts_custom_html}</div>`)
    })
    return '';
  }
})
