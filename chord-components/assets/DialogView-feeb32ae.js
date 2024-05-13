import{_ as k,o,j as S,w as l,c as n,d as t,n as V,t as c,k as g,h as d,T as H,r as y,a as m,b as s,F as h,e as N,u as B,f as b,g as F,v as L,p as j,i as z}from"./index-1d2010ea.js";import{C as A,_ as E}from"./ChordPreviewCode-ba3e2b6b.js";const P={key:0,class:"chord-dialog"},U={class:"title"},q={class:"content"},G={class:"footer"},J={__name:"ChordDialog",props:{title:{type:String,default:""},visible:{type:Boolean,default:!1},height:{type:Number,default:320},width:{type:Number,default:600},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"}},setup(e){return(a,i)=>(o(),S(H,{name:"chord-dialog-fade"},{default:l(()=>[e.visible?(o(),n("div",P,[t("div",{class:"chord-dialog-body",style:V({width:`${e.width}px`,height:`${e.height}px`})},[t("div",U,c(e.title),1),t("div",q,[g(a.$slots,"default",{},void 0,!0)]),t("div",G,[g(a.$slots,"footer",{},()=>[e.cancelText.length>0?(o(),n("button",{key:0,onClick:i[0]||(i[0]=p=>a.$emit("cancel"))},c(e.cancelText),1)):d("",!0),e.confirmText.length>0?(o(),n("button",{key:1,onClick:i[1]||(i[1]=p=>a.$emit("confirm"))},c(e.confirmText),1)):d("",!0)],!0)])],4)])):d("",!0)]),_:3}))}},K=k(J,[["__scopeId","data-v-00e10978"]]);const u=e=>(j("data-v-1277a968"),e=e(),z(),e),M={class:"container"},O={class:"example"},Q=u(()=>t("p",null,"Here is the first paragraph.",-1)),R=u(()=>t("p",null,"Here is the second paragraph.",-1)),W=u(()=>t("p",null,"Here is the third paragraph.",-1)),X={class:"document"},Y=u(()=>t("h2",null,"API",-1)),Z=`
  <template>
    <button @click="open" class="open-button">打开窗口</button>

    <ChordDialog title="标题" :visible="visible" @cancel="cancel" @confirm="confirm">
      <p>Here is the first paragraph.</p>
      <p>Here is the second paragraph.</p>
      <p>Here is the third paragraph.</p>
    </ChordDialog>
  </template>

  <script setup>
  import { ref } from 'vue';
  import ChordDialog from '@/components/ChordDialog.vue';

  const visible = ref(false);

  function open() {
    visible.value = true;
  }

  function cancel() {
    visible.value = false;
  }

  function confirm() {
    visible.value = false;
  }
  <\/script>
  <style lang="scss" scoped>
  .open-button {
    border: none;
    border-radius: 10px;
    background-color: rgb(32, 32, 32);
    color: white;
    width: 100px;
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  }
  </style>
`,ee={__name:"DialogView",setup(e){const a=y(!1);function i(){a.value=!0}function p(){a.value=!1}function x(){a.value=!1}const r=y(!1),C=[{title:"属性名",dataIndex:"name"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"default"}],w={attributes:[{key:"1",name:"cancelText",description:"取消按钮文本",type:"string",default:"取消"},{key:"2",name:"confirmText",description:"确定按钮文本",type:"string",default:"确定"},{key:"3",name:"height",description:"高度",type:"number",default:"320"},{key:"4",name:"title",description:"表格标题",type:"string",default:""},{key:"5",name:"visible",description:"对话框是否可见",type:"boolean",default:"false"},{key:"6",name:"width",description:"宽度",type:"number",default:"600"}],events:[{key:"1",name:"cancel",description:"点击取消按钮的回调",type:"function",default:""},{key:"2",name:"confirm",description:"点击确认按钮的回调",type:"function",default:""}],slots:[{key:"1",name:"default",description:"表格主要内容",type:"",default:""},{key:"2",name:"footer",description:"表格底部内容",type:"",default:""}]};return(te,_)=>{const $=m("a-button"),D=m("a-card"),T=m("a-table");return o(),n("div",M,[s(D,{title:"示例",style:{width:"100%",border:"1px solid black","margin-bottom":"24px"}},{default:l(()=>[t("div",O,[t("button",{onClick:i,class:"open-button"},"打开窗口"),s(K,{title:"标题",visible:a.value,onCancel:p,onConfirm:x},{default:l(()=>[Q,R,W]),_:1},8,["visible"])]),s($,{onClick:_[0]||(_[0]=v=>r.value=!r.value),style:{width:"100%"}},{icon:l(()=>[s(B(A))]),default:l(()=>[b(" "+c(r.value?"隐藏代码":"显示代码"),1)]),_:1}),F(s(E,{language:"markup",code:Z},null,512),[[L,r.value]])]),_:1}),t("div",X,[Y,(o(),n(h,null,N(w,(v,f)=>(o(),n(h,{key:f},[t("h3",null,c(f[0].toLocaleUpperCase()+f.slice(1)),1),s(T,{columns:C,"data-source":v,pagination:!1},{bodyCell:l(({text:I})=>[I===""?(o(),n(h,{key:0},[b(" - ")],64)):d("",!0)]),_:2},1032,["data-source"])],64))),64))])])}}},ne=k(ee,[["__scopeId","data-v-1277a968"]]);export{ne as default};
