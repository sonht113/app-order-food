export interface PaginationParam {
  page: number
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParam;
}