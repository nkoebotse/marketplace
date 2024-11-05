const User = require('../models/User');

// Approve a vendor
exports.approveVendor = async (req, res) => {
  try {
    const vendor = await User.findByIdAndUpdate(req.params.id, { role: 'Vendor' }, { new: true });
    res.json({ message: 'Vendor approved', vendor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
