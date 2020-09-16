$(function() {
  var useArchitizerStyle = function () {
    $('html').addClass('adk-ow');
  }

  var spreadMyAccountMenu = function () {
    var $navList = $('nav#site-navigation > .nav-menu > ul');
    var $myAccount = $navList.find('li:contains(My Account)');
    // Ignore redundant Home
    var $myAccountSubMenuItems = $myAccount.find('> ul > li:not(:contains(Home))');
    // Pull Log Out to the right
    var $logout = $myAccount.find('li:contains(Log Out)');
    $logout.addClass('pull-right');
    // Create a sub-menu under My Application
    var $myApplications = $myAccount.find('li:contains(My Applications)');
    var $myApplicationsList = $('<ul></ul>');
    var allApplicationsNumber = '(0)';

    $myAccountSubMenuItems.each(function (i, item) {
      var $item = $(item);
      var isApplicationItem = $item.find('a:contains("("):contains(")")');

      if (isApplicationItem.length) {
        if ($item.find('a:contains(All)').length){
          var groups = $item.find('a').text().match(/(\(\d+\))/);

          if (groups && groups.length) {
            allApplicationsNumber = groups[0];
          }
        }

        $item.detach().appendTo($myApplicationsList);
      }
    });
    $myApplications.append($myApplicationsList).find(' > a').append(' ' + allApplicationsNumber);

    $myAccountSubMenuItems = $myAccount.find('> ul > li:not(:contains(Home))');
    $myAccountSubMenuItems.detach().appendTo($navList);
    $myAccount.detach();
  }

  var handleMobileMenu = function() {
    $('.mobile_nav').on('click', function() {
      $(this).toggleClass('toggled');
      $('.nav-menu > ul').slideToggle();
    });
  }

  var handleSubMenus = function() {
    $('.nav-menu li').each(function() {
      var dropdownLink = $(this).find('ul').first().siblings('a');
      if (dropdownLink.length) {
        dropdownLink.addClass('dropdown');
        $(this).off().on('click', function() {
          dropdownLink.toggleClass('toggled').siblings('ul').toggleClass('toggled');
        });
      }
    });
  };

  var populateArchitizerUsername = function () {
    var owAuth = window.location.origin + '/a/account/redirecttothirdpartycorporateauthprovider'
    var architizerDomain = 'https://architizer.com';
    var architizerProfileHref = architizerDomain + '/login/?next=user_detail&sso_auth_url=' + encodeURIComponent(owAuth);

    var name = window.currentUser ? window.currentUser.fullName : '';
    $('#architizer-username').text(name).attr('href', architizerProfileHref);
  };

  var replaceFormBreadcrumbIcons = function () {
    var formBreadcrumb = $('.formBuilderFormBreadCrumb');
    formBreadcrumb.addClass('adk').find(' > ul > li:not(:last) > img.breadCrumbSeparator').each(function(i, item) {
      $(item).parent().append('<span class="material-icons quicksilver-200" style="margin-top: -12px;">keyboard_arrow_right</span>');
      $(item).detach();
    });
  };

  useArchitizerStyle();
  spreadMyAccountMenu();
  handleMobileMenu();
  handleSubMenus();
  populateArchitizerUsername();
  setTimeout(replaceFormBreadcrumbIcons);
});
