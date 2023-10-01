export const CLIENT_ID = '65b3c999db80ac568989'
export const OAUTH_PROXY_URL = 'https://d2n.moe/github/oauth'

export const urlParam = new URL(location.href).searchParams

function loginWithGitHub() {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${location.href}&scope=user repo`;

}

// (async () => {
//     loginWithGitHub()
//     //login
//     const code = urlParam.get('code')
//     const token = await fetch(OAUTH_PROXY_URL + `?code=${code}`).then(p => p.text())
//
// })()


// function forkRepository(repo) {
//     fetch(`https://api.github.com/repos/${repo}/forks`, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${accessToken}`
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             forkedRepoFullName = data.full_name
//             alert('Repository forked successfully!');
//             // Upload files to the forked repository
//             uploadFiles(forkedRepoFullName)
//         })
//         .catch(error => console.error('Error forking repository:', error));
// }
//
// function uploadFiles(repoFullName) {
//     const imageFile = document.getElementById('imageFile').files[0];
//     const jsonFile = document.getElementById('jsonFile').files[0];
//
//     if (!imageFile || !jsonFile) {
//         alert('Please select both an image file and a JSON file.');
//         return;
//     }
//
//     // Upload image file to /data directory
//     uploadFile(repoFullName, 'data/image.jpg', imageFile);
//
//     // Upload JSON file to /data directory
//     uploadFile(repoFullName, 'data/data.json', jsonFile);
// }
//
// function uploadFile(repoFullName, filePath, file) {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//         const content = event.target.result.split(',')[1];  // Base64 encoded content
//         const fileContent = {
//             message: `Upload ${filePath}`,
//             content: content,
//             branch: 'main'
//         };
//
//         fetch(`https://api.github.com/repos/${repoFullName}/contents/${filePath}`, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(fileContent)
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('File uploaded:', data);
//                 alert('Files uploaded successfully!');
//             })
//             .catch(error => console.error('Error uploading file:', error));
//     };
//
//     reader.readAsDataURL(file);
// }

