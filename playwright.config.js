const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node -e "require(\'http\').createServer((q,s)=>{const fs=require(\'fs\'),path=require(\'path\');let f=path.join(process.cwd(),decodeURIComponent(q.url.split(\'?\')[0]));if(f.endsWith(path.sep))f+=\'index.html\';if(!f.startsWith(process.cwd())){s.statusCode=403;return s.end()}fs.readFile(f,(e,b)=>{if(e){s.statusCode=404;return s.end(\'Not found\')}s.setHeader(\'Content-Type\',f.endsWith(\'.css\')?\'text/css\':f.endsWith(\'.js\')?\'text/javascript\':\'text/html; charset=utf-8\');s.end(b)})}).listen(4173,\'127.0.0.1\')"',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 15000
  }
});
