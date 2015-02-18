/*
 * adapt-aboutUsItemView
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chucklorenz@yahoo.com>
 * Code was based on adapt-contrib-glossary
 */
define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('coreJS/adapt');

    var AboutUsItemView = Backbone.View.extend({

        className: "aboutus-item",

        events: {
            'click a.aboutus-item-open': 'onAboutUsItemClicked'
        },

        initialize: function() {
            this.setupModel();
            this.listenTo(Adapt, 'aboutUs:descriptionOpen', this.descriptionOpen);
            this.model.on('change:_isVisible', this.onAboutUsItemVisibilityChange, this);
            this.render();
        },

        setupModel: function() {
            this.model.set({
                '_isVisible': true,
                '_isDescriptionOpen': false
            });
        },

        render: function() {
            var modelData = this.model.toJSON();
            var template = Handlebars.templates["aboutUsItem"];
            this.$el.html(template(modelData));
            _.defer(_.bind(function() {
                this.postRender();
            }, this));
            return this;
        },

        postRender: function() {
            this.listenTo(Adapt, 'drawer:openedItemView', this.remove);
            this.listenTo(Adapt, 'drawer:triggerCustomView', this.remove);
        },

        onAboutUsItemClicked: function(event) {
            event.preventDefault();
            Adapt.trigger('aboutUs:descriptionOpen', this.model.cid);
            this.toggleAboutUsItemDescription();
        },

        toggleAboutUsItemDescription: function() {
            if(this.model.get('_isDescriptionOpen')) {
                this.hideAboutUsItemDescription();
            } else {
                this.showAboutUsItemDescription();
            }
        },

        showAboutUsItemDescription: function() {
            this.$('.aboutus-item-description').slideDown(200);
            this.model.set('_isDescriptionOpen', true);
        },

        hideAboutUsItemDescription: function() {
            this.$('.aboutus-item-description').stop(true, true).slideUp(200);
            this.model.set('_isDescriptionOpen', false);
        },

        descriptionOpen: function(viewId) {
            if(viewId != this.model.cid && this.model.get('_isDescriptionOpen')) {
                this.hideAboutUsItemDescription();
            }
        },

        onAboutUsItemVisibilityChange: function() {
            if(this.model.get('_isDescriptionOpen')) {
                this.hideAboutUsItemDescription();
            }
            if(this.model.get('_isVisible')) {
                this.$el.removeClass('display-none');
            } else {
                this.$el.addClass('display-none');
            }
        }

    });

    return AboutUsItemView;
});