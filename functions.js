let profileAvatar = document.getElementById('avatar');
let profileName = document.getElementById('profileName');
let profileBio = document.getElementById('profileBio');

async function getProfileGithub() {
    const response = await fetch('https://api.github.com/users/andreluizamorimdev');
    const data = await response.json();
    
    profileAvatar.src = data?.avatar_url;
    profileName.innerHTML = data?.name;
    profileBio.innerHTML = data?.bio;
}
getProfileGithub();