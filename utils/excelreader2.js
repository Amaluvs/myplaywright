const XLSX=require('xlsx')//Import library
function getCellData(row,column)
{
    const workbook=XLSX.readFile('TestData/ApplicationData.xlsx')//Read Excel file or Opens the Excel file
        const sheet=workbook.Sheets['loginpage']//Select sheet
        const cellvalue=XLSX.utils.encode_cell({//Convert row/column → Excel format
            r:row-1,
            c:column-1
        })
        const cell=sheet[cellvalue]
        return cell?cell.v:undefined
}
module.exports={getCellData}