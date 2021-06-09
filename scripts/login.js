const form = document.getElementById('login-form')

form.addEventListener('submit', login_user)

function Utf8ArrayToStr(array) {
   var out, i, len, c;
   var char2, char3;

   out = "";
   len = array.length;
   i = 0;
   while(i < len) {
   c = array[i++];
   switch(c >> 4)
   { 
     case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
       // 0xxxxxxx
       out += String.fromCharCode(c);
       break;
     case 12: case 13:
       // 110x xxxx   10xx xxxx
       char2 = array[i++];
       out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
       break;
     case 14:
       // 1110 xxxx  10xx xxxx  10xx xxxx
       char2 = array[i++];
       char3 = array[i++];
       out += String.fromCharCode(((c & 0x0F) << 12) |
                      ((char2 & 0x3F) << 6) |
                      ((char3 & 0x3F) << 0));
       break;
   }
   }

   return out;
}

async function login_user(event)
{
   event.preventDefault()

   // taking data from form (body)
   const username = document.getElementById('username').value
   const password = document.getElementById('password').value

   await fetch('/user/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         username,
         password
      })
   }).then((res) => {
      if (res.status === 201) {
         res.body.getReader().read().then((data) => {
            const response = JSON.parse(Utf8ArrayToStr(data.value))
            window.location.href = `http://localhost:5000${response.route}`;
         })
      }
   })
}