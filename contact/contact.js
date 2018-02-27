let contactArray = ["John Cotton", "555-5555", "email@example.com",]
contactArray[3] = "A new Item"
contactArray[4] = "johncotton.us"

function addContent(array){
  console.log(array)
  $("#contact-array").append("<li>" + array + "</li>");
}

contactArray.forEach(addContent)