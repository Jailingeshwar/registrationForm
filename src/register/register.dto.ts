// import { ApiProperty } from "@nestjs/swagger";
// import { IsNotEmpty } from "class-validator";

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {

        
        @ApiProperty({
            description:"enter user name "
        })
        @IsNotEmpty()
        private firstName: string;
        @ApiProperty({
            description:"Enter Middlename (optional)"
        })
        private middleName: string;
        @ApiProperty({
            description:"Last name of the user"
        })
        @IsNotEmpty()
        private lastName: string;
        @ApiProperty({
            description:"Email id of the user"
        })
        @IsEmail()
        private emailID: string;
        @ApiProperty({
            description:"Contact number of the user"
        })
        private contactNumber: number;
    @ApiProperty({description:"Date of birth of the user"})
    private dateOfBirth: Date;
    @ApiProperty({description:"Gender of the user"})
    private gender: string;
    @ApiProperty({description:"Education: Tenth percentage of the user"})
    private tenthPercentage: number;
    @ApiProperty({description:"Education: Twelfth percentage of the user"})
    private twelfthPercentage: number;
    @ApiProperty({description:"Education: Education type of the user"})
    private educationType: string;
    @ApiProperty({description:"Education: Degree of the user"})
    private degree: string;
    @ApiProperty({description:"Education: College of the user"})
    private college: string;
    @ApiProperty({description:"Education: Roll number of the user"})
    private registerNumber: string;
    @ApiProperty({description:"Education: Branch of the user"})
    private branch: string;
    @ApiProperty({description:"Education: If the user has any backlogs or not"})
    private backlogs: string;
      
}