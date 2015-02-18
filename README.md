#adapt-aboutUs

An Adapt extension that adds to the Drawer information about the sponsoring organization.
![An example of the aboutUs extension.](https://github.com/chucklorenz/adapt-aboutUs/raw/master/clip.png "example aboutUs")

##In Progress

It works, but not yet ready for installation through the authoring tool. Hasn't been thoroughly tested, but then again, it's not too complex.

##Issues

- Installation requires the included fonts to be moved manually to adapt/css/fonts. (Issue [#538](https://github.com/adaptlearning/adapt_framework/issues/538) requests that the Adapt framework include a grunt task accomplish this.)
- Accessibility has not been addressed.

##Usage

This extension adds an item to the Drawer. All text is replaceable/customizable. Graphic/logo that appears in front of the organization is optional. Social links are optional, but are restricted to the icons available within the extension (see list below). Between the name of the organization and the social links, any number of title/description items maybe configured. The above titles ("Our Mission," "Contact Us," "Find Us," "Partner with Us") are simply examples. What is seen in the image above is simply an example.

##Settings overview

An complete example of this extension's settings can be found in the [example.json](https://github.com/chucklorenz/adapt-aboutUs/blob/master/example.json) file. These settings are to be configured in the `course.json` file.

####_aboutUs

The name of the extension object as used in the `course.json` file.

####title, description

The short texts that appear when the Drawer opens. They link to the example view seen in the image above.

####_graphic

The optional image that appears to the left of the organization's name (i.e., the `headline`). An example image is included (ex-logo.png). Its dimensions are 30px x 30px.

>#####src
>The path to the image. If it is not provided, no image will be displayed.
>#####alt
>The content of image's `alt` attribute.
>#####title
>The content of image's `title` attribute.



##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-aboutUs




