import { useState, useEffect } from 'react';
import { getStorageData } from '../service/localstorage';


export const useBranchName = () => {
  const [branchName, setBranchName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const branchName = await getStorageData("branch_name");
        const parsedBranchName = JSON.parse(branchName);
        setBranchName(parsedBranchName);
      } catch (error) {
        console.error("Error fetching branch name: ", error);
      }
    };
    fetchData();
  }, []);

  return branchName;
};



export const useUserName = () => {
  const [staffName, setStaffName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffName = await getStorageData("staff_name");
        const parsedBranchName = (staffName);
        setStaffName(parsedBranchName);
      } catch (error) {
        console.error("Error fetching staff name: ", error);
      }
    };

    fetchData();
  }, []);

  return staffName;
};



