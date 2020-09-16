var $userForm = $('.userProfileFormContainer');
// Disable fields
$userForm.find('.architizer-read-only input:not([type="hidden"])').each(function() {
  $(this).attr('readonly', 'readonly');
});

// Append "Edit on Atchitizer" button
var owAuth = window.location.origin + '/a/account/redirecttothirdpartycorporateauthprovider'
var architizerDomain = 'https://architizer.com';
var architizerProfileHref = architizerDomain + '/login/?next=user_detail&sso_auth_url=' + encodeURIComponent(owAuth);
var editButton = '<a class="btn" href="' + architizerProfileHref + '">Edit in Architizer</a>';
$userForm.find('form button[type="submit"]').after(editButton).remove();

// Disable leave prompt
var isEventUnbound = false;
$userForm.find('form .btn-submit > a').first().click(function(e) {
  if (!isEventUnbound) {
    isEventUnbound = true;
    e.preventDefault()
    $(window).off('beforeunload');
    window.location.href = architizerProfileHref;
  }
});
