export interface PaginationParam {
  page: number;
  limit: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParam;
}