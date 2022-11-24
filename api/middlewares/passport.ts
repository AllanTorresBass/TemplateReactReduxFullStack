import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"
import config from "../config/config"
import { User_Reg } from "../src/models/User_Reg"

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
export default new Strategy(opts, async (payload: any, done: any) => {

    try {
        const user = await User_Reg.findByPk(payload.id)
        if (user) {
            return done(null, user)
        }
        return done(null, false)

    } catch (error) {
        console.log(error);

    }

})