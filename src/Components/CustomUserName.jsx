import { useState, useEffect } from 'react';
import { getStorageData } from '../service/localstorage';


const useUserName = () => {
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

export default useUserName;
