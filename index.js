
const ecc = require('eosjs-ecc')

function generate()
{
// function to generate Public key and Private key
ecc.randomKey().then(privateKey => {
    console.log('Private Key:\t', privateKey) // wif
    console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
    window.alert("Private Key:"+ privateKey +"\n" +"Public Key:" +"\n"+ ecc.privateToPublic(privateKey));

});

}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('gen').onclick = generate
  })
  