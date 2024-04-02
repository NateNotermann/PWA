
// CREATE BUTTON
// let installButton = document.createElement('button');
// installButton.textContent = 'Download App';
// installButton.style.fontWeight = 'bold';
// installButton.style.backgroundColor = 'blue';
// installButton.style.color = 'white';
// installButton.style.padding = '10px 20px';
// installButton.style.border = 'none';
// installButton.style.borderRadius = '15px';
// installButton.style.margin = '10px';

const installButton = document.getElementById('btnInstall2')

let prompt;
// SAVE EVENT LISTENING FOR LATER
window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});


// WHEN CLICKED PROMPT USER TO INSTALL
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

// APPEND BUTTON TO ELEMENT pwaPrompt
// const pwaPrompt = document.getElementById('myModal-content')
// pwaPrompt.appendChild(installButton);


// HIDE BUTTON AFTER INSTALL
window.addEventListener('appinstalled', async function(e) {
    // console.log(e);
    console.log('installed');
    installButton.style.display = "none";
    installButton.className = "btnInstall"
    installButton.id = 'btnInstall';
 });
 if(installed){
  installButton.style.display = "none";
}




// // ------- MODAL -------
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}





function isMobileDevice() {
  // Check if the user agent contains keywords indicative of mobile devices
  // console.log(navigator.userAgent);
  return /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  console.log("User is using a mobile device");
  mobileModal = true
  // buttonsDiv.style.display = 'flex';
  // mobileModalOn()
  // window.alert("This app works best on a computer browser.")
} else {
    mobileModal = false
  //   buttonsDiv.style.display = 'none';
  //   mobileModalOn()
  //   mobileModalOff()
  console.log("User is using a computer browser");
}