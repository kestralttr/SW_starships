# Starships

Starships is a fun attempt at recreating the look and feel of a datapad from the Star Wars universe.  A datapad is an iPad-like device that displays information for the user.

## Vision

While datapads in Star Wars video games and movies have differed in their design and feel, all tend emulate the franchise's goal to show futuristic technology in a way that seems familiar, perhaps even dated.  Of course, since the Star Wars movies come straight out of the 1980s, there is a practical reason for this.  But even with the more recent IP, this design rule has held solid.

For that reason, using this app could not feel like a sleek, out-of-this-world, purely digital experience, but instead would need to employ a sense of physicality.

## Styling

It's difficult to represent something physical within a browser, so the first obstacle was to create a dynamic border that would maintain an edge around the pseudo-screen.  In this fashion, the datapad would seem like something the user had picked up and was looking at.

The border was achieved by using fixed positioning, and by creating original assets in Photoshop.  Texturing, lighting effects, and stitching on the assets gives the look that the sides of the datapad are wrapped in some sort of exotic leather, harkening back to the Dark Forces HUD, which employed the same idea.

![Dark Forces](http://res.cloudinary.com/dzo2s4ovl/image/upload/v1487930964/dfslideb5_deq58a.png)

To ensure that the datapad's screen transmitted a similar feel, z-index and opacity settings are used to position a custom asset over all other screen elements.  The asset mimics CRT scan lines as would be seen on an older television, and is held in place via fixed positioning to maintain the illusion.

The home button borrows from smartphone product design, and emulates a physical click by modifying positioning and box-shadow settings upon clicking, by using the CSS 'active' selector.

To represent the data, Starships uses simple SVG elements and animations to match (what would have been) cutting edge graphics back when the first Star Wars movies were made.  These animations help the viewer stay interested in the information, but do not detract from the functional feel of the app.

## Functionality

As the main goal of the app is to emulate design, the type of data used was not important as long as it was numerical.  Since the datapad is found in Star Wars, it seemed only fitting to use technical data from the franchise's well-known starships.

AJAX calls are employed to a Star Wars API by clicking on the respective starship's corresponding image, and once the requested data is received, the React components update and allow the SVG animation to begin.

## Future Plans

This was an entertaining exploration in CSS and general styling, and I'd like to find more ways to emulate other technical readouts within the app.  The Star Wars API used in this app holds much more information about the Star Wars universe, and it would be an interesting challenge to find ways to represent data regarding planets, characters, vehicles, and other elements of the franchise.
