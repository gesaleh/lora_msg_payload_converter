# lora payload message converter
This is an example of function that decode lora bytes message to sendML
if you are using loraserver [brocaar](https://github.com/brocaar/loraserver) and want to add a payload bytes to senML conversion then you need to follow this steps
create an application 
in application configuration you have the choice 
1. None
2. CayenneLPP
3. Custom JavaScript

Use "Custom JavaScript" using this option you can write your own payload decoder (device->server) and encoder (server->device)

Check [Example](https://github.com/gesaleh/lora_msg_payload_converter/blob/master/decoder.js) 
