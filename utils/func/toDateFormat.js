const toDateFormat = (date) => {
  const match= /^([0-9]{4}-[0-9]{2}-[0-9]{2}T.*)$/.test(date)
  if(match){
    const toDate = new Date(date);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      toDate
    );
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(
      toDate
    );
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(toDate);
    return day + "-" + month + "-" + year;
  }
  return 'unvalid date';
};
const toTime=(date)=>{
  const match= /^([0-9]{4}-[0-9]{2}-[0-9]{2}T.*)$/.test(date)
  if(match){
    const toDate = new Date(date);
    let hours = new Intl.DateTimeFormat("en", { hour: "numeric" }).format(
      toDate
    );
      let hour = hours.split(' ')[0]
      let status = hours.split(' ')[1]
    let minute =new Intl.DateTimeFormat("en", { minute: "numeric" }).format(
      toDate
    );
    
    return `${hour}:${minute} ${status}`;
  }
  return 'unvalid date';
}

export  {toDateFormat,toTime};
// console.log(toDateFormat("2021-01-01T17:00:00.000Z"));
