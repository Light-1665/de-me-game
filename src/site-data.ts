export const channel='https://www.youtube.com/channel/UCJnUgcpD1dCA1aTmFWSzqXw';
export type Game={id:string;name:string;genre:string;description:string;image:string;video:string;price:number|null;order:number};
export type News={title:string;url:string;image:string;source:string;region:string;date:string;stale?:boolean};
export const games:Game[]=[
 {id:'replaced',name:'REPLACED',genre:'Hành động',description:'Một thế giới pixel mang đậm chất điện ảnh.',video:'P6uJ-vxvMIA',price:null,order:1},
 {id:'deliver',name:'Deliver At All Costs',genre:'Hành động',description:'Hành trình giao hàng chẳng giống bất kỳ ai.',video:'JBAqrJ_SKM0',price:null,order:2},
 {id:'fate',name:'Game of Fate 2',genre:'FMV',description:'Những lựa chọn viết nên câu chuyện của bạn.',video:'6FCBcR_kYWk',price:null,order:3},
 {id:'outlast',name:'Outlast 2',genre:'Kinh dị',description:'Một chuyến đi dành cho những trái tim gan lì.',video:'2SuR80gLWM8',price:null,order:4},
 {id:'persona',name:'Persona 5 Royal',genre:'Nhập vai',description:'Cuộc sống hai mặt, những người bạn khó quên.',video:'7lAH0eThR6U',price:null,order:5},
 {id:'love',name:'Love Is All Around 2',genre:'FMV',description:'Đi qua một chuyện tình bằng lựa chọn của mình.',video:'C3Ry6pHo89U',price:null,order:6},
].map(g=>({...g,image:`https://i.ytimg.com/vi/${g.video}/hqdefault.jpg`}));
export const videos=[{id:'heTdKgWL_h8',title:'Cùng Đê Mê khám phá The Witcher 3',type:'LIVESTREAM'},{id:'JBAqrJ_SKM0',title:'100 ngày chạy Grab trong Deliver At All Costs',type:'100 NGÀY'},{id:'P6uJ-vxvMIA',title:'REPLACED — hành trình pixel đậm chất điện ảnh',type:'TRẢI NGHIỆM'}];
