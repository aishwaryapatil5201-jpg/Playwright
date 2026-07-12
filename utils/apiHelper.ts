import { APIRequestContext } from "@playwright/test";

export class ApiHelper {

    constructor(private request: APIRequestContext){}

    async getProducts(){

        return await this.request.get("/productsList");

    }

    async createUser(data:any){

        return await this.request.post("/createAccount",{

            form:data

        });

    }

}