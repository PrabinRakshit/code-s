const { StatusCodes} = require('http-status-codes')

const bcrypt = require('bcryptjs')




const userRegistrationController={
    register: async (req,res)=>{
        // try {

        //     const {name,email,mobile,password} = req.body;
        //     const encPassword = await bcrypt.hash(password,10);
        //     const newUser = await User.create({
        //         name,
        //         email,
        //         mobile,
        //         password:encPassword
        //     })
        //               const template = regTemplate(name,email)

        //               const subject = `Confirmation of registration wit CSM-v1.0`;
        //               await sendMail(email,subject,template)


        //     // res.json({,   data:newUser})
        //     res.status(StatusCodes.OK).json({msg:"User Registered Successfully" ,data:newUser})
        // } catch (err) {
        //     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err.message})
        // }

        res.status(StatusCodes.OK).json({ msg: "Register Controller" })

    },
    login: async (req,res)=>{
        res.status(StatusCodes.OK).json({ msg: "Login Controller" })
    },
    logout: async (req,res)=>{
        res.status(StatusCodes.OK).json({ msg: "Logout Controller" })

    }
    
}

module.exports= userRegistrationController;