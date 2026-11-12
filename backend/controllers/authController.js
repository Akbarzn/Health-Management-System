export const RegisterPatientController = async(req,res)=>{
    try{
        const {name,email,password,phoneNo,gender,age} = req.body;
        if(!name || !email || !password || !phoneNo || !gender || !age)
            return res.status(400).json({message:"All fields are required"})

        if(phoneNo.length !== 10){
            return res.status(400).json({message:"Phone no must be 10 digits"})
        }

        const pool = await getPool();

        const existingUser = await pool
        .request()
        .input("email",sql.VarChar,email)
        .query(`SELECT * FROM users WHEERE email = @email`)
        
    }catch(error){

    }
}