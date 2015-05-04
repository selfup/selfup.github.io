This is my first GitHub Pages Website!

Works on 4k monitors or Mobile. Very wide range!

I created the background images, wrote the HTML, and all of the Custom CSS.

I used Bootstrap and Font Awesome to make my website a bit more modern and very responsive.

--Current Known Bugs: 

    Safari on iPad Air 2 (This might be an issue with all iOS8 devices using Safari)
       - Background Image will not properly display

--Update:

    Reverted to simple black background for Mobile Devices
    Safari has trouble rendering the paragraph text
    Background still weird in landscape mode
    However portrait mode works fine on the iPad (text still has issues)
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

        - This makes it a bit large, but it looks fine for now

--Update 4:

    Enhanced background image
    Fixed all issues! Page load is good across all devices.
      - Great on iPad/Nexus 7/MacBook (Air, Pro)/Linux Laptop/Windows Laptop
        - Getting the hang of this!

--Update 5:

    Changed NavBar to be more "App" like
    Used pastel/neon colors to make it obvious
    Works GREAT on phones
    Might use a different icon set but for now this is great

--Update 6:

    Changed Navbar Icon Colors to match Website Theme
    Added some text in .jumbotron paragraph text

--Update 7: Ran into merge conflict after doing a major update 

    ALWAYS SYNC prior to making changes
    Lessoned learned LOL

--Update 8: Fixed Merge conflict! 

--Update 9: Navigation improvements

    No more blank space between footer and "Portfolio"
    Also removed unused CSS
    
--Update 10: Got rid of blue colors/overuse of white color

    No more blue
    Warmed everything up
    Got rid of Portfolio Header and changed Github/Excel icons to Red

--Update 11: Added a new section

    Added a new section called "Content"
    Linked it to the Cloud nav button
    2 minimal websites and 1 phone background
    Slowly building my portfolio
    
--Update 12: Added words to Nav Buttons

    Also changed mobile background
    Removed "Social" and "Content" Headers
    Looks strange on iPad but oh well
    Looks great on Mac/Android
    Have not tested 4k yet
    
--Update 13: Chenged Bootstrap "btn" appearance

    Made site a bit fresher
    No square vs. round
    Everything has similar design language
    
--Update 14: 

    Footer will dissapear until I can fix:
    The copyright text being underlined 
    when mouse is in the footer div
