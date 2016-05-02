module.exports = {
  'Demo Test': function(browser) {
    browser
      .url(browser.launch_url)
      .execute('/*@screener.snapshot*/', ['Home'])
      .end();
  }
};
