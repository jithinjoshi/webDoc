import Doctor from "../Model/Doctor.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await Doctor.findOne({ email });
       

        if (user) {
            let isValidUser = await bcrypt.compare(password, user.password);
            
            if (isValidUser) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30min' });

                res.cookie(String(user._id), token, {
                    path: "/",
                    expires: new Date(Date.now() + 1000 * 100),
                    httpOnly: true,
                    sameSite: 'lax'
                })

                res.status(201).send({ msg: "Login successfull", username: user.username, token })
            } else {
                res.status(500).send("invalid credentials")
            }
        } else {
            res.status(404).send("user not found")
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "login failed" })

    }
};

export const profile = async(req,res)=>{
    try {
        let userId = req.user.userId;
        if(userId){
            let doctor = await Doctor.findOne({_id:userId});
            if(doctor){
                res.status(201).send(doctor)
            }
        }else{
            res.status(500).json({err:"Un authorized user"});
        }
        
    } catch (error) {
        res.status(500).json({err:"can't get the profile"});
        
    }
}

export const edit = async(req,res)=>{
    try {
        let userId = req.params.id;
        let data = req.body;
        console.log(data);
        let doctors = await Doctor.findByIdAndUpdate(userId,data);
        if(doctors){
            res.status(200).json({success:"doctor data updated successfully"})
        }else{
            res.status(500).json({err:"Doctor Updation failed"});
        }
        
    } catch (error) {
        res.status(500).json({err:"un authorized user"})
        
    }
}