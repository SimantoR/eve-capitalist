import "reflect-metadata";
import { DataSource, EntityManager } from "typeorm";
import { User } from "./entity/User";
import MarketPrice from "./entity/MarketPrice";

const m_dataSource = new DataSource({
    type: "sqlite",
    database: "market.sqlite",
    logging: false,
    entities: [MarketPrice],
    // migrations: [],
    // subscribers: [],
});

let isLoading = false;

function requestDBContext(): Promise<EntityManager> {
    return new Promise<EntityManager>((resolve, reject) => {
        if (m_dataSource.isInitialized)
            resolve(m_dataSource.manager);
        else if (isLoading) {
            while (true) {
                if (isLoading = false) {
                    resolve(m_dataSource.manager)
                    break;
                }
            }
        } else {
            m_dataSource.initialize()
                .then(({ manager }) => resolve(manager))
                .catch(reject)
                .finally(() => isLoading = false);

            isLoading = true;
        }
    });
}

export {
    requestDBContext,
    type DataSource,
    type EntityManager,
}