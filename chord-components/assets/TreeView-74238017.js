import{_ as g,a as c,o as a,c as n,e as C,l as f,d,t as _,j as v,h as x,F as s,r as B,b as o,w as l,u as b,f as y,g as D,v as V,p as S,i as N}from"./index-1d2010ea.js";import{C as A,_ as $}from"./ChordPreviewCode-ba3e2b6b.js";const j=""+new URL("empty-265980a4.jpg",import.meta.url).href;const M={__name:"ChordTreeItem",props:{treeData:{type:Array,default:()=>[]},border:{type:Boolean,default:!0}},setup(e){return(t,i)=>{const m=c("ChordTreeItem",!0);return a(!0),n(s,null,C(e.treeData,r=>(a(),n("details",{key:r.name,class:f(["chord-tree-item",e.border?"":"no-border"])},[d("summary",{class:f(r.children.length>0?"":"chord-tree-item-last")},_(r.name),3),r.children.length>0?(a(),v(m,{key:0,treeData:r.children,border:e.border},null,8,["treeData","border"])):x("",!0)],2))),128)}}},F=g(M,[["__scopeId","data-v-20cf28e4"]]),L={key:1,src:j,alt:"无数据",height:"200"},H={__name:"ChordTree",props:{data:{type:Array,default:()=>[]},border:{type:Boolean,default:!1}},setup(e){return(t,i)=>(a(),n("div",null,[e.data.length>0?(a(),v(F,{key:0,treeData:e.data,border:e.border},null,8,["treeData","border"])):(a(),n("img",L))]))}};let J=[{name:"中国",en:"China",children:[{name:"北京",en:"Beijing",children:[]},{name:"上海",en:"Shanghai",children:[{name:"闵行区",en:"Minhang",children:[]},{name:"静安区",en:"Jingan",children:[]}]}]},{name:"美国",en:"American",children:[{name:"纽约",en:"NewYork",children:[{name:"曼哈顿区",en:"ManHattan",children:[]},{name:"皇后区",en:"Queen",children:[]},{name:"布鲁克林区",en:"Brooklyn",children:[]}]},{name:"华盛顿",en:"Washington",children:[]}]}];const Q=e=>(S("data-v-f35ba6bc"),e=e(),N(),e),U={class:"container"},W={class:"example"},Y={class:"document"},z=Q(()=>d("h2",null,"API",-1)),E=`
  <template>
    <ChordTree :data="data" :border="false"></ChordTree>
  </template>

  <script setup>
  import ChordTree from '@/components/ChordTree.vue';
  let data = [
    {
      name: '中国',
      en: 'China',
      children: [
        {
          name: '北京',
          en: 'Beijing',
          children: []
        },
        {
          name: '上海',
          en: 'Shanghai',
          children: [
            {
              name: '闵行区',
              en: 'Minhang',
              children: []
            },
            {
              name: '静安区',
              en: 'Jingan',
              children: []
            }
          ]
        }
      ]
    },
    {
      name: '美国',
      en: 'American',
      children: [
        {
          name: '纽约',
          en: 'NewYork',
          children: [
            {
              name: '曼哈顿区',
              en: 'ManHattan',
              children: []
            },
            {
              name: '皇后区',
              en: 'Queen',
              children: []
            },
            {
              name: '布鲁克林区',
              en: 'Brooklyn',
              children: []
            }
          ]
        },
        {
          name: '华盛顿',
          en: 'Washington',
          children: []
        }
      ]
    }
  ];
  <\/script>
`,P={__name:"TreeView",setup(e){const t=B(!1),i=[{title:"属性名",dataIndex:"name"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"default"}],m={attributes:[{key:"1",name:"border",description:"边框显示",type:"boolean",default:"false"},{key:"2",name:"data",description:"数据",type:"array",default:"[]"}]};return(r,u)=>{const k=c("a-button"),I=c("a-card"),T=c("a-table");return a(),n("div",U,[o(I,{title:"示例",style:{width:"100%",border:"1px solid black","margin-bottom":"24px"}},{default:l(()=>[d("div",W,[o(H,{data:b(J),border:!1},null,8,["data"])]),o(k,{onClick:u[0]||(u[0]=p=>t.value=!t.value),style:{width:"100%"}},{icon:l(()=>[o(b(A))]),default:l(()=>[y(" "+_(t.value?"隐藏代码":"显示代码"),1)]),_:1}),D(o($,{language:"markup",code:E},null,512),[[V,t.value]])]),_:1}),d("div",Y,[z,(a(),n(s,null,C(m,(p,h)=>(a(),n(s,{key:h},[d("h3",null,_(h[0].toLocaleUpperCase()+h.slice(1)),1),o(T,{columns:i,"data-source":p,pagination:!1},{bodyCell:l(({text:w})=>[w===""?(a(),n(s,{key:0},[y(" - ")],64)):x("",!0)]),_:2},1032,["data-source"])],64))),64))])])}}},G=g(P,[["__scopeId","data-v-f35ba6bc"]]);export{G as default};
