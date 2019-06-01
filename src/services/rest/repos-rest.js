import axios from 'axios';

export class ReposRest {

    static getRepos(){
        return new Promise((resolve, reject) => {
            axios.get("https://api.github.com/repositories").then(res => {
                resolve(res.data);
           }, reject)   
          });
       
    }

}

