# Lab 5 - Starter

Edward Lin

1. I would not use a unit test to test the "message" feature of a messaging application. There are a lot of moving parts regarding a "message" feature. For example, getting the sender's message, sending it to a server, the server sending the message to the other user, and then the application displaying the message sent. Changing other app features are likely to affect this as well as there are too many moving parts to sending a message.

2. I would use a unit test to test the "max message length" feature of a messaging application. There are very few moving parts to this feature it only checks if a message's length exceeds the max message length. It's able to execute quickly and changing the other app features will likely not affect how the feature checks for the length of a message. 