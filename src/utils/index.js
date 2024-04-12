export const formatNumber = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
    });
    return formatter.format(value);
  }
  
  export const convertToUSD = (value) =>{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(value);
  }
//   export const nairaToDollar = (value) =>{
//     const formatter = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'NGN',
//       rate: 460
//     });
//     return formatter.format(value*rate);
//   }
export const extractLocation = (str, from)=> {
    const words = str.split(' ');
    return from ? words[0] :  words[2];
  }