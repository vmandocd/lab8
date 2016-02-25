function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  console.log(response);
  $('.facebookLogin').hide();
  console.log(response.name);
  $('#name').text(response.name);
  $('#photo').attr('src', 'https://scontent.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/p480x480/11825012_1112976258716087_4940428464864018135_n.jpg?oh=3507e96e4bc28a8e862e8cdcf400e0c1&oe=57549618');
}