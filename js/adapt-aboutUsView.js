/*
 * adapt-aboutUsView
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chucklorenz@yahoo.com>
 * Code was based on adapt-contrib-glossary
 */
define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('coreJS/adapt');
    var AboutUsItemView = require('extensions/adapt-aboutUs/js/adapt-aboutUsItemView');
    var SocialLinksView = require('extensions/adapt-aboutUs/js/adapt-aboutUsSocialLinksView');

    var AboutUsView = Backbone.View.extend({

        className: "aboutus",

        initialize: function() {
            this.listenTo(Adapt, 'remove', this.remove);
            //this.listenTo(Adapt, 'device:changed', this.resizeImage);
            this.render();
        },

        render: function() {
            var modelData = this.model.toJSON();
            var template = Handlebars.templates["aboutUs"];
            this.$el.html(template(modelData));
            var $aboutUsItemContainer = this.$('.aboutus-items-container').empty();
            this.renderAboutUsItems($aboutUsItemContainer);
            this.renderSocialLinks($aboutUsItemContainer);
            _.defer(_.bind(function() {
                this.postRender();
            }, this));
            return this;
        },

        renderAboutUsItems: function(container) {
            _.each(this.collection.models, function(item, index) {
                new AboutUsItemView({model: item}).$el.appendTo(container);
            }, this);
        },

        renderSocialLinks: function(container) {
            new SocialLinksView({model: Adapt.course.get('_aboutUs')._socialLinks}).$el.appendTo(container);
        },

        postRender: function() {
            this.listenTo(Adapt, 'drawer:openedItemView', this.remove);
            this.listenTo(Adapt, 'drawer:triggerCustomView', this.remove);
            //this.resizeImage(Adapt.device.screenSize);
        }

        //resizeImage: function(width) {
        //    var src = this.$('.aboutus-header-container img').attr('data-' + width);
        //    this.$('.aboutus-header-container img').attr('src', src);
        //}

    });

    return AboutUsView;
});
