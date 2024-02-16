
const User = require('../model/models');
const { hashPass } = require('../helper/bcrypt');

const worker = async (req, res) => {
    const { id, password } = req.body;

    try {
        // Check if the requester is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).send('Only admin can create worker accounts');
        }
        // Hash the provided password
        const hashedPassword = await hashPass(password);
        // Create supervisor user
        const workers = await User.create({ id, password: hashedPassword, role: 'worker' });

        res.status(201).send({success:true,message:"worker account created successfully",data: workers})

    } catch (error) {
        res.status(500).send(error.message);
    }
};


const deleteWorker  = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send('worker deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting worker');
    }
  }

module.exports={worker,deleteWorker}