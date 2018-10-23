/*
 * adapt-aboutUs
 * License - https://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chucklorenz@yahoo.com>
 * Code was based on adapt-contrib-glossary
 */
define(function(require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var AboutUsView = require('extensions/adapt-aboutUs/js/adapt-aboutUsView');

    function setupAboutUs(aboutUsModel, aboutUsItems, socialLinks) {

        var aboutUsModel = new Backbone.Model(aboutUsModel);
        var aboutUsCollection = new Backbone.Collection(aboutUsItems);
        var socialLinksCollection = new Backbone.Collection(socialLinks);

        Adapt.on('aboutUs:showAboutUs', function() {
            Adapt.drawer.triggerCustomView(new AboutUsView({
                model: aboutUsModel,
                collection: aboutUsCollection,
                sociallinks: socialLinksCollection
            }).$el);
        });

    }

    Adapt.on('adapt:start', function() {
        var courseAboutUs = Adapt.course.get('_aboutUs');

        if (courseAboutUs) {
            var drawerObject = {
                title: courseAboutUs.title,
                description: courseAboutUs.description,
                className: 'aboutus-drawer',
                drawerOrder: courseAboutUs._drawerOrder || 0
            };
            Adapt.drawer.addItem(drawerObject, 'aboutUs:showAboutUs');
            setupAboutUs(courseAboutUs, courseAboutUs._aboutUsItems, courseAboutUs._socialLinks);
        } else {
            console.log('The aboutUs extension is not configured in the course.json file.');
        }

    });

});
