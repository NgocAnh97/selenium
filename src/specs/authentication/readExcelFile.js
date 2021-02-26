import { use } from 'chai';
import ExcelJS from 'exceljs';

const workbook = new ExcelJS.Workbook();
var array = [];

workbook.xlsx.readFile("D:/reputa_automation/src/data/loginCase.xlsx").then(function () {
    
    var worksheet = workbook.getWorksheet("Sheet1");

    console.log("Row-2 | Cell-1 - " + worksheet.getRow(2).getCell(1).value);

    //Get all the rows data [1st and 2nd column]
    for (var i = 2; i <= worksheet.rowCount; i++) { //
        var username = worksheet.getRow(i).getCell(1).value;
        var password = worksheet.getRow(i).getCell(2).value;
        var object = {
            username,
            password
        }
        
        array.push(object);
    }
    return array;
});

export default array;