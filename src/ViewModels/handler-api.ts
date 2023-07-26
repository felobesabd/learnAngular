export interface HandlerApi {
  success: boolean;
  data: any;
  message: string[];
  pageNo?: number;
  totalPage?: number;
  itemPage?: number;
}
