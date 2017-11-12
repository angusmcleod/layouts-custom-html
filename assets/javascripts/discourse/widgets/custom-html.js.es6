import { createWidget } from 'discourse/widgets/widget';

export default createWidget('custom-html', {
  tagName: 'div.custom-html.widget-container',
  buildKey: () => 'custom-html',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    if (!state.renderScheduled) {
      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.custom-html").append(`<div class='contents'>${this.siteSettings.layouts_custom_html}</div>`);
      });
      state.renderScheduled = true;
    }
    return '';
  }
});
