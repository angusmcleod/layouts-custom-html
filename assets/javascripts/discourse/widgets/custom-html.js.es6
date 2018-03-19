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
      let html = this.siteSettings.layouts_custom_html;

      const category = attrs.category;
      if (category && category.layouts_custom_html) {
        html = category.layouts_custom_html;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.custom-html").append(`<div class='contents'>${html}</div>`);
      });
      state.renderScheduled = true;
    }
    return '';
  }
});
