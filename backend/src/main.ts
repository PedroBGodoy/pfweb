import DatabaseRepositoryFactory from "./infra/factory/DatabaseRepositoryFactory";
import ExpressHttp from "./infra/http/ExpressHttp";
import RoutesConfig from "./infra/http/RoutesConfig";

const http = new ExpressHttp();
const repositoryFactory = new DatabaseRepositoryFactory();
const routesConfig = new RoutesConfig(http, repositoryFactory);
routesConfig.build();
const port = process.env.PORT || 3000;
http.listen(+port);
