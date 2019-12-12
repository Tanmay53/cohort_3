 var property = {
  name: "xyz",
  value: "random"
};
var name = "Soumik";
var value = "10,00,000";
function propertyUpdate() {
  if (property.name == undefined) {
    property.name = name;
  }
  if (property.value == undefined) {
    property.value = value;
  } else {
    property.name = name;
    property.value = value;
  }
  return property;
 }
 console.log(propertyUpdate(property, name, value));
