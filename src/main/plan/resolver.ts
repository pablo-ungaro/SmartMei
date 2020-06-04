import ISODate from '../scalar/ISODate'
import {getPlan} from "./service";

export const resolver = {
    ISODate: ISODate,
    Query: {
        plan: (_: any, args: any) => {
            return getPlan(args.url)
        },
    },
};