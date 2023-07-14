import express from 'express';
const cors = require('cors');
import { mainHomoSapien } from '../ui/Main';

export default class Server {

    private port: number;
    private server: any;
    private static main: mainHomoSapien;
    
    constructor(port: number) {
        this.port = port;
        this.server = express();
        Server.main = new mainHomoSapien();
        this.server.use(express.json());
        this.server.use(cors());
    }
    
    public start(): Promise<boolean> {
        const that = this;
        return new Promise(function(resolve,reject) {
            try {
                that.server.post("/game", Server.postGame);
                that.server.listen(that.port, () => {
                    console.log("Server started successfully at port: "   + that.port);
                    resolve(true);
                } );
            } catch (error: any) {
                reject(error);
            }
        });
    }
    
    // Once the backend implementation is complete, this function can be finished.
    private static postGame(req: express.Request, res: express.Response) {
        let result: [boolean,any] = Server.main.parseAndEvaluateGame(req.body["userCode"]);
        if (result[0]) {
            res.status(200).json({"gameData": result[1]});
        } else {
            res.status(400).json(result[1]);
        }
    }

}