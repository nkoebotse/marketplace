// src/components/Admin/ApproveVendors.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendors, approveVendor, rejectVendor } from '../../store/actions/vendorActions'; // Assuming you have these actions

const ApproveVendors = () => {
  const dispatch = useDispatch();
  const vendors = useSelector((state) => state.vendors); // Assuming you have a vendors state in Redux
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchVendors())
      .finally(() => setLoading(false)); // Load vendors data
  }, [dispatch]);

  const handleApprove = (vendorId) => {
    dispatch(approveVendor(vendorId)); // Dispatch approve action
  };

  const handleReject = (vendorId) => {
    dispatch(rejectVendor(vendorId)); // Dispatch reject action
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Approve Vendors</h1>
      {loading ? (
        <p>Loading vendors...</p>
      ) : (
        <div className="space-y-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold">{vendor.name}</h2>
              <p>{vendor.email}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleApprove(vendor.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(vendor.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApproveVendors;
