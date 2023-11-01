let tablinks=document.getElementsByClassName('tab-links');
let tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}
/* Here is how it is working
The code you've provided is a JavaScript function called opentab that appears to be designed to handle tabbed content. It seems like it's part of a tabbed interface where users can click on tab links to display different content in a designated tab.

Let's break down how this function works step by step:

Function Definition:
You've defined a function called opentab which takes one argument, tabname. This argument represents the name of the tab (or tab content) that you want to open.

Removing Active Classes:
In the first part of the function, it loops through all the elements with the class name tablinks and removes the class active-link from each of them. It also does the same for elements with the class name tabcontents by removing the active-tab class. This is usually done to reset the state and remove any previously active tabs.

Adding Active Classes:
After removing the active classes from all the tab links and content, it then adds the active-link class to the element that triggered the function, which is represented by event.currentTarget. This is typically the tab link that the user clicked, indicating that it is the currently active tab.

Displaying the Selected Tab Content:
Finally, it uses document.getElementById(tabname) to select the tab content with the id matching the tabname provided as an argument to the function. It then adds the active-tab class to this selected tab content, which typically makes it visible and activates it.

In summary, this function is designed to switch between tabs by adding and removing CSS classes to control the visibility and appearance of the tab links and their associated content. It uses the active-link and active-tab classes to indicate which tab is currently active and display the corresponding content. To use this function, you would typically call it when a user clicks on a tab link, passing the tabname as an argument to specify which tab should be opened.
*/

