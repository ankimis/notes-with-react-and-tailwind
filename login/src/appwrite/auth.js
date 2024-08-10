// import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";
export class AuthServices{
    client =  new Client();
    account;
    constructor(){
        
        this.account=new Account(this.client);
        this.client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65c6e5475ad67b4744d2")
    }

    async creatAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
            // calll anothermathod
            // return userAccount;
            return this.login(email,password)
           }
           else{
            return userAccount;
           }
            
        } catch (error) {
            throw error;
        }
        
    }
    async login(email,password){
        try {
         return   await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getCurrnetUser(){
        try {
              const res=await this.account.getPrefs(); 
              return res;         
            
        } catch (error) {
            console.log('getCurrentUSer :: ',error);
        }
        return null
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('ApWriteLogout::',error)
        }
    }
    
}

const authService = new AuthServices();
export default authService;