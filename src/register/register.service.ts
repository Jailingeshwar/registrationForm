import { Injectable } from '@nestjs/common';
@Injectable()
export class RegisterService {
  getRegister(): string {
    return "Student registered";
  }
  getRegister2():String{
    return "student registerend 2";
  }
  getStudentName(): String {
    return `Registration Successfull`;
  }
  getStudentName1():String{
    return `your details have been submitted`;
  }
  getInput(param):string {

    return `Role: ${param.role}`;
  }
  getInput2(param):String{
    return `Role: ${param.role}`;
  }
  
}
