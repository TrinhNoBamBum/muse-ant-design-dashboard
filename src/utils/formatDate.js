export const formatDate=(originalDateStr)=>{
        
        const originalDate = new Date(originalDateStr);

        const day = originalDate.getDate();
        const month = originalDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
        const year = originalDate.getFullYear();

        const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
        return formattedDate
}
