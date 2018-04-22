import { Request, Response } from 'express';
import * as Nano from "nano";
const nano: Nano.ServerScope = <Nano.ServerScope>Nano('http://localhost:5984');

// const testDB = Nano('http://localhost:5984/test');

const testDB: Nano.DocumentScope<{}> = nano.db.use('test');
const nanoInstance: Nano.DocumentScope<{}> = nano.db.use('test2');

export let root = (req: Request, res: Response) => {
    res.status(200).jsonp({ message: 'root couchDB' });
};

export let getAllDb = (req: Request, res: Response) => {
    nano.db.list((err, body)=> {
        if(err){
            res.status(500).jsonp({'err': err});
        }else{
            res.status(200).jsonp({ listOfDbs: body });
        }
    });
};

export let data = (req: Request, res: Response) => {
    testDB.get('aa869626ac04b62e5c2784717b000ece', (err, body) =>{
        if(err){
            res.status(500).jsonp({'err': err});
        }else{
            res.status(200).jsonp({ 'data':body });
        }
    });
};

export let data2 = (req: Request, res: Response) => {
    nanoInstance.get('simplilearn', (err, body) =>{
        if(err){
            res.status(500).jsonp({'err': err});
        }else{
            res.status(200).jsonp({ 'data2':body });
        }
    });
};

export let combineData = (req: Request, res: Response) => {
    testDB.get('aa869626ac04b62e5c2784717b000ece', (err, body) =>{
        if(err){
            res.status(500).jsonp({'err': err});
        }else{
            nanoInstance.get('simplilearn', (err, body2) =>{
                if(err){
                    res.status(500).jsonp({'err': err});
                }else{
                res.status(200).jsonp({ 'data':body,'data2':body2 });
                }
            });
        }
        
    });
};
