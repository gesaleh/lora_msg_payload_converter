// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
// The function must return an object, e.g. {"temperature": 22.5}
function Decode(fPort, bytes) {
 var decoded = {};
 var tmp_object = {};
 var object_array =  [];
  

 if (bytes.length >= 2) {
      tmp_object = {};
     	tmp_object.n = "WiFi";
     	tmp_object.v = (bytes[i++] << 8) | bytes[i++];
     	tmp_object.bn = "ExampleCounter";
     	object_array.push(tmp_object);
      
    	decoded = object_array;
  }
  return decoded;
}
