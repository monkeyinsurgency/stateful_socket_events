I ran out of time on this.  I'm on the right path, but didn't complete the task.

I rendered out the event tree just fine, had a good idea of what to do, but this is my first exposure to WebSockets and there was more of a learning curve than I expected when it came to integrating WS with Redux.

I'm dispatching from WS fine; I think I have overlooked hooking up an action correctly as Redux state does not seem to be updating, and with the clock running out I feel it's best to show the progress where it stands and submit for review.

Store is managed by Redux and Websocket utilises React Context.

#
To run the project Install project packages:

    npm install

Run frontend:

    npm run start:react (localhost:3000)

Run nodejs:

    npm run start:server (localhost:3001)
