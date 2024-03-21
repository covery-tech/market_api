import { envs } from "./config"
import { MysqlDatabase } from "./data/mysql/mysql-database"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"






(()=>{
    main()
})()


async function main () {

    await MysqlDatabase.connect()

    new Server({
        port:envs.PORT,
        routes: AppRoutes.routes
    })
        .start()
}