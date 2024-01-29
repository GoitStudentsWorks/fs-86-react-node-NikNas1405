import{s as l,ab as u,ac as x,ad as g,j as e,ae as a,g as o,u as f,h as d,af as w,ag as b,ah as j,r as c,C as v,H as p,a as k,ai as E,X as y,Q as C,aj as $}from"./index-a72795b7.js";import{T as L}from"./TitlePage-da7eb11b.js";const z=l.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,F=l(u)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${i=>i.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${i=>i.isactive==="true"?"4px":"0"};
    background-color: #e6533c;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,B=()=>{const i=["Body parts","Muscles","Equipment"],{filter:n}=x(),r=g(),t=n;return e.jsx(e.Fragment,{children:e.jsx(z,{children:i.map(s=>e.jsx("li",{children:e.jsx(F,{to:`/exercises/${s}`,state:{from:r},isactive:s===t?"true":"false",children:s})},s))})})},N="/fs-86-react-node-NikNas1405/assets/trainingGym-1-78b576d3.jpg",D="/fs-86-react-node-NikNas1405/assets/trainingGym-1@2x-7f8d3593.jpg",P=a.div`
  /* border: 2px solid red;
  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;a.div`
  text-align: center;
`;a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const S=a.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,G=a.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${o.colorInput};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.167;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.167;
  }

  > svg {
    stroke: ${o.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: ${o.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${o.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,I=a.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${N});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${D});
  }
`,W=()=>{const i=f(),n=d(w),r=d(b),{filter:t,filterList:s}=x(),h=j(),m=g();return c.useEffect(()=>{(async()=>{t===void 0?C.info("We are still awating for data",{theme:"dark"}):i($({filter:t}))})()},[i,t]),e.jsx(I,{children:e.jsx(v,{children:e.jsx(S,{children:n?e.jsx(p,{}):e.jsxs("div",{children:[t!==void 0&&m.pathname.endsWith(t.replace(" ","%20"))?null:e.jsxs(G,{onClick:()=>h(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:k+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(P,{children:[e.jsx(L,{title:s?E(s.split(" ")[0]):"Exercises"}),e.jsx(B,{})]}),n&&!r&&e.jsx(p,{}),e.jsx(e.Fragment,{children:e.jsx(c.Suspense,{children:e.jsx(y,{})})})]})})})})};export{W as default};
