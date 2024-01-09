"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[2646],{1811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(5893),s=t(1151);const i={slug:"/tooling/smbclient",pagination_next:null,pagination_prev:null},r=void 0,a={id:"Hacking/Tooling/smbclient",title:"smbclient",description:"Stands for Server Message Block and is a protocol for file sharing between computers. It runs on port 445 by default.",source:"@site/docs/Hacking/Tooling/smbclient.md",sourceDirName:"Hacking/Tooling",slug:"/tooling/smbclient",permalink:"/docs/tooling/smbclient",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/tooling/smbclient",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},l=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Stands for Server Message Block and is a protocol for file sharing between computers. It runs on port 445 by default."}),"\n",(0,o.jsxs)(n.p,{children:["The command line tool to interact with it, it's ",(0,o.jsx)(n.code,{children:"smbclient"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To list shared directories (use -N for anonymous access):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"smbclient -L \\\\<ip> -N\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        ADMIN$          Disk      Remote Admin\n        C$              Disk      Default share\n        IPC$            IPC       Remote IPC\n        WorkShares      Disk\nSMB1 disabled -- no workgroup available\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note the ",(0,o.jsx)(n.code,{children:"\\\\"})," prefix, this comes from Windows slahes. Make sure to pass the ",(0,o.jsx)(n.code,{children:"--user"})," flag, otherwise it will try to connect using your Linux user:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'smbclient -L \\\\10.129.68.251 --user="Administrator"\nPassword for [WORKGROUP\\Administrator]:\n\n\tSharename       Type      Comment\n\t---------       ----      -------\n\tADMIN$          Disk      Remote Admin\n\tC$              Disk      Default share\n\tIPC$            IPC       Remote IPC\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now, let's connect to the shared:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'smbclient \\\\\\\\<ip>\\\\WorkShares\nEnter WORKGROUP\\gal\'s password:\nTry "help" to get a list of possible commands.\nsmb: \\>\n'})}),"\n",(0,o.jsx)(n.p,{children:"When you're connected to the smb server you can use the same commands as in FTP."}),"\n",(0,o.jsxs)(n.p,{children:["If you see this error: ",(0,o.jsx)(n.code,{children:"protocol negotiation failed: NT_STATUS_NOT_SUPPORTED"}),", you need to configure min/max protocol versions, see: ",(0,o.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/562550/smbclient-protocol-negotiation-failed",children:"https://unix.stackexchange.com/questions/562550/smbclient-protocol-negotiation-failed"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);