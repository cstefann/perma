document.body.onload = addElement

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function addElement (json) {
  console.log("addelement", json)
  // parsing data
  if (json.id != undefined)
  {
    const id = json.id
    const image_path = json.id + ".jpg"
    const name = json.name
    const gender = json.gender
    const price = json.price
  
    // create a new div element
    const newDiv = document.createElement("div")
    newDiv.className = "item"
  
    // and give it some content  
    var img = document.createElement("img")
    var span = document.createElement("span")
    img.setAttribute("src", "../public/images/" + image_path)
    span.setAttribute("class","caption")
    span.textContent = name + " - " + gender + " - " + price
  
    // add the text node to the newly created div
    newDiv.appendChild(img)
    newDiv.appendChild(span)
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1")
    insertAfter(newDiv, currentDiv)
  }
}

function Utf8ArrayToStr(array) {
   var out, i, len, c
   var char2, char3

   out = ""
   len = array.length
   i = 0
   while(i < len) {
   c = array[i++]
   switch(c >> 4)
   { 
     case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
       // 0xxxxxxx
       out += String.fromCharCode(c)
       break
     case 12: case 13:
       // 110x xxxx   10xx xxxx
       char2 = array[i++]
       out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
       break
     case 14:
       // 1110 xxxx  10xx xxxx  10xx xxxx
       char2 = array[i++]
       char3 = array[i++]
       out += String.fromCharCode(((c & 0x0F) << 12) |
                      ((char2 & 0x3F) << 6) |
                      ((char3 & 0x3F) << 0))
       break
   }
   }

   return out
}

async function generate_products()
{
   // taking data from form (body)
   const body = {}

   await fetch('/products', {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body
      })
   }).then((res) => {
      if (res.status === 200) {
         res.body.getReader().read().then((data) => {
            const response = JSON.parse(Utf8ArrayToStr(data.value))
            // iterate through json object
            for(i = response.length - 1; i >= 0; i--){
              addElement(response[i])
          }
         })
      }
   })
}

generate_products()