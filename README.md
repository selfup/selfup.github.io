This is my first GitHub Pages Website!

Everything is copyrighted to me. I created the background images, wrote a lot (90%) of the HTML and all of the Custom CSS.

I used Bootstrap and Font Awesome to make my website a bit more modern and very responsive.

--Current Known Bugs:

    Safari on iPad Air 2 (This might be an issue with all iOS8 devices using Safari)
       - Background Image will not properly display

--Update:

    Reverted to simple black background for Mobile Devices. Safari has trouble rendering the paragraph text.
    Background still weird in landscape mode, however potrait mode works fine on the iPad (text still has some issues)
      - Will find a fix for this soon

--Update2:

    Fixed Font Issue!
    Still working on Image Issue
      - Messing around with media queries

--Update3:

    Fixed Background Issue with Safari on iPad Air 2
    Picture is a bit huge/blurry but it will do for now :)
      - Still debating if I should keep black backgrounds for phones or not

      .jumbotron {
        text-align: center;
        position: relative;
        height: 100%;
        background-image: url("../images/selfupdiv3.jpg");
        background-color: black;
        background-repeat: no-repeat;
        background-attachment: fixed !important;
        background-position: center;
        background-size: cover !important;
        color: white;
      }

      - The fix was: "background-size: cover !important;"
        -This makes it a bit large, but it looks fine for now
