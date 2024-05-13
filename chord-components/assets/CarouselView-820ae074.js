import{_ as v,r as w,a as c,o,c as s,b as e,w as r,d as n,F as d,e as x,u,f as m,t as _,g as k,v as I,h as S,p as V,i as L}from"./index-1d2010ea.js";import{C as N,_ as U}from"./ChordPreviewCode-ba3e2b6b.js";import{C as j}from"./ChordCarousel-13fc935c.js";const B=""+new URL("map1-22ab302f.jpg",import.meta.url).href,D=""+new URL("map2-c3662b79.jpg",import.meta.url).href,F=""+new URL("map3-c492a0f8.jpg",import.meta.url).href;let R=[{img:B,url:"#"},{img:D,url:"#"},{img:F,url:"#"}];const $=t=>(V("data-v-6c340edb"),t=t(),L(),t),A={class:"container"},E={class:"example"},P={class:"document"},T=$(()=>n("h2",null,"API",-1)),q=`
  <template>
    <ChordCarousel :data="data" :autoplay="true"></ChordCarousel>
  </template>

  <script setup>
  import ChordCarousel from '@/components/ChordCarousel.vue';

  let data = [
    {
      img: 'src/assets/map1.png',
      url: '#'
    },
    {
      img: 'src/assets/map2.png',
      url: '#'
    },
    {
      img: 'src/assets/map3.png',
      url: '#'
    }
  ];
  <\/script>
`,z={__name:"CarouselView",setup(t){const a=w(!1),f=[{title:"属性名",dataIndex:"name"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"default"}],g={attributes:[{key:"1",name:"data",description:"数据",type:"array",default:"[]"},{key:"2",name:"height",description:"高度",type:"number",default:"360"},{key:"3",name:"arrows",description:"箭头显示",type:"boolean",default:"true"},{key:"4",name:"dots",description:"底部圆点显示",type:"boolean",default:"true"},{key:"5",name:"autoplay",description:"自动切换",type:"boolean",default:"false"},{key:"6",name:"interval",description:"自动切换时间间隔",type:"number",default:"2000"}]};return(G,i)=>{const h=c("a-button"),y=c("a-card"),C=c("a-table");return o(),s("div",A,[e(y,{title:"示例",style:{width:"100%",border:"1px solid black","margin-bottom":"24px"}},{default:r(()=>[n("div",E,[e(j,{data:u(R),autoplay:!0},null,8,["data"])]),e(h,{onClick:i[0]||(i[0]=p=>a.value=!a.value),style:{width:"100%"}},{icon:r(()=>[e(u(N))]),default:r(()=>[m(" "+_(a.value?"隐藏代码":"显示代码"),1)]),_:1}),k(e(U,{language:"markup",code:q},null,512),[[I,a.value]])]),_:1}),n("div",P,[T,(o(),s(d,null,x(g,(p,l)=>(o(),s(d,{key:l},[n("h3",null,_(l[0].toLocaleUpperCase()+l.slice(1)),1),e(C,{columns:f,"data-source":p,pagination:!1},{bodyCell:r(({text:b})=>[b===""?(o(),s(d,{key:0},[m(" - ")],64)):S("",!0)]),_:2},1032,["data-source"])],64))),64))])])}}},M=v(z,[["__scopeId","data-v-6c340edb"]]);export{M as default};
