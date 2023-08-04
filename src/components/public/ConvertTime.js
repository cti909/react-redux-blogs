// doi dinh dang thoi gian
const convertTime = (dateString) => {
  const dateObject = new Date(dateString);
  // Lấy các thành phần thời gian
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const date = String(dateObject.getDate()).padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  const seconds = String(dateObject.getSeconds()).padStart(2, "0");
  // Tạo chuỗi thời gian mới với định dạng 'yyyy-MM-dd HH:mm:ss'
  const newFormattedDateString = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  return newFormattedDateString;
};
export default convertTime;
