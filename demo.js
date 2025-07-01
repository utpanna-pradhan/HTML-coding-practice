// const nums = [1, 2, 3, 4, 5];
// let evennum=[];
// for(let i=0;i<=nums.length;i++){
//     if(nums[i]%2 == 0){
//       console.log(nums[i])
//     }
  
   
// }
let arrs=[1,3,4,5,3];
let checkarr={}
for(let i=0;i<arrs.length;i++){
   const item=arrs[i];
   if(checkarr[item]){
  return true;
   }
   checkarr[item] = true;
}
return false;

