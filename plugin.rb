# name: layouts-custom-html
# about: A custom html widget for use with Discourse Layouts
# version: 0.2
# authors: Angus McLeod

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::Widget.add('custom-html', position: 'right', order: '1')
end

after_initialize do
  Site.preloaded_category_custom_fields << 'layouts_custom_html' if Site.respond_to? :preloaded_category_custom_fields
  add_to_serializer(:basic_category, :layouts_custom_html) { object.custom_fields['layouts_custom_html'] }
end
