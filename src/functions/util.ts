export const getIsToday = (timestamp: Date) => {
    const date = new Date(timestamp);
  
    const currentDate = new Date();
  
    return (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  };
  
  
  