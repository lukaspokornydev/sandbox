// js for tabs
     // function to remove show-active class & add to clicked
     function setActiveContent(el) {
      // select all .content-body
      var contentBodies = document.getElementsByClassName('content-body');
      // remove .show-active
      for (var contentBody of contentBodies) {
          contentBody.classList.remove('show-active');
      }
      // add .show-active (back) to clicked 
      document.
          getElementById(el.textContent.trim())
          .classList.add('show-active');
  }

  function setActiveTab(el){
      var tabs = document.getElementsByClassName('tab');
      for (var tab of tabs) {
          tab.classList.remove('tab-active');
      }
      el.classList.add('tab-active');
  }

  // select .tab class, and loop through
  var tabs = document.getElementsByClassName('tab');
  for (var tab of tabs) {
      // add click listener to each tab
      tab.addEventListener('click', function(e) {
          setActiveContent(e.currentTarget);
          setActiveTab(e.currentTarget);
      })
  }