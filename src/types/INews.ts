import { INewsDetail } from "./INewsDetail";

export interface INews {
    status: string;
    total_hits: number;     
    page: number;
    total_pages: number;
    pages_size: number;
    articles: INewsDetail[];

}