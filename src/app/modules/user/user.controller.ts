import { NextFunction, Request, Response } from 'express';
import { UserValidation } from './user.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result,
      message: 'Student created successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createStudent,
};
