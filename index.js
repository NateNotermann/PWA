
console.log('hello world');



let installButton = document.createElement('button');
installButton.textContent = 'Download App';
installButton.style.fontWeight = 'bold';
installButton.style.backgroundColor = 'blue';
installButton.style.color = 'white';
installButton.style.padding = '10px 20px';
installButton.style.border = 'none';
installButton.style.borderRadius = '15px';
installButton.style.margin = '10px';



let prompt;

window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});


let installed = false;

installButton.addEventListener('click', async function(){
  prompt.prompt();
  let result = await prompt.userChoice;
  if (result && result.outcome === 'accepted') {
    console.log('accepted');
    installed = true;
}
console.log('app install  = ', installed );
})

// Append the install button to the body
const pwaPrompt = document.getElementById('pwaPrompt')

pwaPrompt.appendChild(installButton);



window.addEventListener('appinstalled', async function(e) {
    console.log(e);
    installButton.style.display = "none";
 });