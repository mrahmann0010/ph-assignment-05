1.  getElementById() is used to select an html element using the id attribute assigned to that element. - select 1

getElementsbyClassName() is used to select all the elements (a live html collection) that contain the same class. - can select multiple

querySelector() is used to select the first element that matches with the css selector. - select 1

querySelectorAll() is used to select all the elements that matches to passed css selector. - gives a static node list

2. to create a new element, we can do is -
   const newElement = document.createElement('div');
   newElement.textContent = 'Programming hero is joss';
   document.body.appendChild(newElement);

3. Event bubbling occurs when an event happens on a child element and propogates upper through its parent element to reach the root of document. It works - a. when an element is clicked b. it fires the target element c. then it bubbles up to each parent element until it reaches the document root.

4. Event delegation is JS means adding a single event listener to a parent element instead of adding multiple listeners to individual child element. Why it is useful - a. it decreases the number of event listeners in DOM b. It makes code cleaner and easy to maintain.

5. preventDefault() prevents the default behavior of browser for an event but does not stop event from bubbling. However, stopPropagation() does not prevent default behavior but stop the event from bubbling.
