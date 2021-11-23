import GetItems from "../../application/get-items/GetItems";
import GetOrder from "../../application/get-order/GetOrder";
import PlaceOrder from "../../application/place-order/PlaceOrder";
import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import Http from "./Http";

export default class RoutesConfig {
    http: Http;
    repositoryFactory: RepositoryFactory;

    constructor (http: Http, repositoryFactory: RepositoryFactory) {
        this.http = http;
        this.repositoryFactory = repositoryFactory;
    }

    build () {
        this.http.filter(async (params: any, body:  any, metadata: any) => {
            console.log("Log", new Date(), metadata.method, metadata.url);
            return true;
        });

        this.http.on("get", "/orders/${code}", async (params: any, body: any) => {
            const getOrder = new GetOrder(this.repositoryFactory);
            const order = await getOrder.execute(params.code);
            return order;
        });

        this.http.on("post", "/orders", async (params: any, body: any) => {
            const placeOrder = new PlaceOrder(this.repositoryFactory);
            body.issueDate = new Date(body.issueDate);
            const order = await placeOrder.execute(body);
            return order;
        });

        this.http.on("get", "/items", async (params: any, body: any) => {
            const getItems = new GetItems(this.repositoryFactory);
            const items = await getItems.execute();
            return items;
        });
    }
}
