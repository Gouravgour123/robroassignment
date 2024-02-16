
const { hashPass } = require('../helper/bcrypt');
const User = require('../model/models');

const createSupervisor = async (req, res) => {
    const { id, password } = req.body;

    try {
        // Check if the requester is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).send('Only admin can create supervisor accounts');
        }
        // Hash the provided password
        const hashedPassword = await hashPass(password);
        // Create supervisor user
        const supervisor = await User.create({ username, password: hashedPassword, role,adminProvidedPassword: true });
        res.status(201).send({success:true,message:"Supervisor account created successfully",data: supervisor})
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteSupervisor  = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send('supervisor deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting supervisor');
    }
  }

module.exports={createSupervisor,deleteSupervisor}