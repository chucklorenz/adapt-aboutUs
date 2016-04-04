/*
 * adapt-aboutUsSocialLinksView
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chucklorenz@yahoo.com>
 * Code was based on adapt-contrib-glossary
 */
define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('coreJS/adapt');

    var AboutUsSocialLinksView = Backbone.View.extend({

        className: "aboutus-item",

        initialize: function() {
            this.render();
        },

        render: function() {
            var modelData = this.model;
            var template = Handlebars.templates["aboutUsSocialLinks"];
            this.$el.html(template(modelData));
            _.defer(_.bind(function() {
                this.postRender();
            }, this));
            return this;
        },

        postRender: function() {
            this.listenTo(Adapt, 'drawer:openedItemView', this.remove);
            this.listenTo(Adapt, 'drawer:triggerCustomView', this.remove);
        }

    });

    return AboutUsSocialLinksView;
});
