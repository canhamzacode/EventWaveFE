import React, { useEffect, useState } from 'react';

interface SelectedLocationProp {
  setLocation: (location: string) => void;
}

const SelectLocation = ({ setLocation }: SelectedLocationProp) => {
  const [data, setData] = useState('');

  useEffect(() => {
    setLocation(data);
  }, [data]);

  return (
    <div className=" grid gap-8">
      <input
        type="text"
        placeholder="Location"
        className="w-full py-2 border-b border-b-black outline-none"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
    </div>
  );
};

export default SelectLocation;
