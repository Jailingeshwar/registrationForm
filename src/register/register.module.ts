// import { Module } from '@nestjs/common';
// import { RegisterService } from './register.service';
// import { RegisterController } from './register.controller';

// @Module({
//   providers: [RegisterService],
//   controllers: [RegisterController]
// })
// export class RegisterModule {}
// import { RegisterController} from 'src/modules/registration/register.contrlloer';
// import { RegisterService } from 'src/modules/registration/register.service';
import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
@Module({
  imports: [],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
