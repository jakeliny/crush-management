import App from './app'; 
App.app.listen(process.env.PORT, () => console.log('servidor está rodando na porta 4200'));
// App.app.listen(4200, () => console.log('servidor está rodando na porta 4200'));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));
