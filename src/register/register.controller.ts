import {  Body, Controller, Get, HttpException, HttpStatus, Param, Post, UploadedFile, UseInterceptors, Version} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';

@Controller()
export class RegisterController {
    userRegisterService: any;
  constructor(private readonly registerService:RegisterService) {}

  

//@Version('1')
@Get('/jobprofile/:role')
  getInput(@Param() param :string): string {
   return this.registerService.getInput(param);
  }
  
//   @Version('2')
// @Get(':role')
//   getInput2(@Param() param :RegisterDto): string {
// //    return this.registerService.getInput(param);
//   }
//   @Version('1')
//   @Get('register')
//   getRegister(): string{
//     return this.registerService.getRegister();
//   }
//   @Version('2')
//   @Get('register')
//   getRegister2(): String{
//     return this.registerService.getRegister2();
//   }

  @Version('1')
  @Post('jobprofile')
  getStudentName(@Body() registerDto:RegisterDto): String{
    
    console.log({registerDto});
    return this.registerService.getStudentName();
  }
//   @Version('2')
//   @Post('jobprofile')
//   getStudentName1(@Body() registerDto:RegisterDto): String{
    
//     console.log({registerDto});
//     return this.registerService.getStudentName1();
// }
 @Post('upload')
   @UseInterceptors(
    // FileInterceptor('file',{
    //     dest:"./uploads",
    // })
   )
   uploadFile(@UploadedFile() file){
    console.log('file',file);
    return file;
    
   }
   @Get('help')
  getAllErrorStatusCode(): Object {
  
    return [
      {
        'OK': HttpStatus.OK
      },
      {
        'Created': HttpStatus.CREATED
      },
      {
        'Bad Request': HttpStatus.BAD_REQUEST
      },
      {
        'Unauthorized': HttpStatus.UNAUTHORIZED
      },
      {
        'Payment Required': HttpStatus.PAYMENT_REQUIRED
      },
      {
        'Forbidden': HttpStatus.FORBIDDEN
      },
      {
        'Not Found': HttpStatus.NOT_FOUND
      },
      {
        'Internal Server Error': HttpStatus.INTERNAL_SERVER_ERROR
      },
    ]}
}

  


