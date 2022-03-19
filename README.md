# EVENT SHEDULER APPLICATION 

Build a scheduler in JS with NodeJS framework and a script to run it for 10 events.

### EJS TEMPLATING

I used Embedded Javascript Templating it is a templating engine used by Node.js. The template
engine helps to create an HTML template with minimal code. Also, it can inject data into
HTML template at the client-side and produce the final HTML.

### APPROACH

Firstly I create a database and store 10 events. My key in my Schema is text and Date-Time.
On the client-side, I created an input box for adding the text and an option to select one of the 
events out of the ten. User can add text and select the event date and time and when they click on the submit
button scheduler trigger a function that searches for that event in the database. I used the findOne method of mongoose
to find the item in the database. When an item is found in the database a set timeout function trigger which takes to an argument
The first is a function for reversing the text of the user and the Second is a text length time duration. When set timeout expired, 
I render a Reverse component with the user reverses text. And I created a home button for users to go back to the index component.

### PROBLEM & SOLUTION 

I am not using react so firstly I don't know how to render a different component on the same route but I try a different technique
and finally, I am able to render a reverse component to show the result or reverse of the text to the user.


