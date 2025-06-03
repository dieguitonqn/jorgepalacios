
import { IMusicos } from '@/app/Discografia/types/disco';

export interface IInfografia {
    title: string;
    description: string;
    musicos?: IMusicos[];
}