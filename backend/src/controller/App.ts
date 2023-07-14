import Server from '../rest/Server';

export class App {
    public initServer(port: number) {
        const server = new Server(port);
        server.start().then((res: boolean) => {
            console.log("server started successfully from app");
        }).catch((err: any) => {
            console.log("Error occurred: " + err);
        });
    }
}


const app = new App();

app.initServer(3300);