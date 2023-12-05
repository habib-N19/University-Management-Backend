import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
  statusCode: number;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    data: data.data,
    message: data.message,
  });
};
export default sendResponse;
