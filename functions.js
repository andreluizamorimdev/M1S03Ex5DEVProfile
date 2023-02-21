let profileAvatar = document.getElementById('avatar');
let profileName = document.getElementById('profileName');
let profileBio = document.getElementById('profileBio');
let profileEmail = document.getElementById('profileEmail');
let profileRepos = document.getElementById('profileRepos');
let profileGithubUrl = document.getElementById('profileGithubUrl');
let profileTwitter = document.getElementById('profileTwitter');

async function getProfileGithub() {
    const response = await fetch('https://api.github.com/users/andreluizamorimdev');
    const data = await response.json();
    
    profileAvatar.src = data?.avatar_url;
    profileName.innerHTML = data?.name;
    profileBio.innerHTML = data?.bio;
    if(data?.email != null ) {
        profileEmail.innerHTML = data?.email;
    } else {
        profileEmail.innerHTML = "andreluizamorim.dev@gmail.com";
    }
    profileRepos.innerHTML = data?.public_repos
    profileGithubUrl.href = data?.html_url
    profileTwitter.href = `https://www.twitter.com/${data?.twitter_username}`

}
getProfileGithub();