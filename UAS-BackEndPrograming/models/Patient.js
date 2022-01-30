// TODO 5: SETUP MODEL

const res = require("express/lib/response");
const db = require("../config/database");



class Patient {
    static all() {
        return new Promise((resolve, reject) => {
            
            const sql = "SELECT * FROM patients";
            db.query(sql, (err, results) => {
                resolve(results);
            }); 
        });        
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) =>{
            
            const sql = 'INSERT INTO patients SET ?'
            db.query(sql,data,(err,results) => {
                resolve(results.insertId);
            });
        });

        return new Promise((resolve, reject) => {
            
            const sql = 'SELECT * FROM patients WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results);
            });
        });
    }

    static find(id) {
        
        return new Promise((resolve, reject) => {
            
            const sql = 'SELECT * FROM patients WHERE id = ?'
            db.query(sql,id,(err,results) => {
                resolve(results[0]);
            });
        });
    }

    static search(name) {
        
        return new Promise((resolve, reject) => {
            
            const sql = 'SELECT * FROM patients WHERE name = ?'
            db.query(sql,name,(err,results) => {
                
                resolve(results);
            });
        });
    }

    static findByStatus(status) {
        
        return new Promise((resolve, reject) => {
            
            const sql = 'SELECT * FROM patients WHERE status = ?'
            db.query(sql,status,(err,results) => {
                
                resolve(results);
            });
        });
    }

    static async update(id, data) {
        
        await new Promise ((resolve, reject) => {
            
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                (resolve(results));
            });
        });

        
        const patient = await this.find(id);
        return patient;
    }

    static delete(id) {
        
        return new Promise ((resolve, reject) => {
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
} 


module.exports = Patient;