I have ticked all the boxes aside from one - if selected event active state changes to 'false', it remains in the selected group.  I could not suss that bit out.

Events may be selected/deselected by clicking.  Inactive events are not clickable and this is represented by a grey background.

Store is managed by Redux and Websocket utilises React Context.

**TODO** 
* WRITE TESTS.  I have to be somewhere in 15 minutes and need to bounce.  The event state thing got stuck in.
* Remove selected events from list when event state switches to inactive.

Fixes to server: 
* `selectionPriceChange` sent price instead of ID.  Since been corrected.  Also, updated to generate proper random numbers.
* `selectionStateChange` no longer sends updated price.

#
To run the project Install project packages:

    npm install

Run frontend:

    npm run start:react (localhost:3000)

Run nodejs:

    npm run start:server (localhost:3001)
