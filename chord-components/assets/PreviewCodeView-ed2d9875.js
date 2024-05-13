import{_ as L,r as h,a as c,o,c as u,b as e,w as t,d as n,F as m,e as F,j as y,h as C,u as $,f as _,t as p,g as D,v as E,p as J,i as A}from"./index-1d2010ea.js";import{_ as f,C as H}from"./ChordPreviewCode-ba3e2b6b.js";const g=l=>(J("data-v-0dc09461"),l=l(),A(),l),K={class:"container"},M={class:"example"},U=g(()=>n("pre",null,`              // JavaScript 代码
              function curry(func) {
                return function curried(...args) {
                  if (args.length >= func.length) {
                    return func.apply(this, args);
                  } else {
                    return function(...args2) {
                      return curried.apply(this, args.concat(args2));
                    }
                  }
                };
              }
            `,-1)),q={class:"document"},z=g(()=>n("h2",null,"API",-1)),G=g(()=>n("h3",null,"Note",-1)),O=`
  <!-- Vue 代码 -->
  <!-- 不显示行号 -->
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">{{ text }}</p>
  </Transition>
`,Q={__name:"PreviewCodeView",setup(l){const w=[{key:"example1",tab:"示例一"},{key:"example2",tab:"示例二"}],s=h(!1),r=h("example1"),b=v=>{s.value=!1,r.value=v},x={example1:`
    <template>
      <ChordPreviewCode language="js">
        <pre>
          // JavaScript 代码
          function curry(func) {
            return function curried(...args) {
              if (args.length >= func.length) {
                return func.apply(this, args);
              } else {
                return function(...args2) {
                  return curried.apply(this, args.concat(args2));
                }
              }
            };
          }
        </pre>
      </ChordPreviewCode>
    </template>
    <script setup>
    import ChordPreviewCode from '@/components/ChordPreviewCode.vue';
    <\/script>`,example2:`
    <template>
      <ChordPreviewCode language="markup" :code="showCode" :lineNumbers="false"></ChordPreviewCode>
    </template>
    <script setup>
    import ChordPreviewCode from '@/components/ChordPreviewCode.vue';

    const showCode = \`
      <!-- Vue 代码 -->
      <!-- 不显示行号 -->
      <button @click="show = !show">Toggle</button>
      <Transition>
        <p v-if="show">{{ text }}</p>
      </Transition>
    \`;
    <\/script>`},k=[{title:"属性名",dataIndex:"name"},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type"},{title:"默认值",dataIndex:"default"}],T={attributes:[{key:"1",name:"language",description:"代码语言",type:"string",default:"js"},{key:"2",name:"code",description:"代码片段",type:"string",default:""},{key:"3",name:"lineNumbers",description:"行号显示",type:"boolean",default:"true"},{key:"4",name:"copyText",description:"复制按钮文本",type:"string",default:"复制"},{key:"5",name:"copyErrorText",description:"复制失败文本",type:"string",default:"复制失败"},{key:"6",name:"copySuccessText",description:"复制成功文本",type:"string",default:"复制成功"}],slots:[{key:"1",name:"default",description:"代码片段",type:"",default:""}]},P=["使用 slot 传递代码片段时需加上 <pre></pre>","使用 prop 形式高亮 HTML 以及 Vue 等代码","同时存在 prop 和 slot 代码片段的情况下, 代码高亮以 prop 中的代码片段优先"];return(v,d)=>{const V=c("a-button"),I=c("a-card"),N=c("a-table"),S=c("a-list-item"),j=c("a-list");return o(),u("div",K,[e(I,{"tab-list":w,"active-tab-key":r.value,onTabChange:d[1]||(d[1]=a=>b(a)),style:{width:"100%",border:"1px solid black","margin-bottom":"24px"}},{default:t(()=>[n("div",M,[r.value==="example1"?(o(),y(f,{key:0,language:"js"},{default:t(()=>[U]),_:1})):r.value==="example2"?(o(),y(f,{key:1,language:"markup",code:O,lineNumbers:!1})):C("",!0)]),e(V,{onClick:d[0]||(d[0]=a=>s.value=!s.value),style:{width:"100%"}},{icon:t(()=>[e($(H))]),default:t(()=>[_(" "+p(s.value?"隐藏代码":"显示代码"),1)]),_:1}),D(e(f,{language:"markup",code:x[r.value]},null,8,["code"]),[[E,s.value]])]),_:1},8,["active-tab-key"]),n("div",q,[z,(o(),u(m,null,F(T,(a,i)=>(o(),u(m,{key:i},[n("h3",null,p(i[0].toLocaleUpperCase()+i.slice(1)),1),e(N,{columns:k,"data-source":a,pagination:!1},{bodyCell:t(({text:B})=>[B===""?(o(),u(m,{key:0},[_(" - ")],64)):C("",!0)]),_:2},1032,["data-source"])],64))),64)),G,e(j,{"data-source":P},{renderItem:t(({item:a,index:i})=>[e(S,null,{default:t(()=>[_(p(`${i+1}.`)+" "+p(a),1)]),_:2},1024)]),_:1})])])}}},X=L(Q,[["__scopeId","data-v-0dc09461"]]);export{X as default};
