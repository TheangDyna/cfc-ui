import XLSX from 'xlsx';
const exportToExcel =(label,data)=>{
    
    console.log("Export files")
    let AllAttendances =['No',...label]
    data.forEach((att,index)=>{
      let attendanceArray =[index+1,...att];
      AllAttendances.push(attendanceArray)
    })
    const wb = XLSX.utils.book_new();
    const wsAll= XLSX.utils.aoa_to_sheet(AllAttendances);
    XLSX.utils.book_append_sheet(wb, wsAll, "All Forms")
    XLSX.writeFile(wb, "export-form.xlsx")
  }
export default exportToExcel;