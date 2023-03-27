import moment from "moment/moment";

const DateFormat = (date) => {
  if (date) {
    return moment(date).format("DD/MM/YYYY");
  }
  return "N/A";
};

const DateFormatApi = (date) => {
  if (date) {
    return moment(date).format("DD/MM/YYYY");
  }
  return "";
};

const TimeFormat = (date) => {
  if (date) {
    return moment(date).format("hh:mm a");
  }

  return "-";
};

export { DateFormat, TimeFormat, DateFormatApi };
