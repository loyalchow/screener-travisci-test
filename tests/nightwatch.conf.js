module.exports = {
  src_folders: [__dirname + '/scripts'],
  test_settings: {
    default: {
      launch_url: 'http://' + process.env.BRANCH + '.127.0.0.1.xip.io:8080/',
      selenium_port: 80,
      selenium_host: 'hub.screener.io',
      desiredCapabilities: {
        browserName: 'chrome',
        build: process.env.TRAVIS_BUILD_NUMBER,
        screener: {
          name: 'Demo Test',
          apiKey: process.env.SCREENER_API_KEY,
          group: process.env.SCREENER_GROUP_ID,
          resolution: '1280x1024',
          environment: process.env.BRANCH
        }
      }
    }
  }
};
