import { UvIndexApi2EntityBase } from '../UvIndexApi2EntityBase';
import type { UvIndexApi2SDK } from '../UvIndexApi2SDK';
import type { Control } from '../types';
import type { Forecast, ForecastListMatch } from '../UvIndexApi2Types';
declare class ForecastEntity extends UvIndexApi2EntityBase<Forecast> {
    constructor(client: UvIndexApi2SDK, entopts: any);
    make(this: ForecastEntity): ForecastEntity;
    list(this: any, reqmatch?: ForecastListMatch, ctrl?: Control): Promise<ForecastEntity[]>;
}
export { ForecastEntity };
