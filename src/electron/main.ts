import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  if (isDev()) {
    // npm run dev:react를 한 상태에서 npm run dev:electron을 사용해야함
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'));
  }

  pollResources();
});
