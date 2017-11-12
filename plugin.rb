# name: layouts-custom-html
# about: A custom html widget for use with Discourse Layouts
# version: 0.1
# authors: Angus McLeod

DiscourseEvent.on(:layouts_ready) do
  DiscourseLayouts::WidgetHelper.add_widget('custom-html', position: 'right', order: '1')
end
