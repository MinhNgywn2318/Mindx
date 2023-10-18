function tinhSoLuongChanLe(arr) {
    var soChan = [];
    var soLe = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        soChan.push(arr[i]);
      } else {
        soLe.push(arr[i]);
      }
    }
  
    console.log("Số chẵn: " + soChan);
    console.log("Số lẻ: " + soLe);
  
    console.log("Số lượng phần tử chẵn: " + soChan.length);
    console.log("Số lượng phần tử lẻ: " + soLe.length);
  }
  
  var mang = [0, 5, 9, 4, 6, 10, 18];
  tinhSoLuongChanLe(mang);
  
  function findOutlier(arr) {
    
    let evenCount = 0;
    let oddCount = 0;
    let outlier;
  
   
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenCount++;
       
        outlier = arr[i];
      } else {
        oddCount++;
    
        outlier = arr[i];
      }
  
    
      if (evenCount >= 2 && oddCount === 1) {
        return outlier;
      } else if (oddCount >= 2 && evenCount === 1) {
        return outlier;
      }
    }
  
    // Nếu không tìm thấy, mặc định trả về 0 hoặc giá trị mặc định khác
    return 0;
  }
  
  console.log(findOutlier([2, 3, 4]));      
  console.log(findOutlier([1, 2, 3]));      
  console.log(findOutlier([4, 1, 3, 5, 9])); 
  