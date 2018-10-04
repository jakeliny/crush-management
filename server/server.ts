import App from './app';
App.app.listen(process.env.PORT, () => console.log('servidor está rodando na porta: ' + process.env.PORT));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));
