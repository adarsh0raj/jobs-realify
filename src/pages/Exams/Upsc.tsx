import React from 'react';

const Upsc: React.FC = () => {

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      upsc page {counter}
    </div>
  );
};

export default Upsc;