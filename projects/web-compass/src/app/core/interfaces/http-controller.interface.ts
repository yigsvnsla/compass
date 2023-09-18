import { DATA_SOURCE } from "../enums/data-source.enum";
import { PartialNestedObject } from "./common.interface";

export interface Pagination {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
export interface ApiResponse<T> {
  data: T,
  meta: {
    pagination: Pagination,
    message: string,
    code: number
  }
}
export interface HttpControllerArg<T> {
  datasource: DATA_SOURCE;
  path: string;
  body?: PartialNestedObject<T>;
  queryParams?: PartialNestedObject<T>;
  pagination?: Pagination
}
export type HttpControllerArgSender<T> = Omit<HttpControllerArg<T>, 'path'>
export type HttpControllerArgFetch<T> = Omit<HttpControllerArg<T>, 'body'>
