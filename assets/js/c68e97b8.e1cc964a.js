"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[3289],{5482:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(5893),r=i(1151);const s={slug:"/playbooks/owasp",pagination_next:null,pagination_prev:null},o=void 0,a={id:"Hacking/Playbooks/OWASP Top 10",title:"OWASP Top 10",description:"In https://owasp.org/Top10/ website, you can see what are the most common vulnerabilities to exploit.",source:"@site/docs/Hacking/Playbooks/OWASP Top 10.md",sourceDirName:"Hacking/Playbooks",slug:"/playbooks/owasp",permalink:"/docs/playbooks/owasp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/playbooks/owasp",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},l={},c=[{value:"Broken Access Control",id:"broken-access-control",level:2},{value:"Cryptographic Failures",id:"cryptographic-failures",level:2},{value:"Injection",id:"injection",level:2},{value:"Insecure Design",id:"insecure-design",level:2},{value:"Security Misconfiguration",id:"security-misconfiguration",level:2},{value:"Vulnerable and Outdated Components",id:"vulnerable-and-outdated-components",level:2},{value:"Identification and Authentication Failures",id:"identification-and-authentication-failures",level:2},{value:"Software and Data Integrity Failures",id:"software-and-data-integrity-failures",level:2},{value:"Security Logging and Monitoring Failures",id:"security-logging-and-monitoring-failures",level:2},{value:"Server-Side Request Forgery (SSRF)",id:"server-side-request-forgery-ssrf",level:2}];function h(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/",children:"https://owasp.org/Top10/"})," website, you can see what are the most common vulnerabilities to exploit."]}),"\n",(0,t.jsx)(n.p,{children:"They are well categorized and they provide examples in website."}),"\n",(0,t.jsx)(n.p,{children:"I'll try to explain the groups sorted by order of occurrence in this article. This should be like a map to follow when pentesting things."}),"\n",(0,t.jsx)(n.h2,{id:"broken-access-control",children:"Broken Access Control"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A01_2021-Broken_Access_Control",children:"https://owasp.org/Top10/A01_2021-Broken_Access_Control"})}),"\n",(0,t.jsx)(n.p,{children:"Malicious users can manipulate access control mechanisms."}),"\n",(0,t.jsx)(n.p,{children:"Examples of this are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Modify the loging cookie to change from regular user to admin user"}),"\n",(0,t.jsx)(n.li,{children:"Manipulate JWT Tokens"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cryptographic-failures",children:"Cryptographic Failures"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A02_2021-Cryptographic_Failures/",children:"https://owasp.org/Top10/A02_2021-Cryptographic_Failures/"})}),"\n",(0,t.jsx)(n.p,{children:"Examples of this are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using old ciphers in symmetric encryption"}),"\n",(0,t.jsx)(n.li,{children:"Using short keys for RSA key: able to generate the private key from the public key"}),"\n",(0,t.jsx)(n.li,{children:"Unsalted passwords"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"injection",children:"Injection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A03_2021-Injection/",children:"https://owasp.org/Top10/A03_2021-Injection/"})}),"\n",(0,t.jsx)(n.p,{children:"When the user can input some value to the application, the developers should pay extra attention to validate or sanitize it. Otherwise, a malicious user can inject any value on it."}),"\n",(0,t.jsx)(n.p,{children:"Examples are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SQL injections: break the SQL query syntax to execute arbitrary queries"}),"\n",(0,t.jsx)(n.li,{children:"OS injections: being able to execute OS commands via the user input"}),"\n",(0,t.jsx)(n.li,{children:"Server-side template injection: abuse a template engine to inject any code"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The injection can be reflected on the screen: the typical use case is for login. You log in with made up username and you see the username back in the UI. This helps a lot because you can test with attack attempts."}),"\n",(0,t.jsx)(n.p,{children:"If you don't see the results back, you can try 2 things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Write to a public file: if the target has a public endpoint, you can make the injection to write to a file in that public directory to extract the data."}),"\n",(0,t.jsx)(n.li,{children:"Out of band interaction: if you own a server, you can make the target connect to that server to exfiltrate the data"}),"\n",(0,t.jsx)(n.li,{children:"Abuse of the errors: if you see the stacktrace, you can use it in your favour and throw errors containg the information you want to extract."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"insecure-design",children:"Insecure Design"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A04_2021-Insecure_Design/",children:"https://owasp.org/Top10/A04_2021-Insecure_Design/"})}),"\n",(0,t.jsx)(n.p,{children:"Examples of this are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bot detection mechanism"}),"\n",(0,t.jsx)(n.li,{children:"Credentials hardcoded in the code"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"security-misconfiguration",children:"Security Misconfiguration"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A05_2021-Security_Misconfiguration/",children:"https://owasp.org/Top10/A05_2021-Security_Misconfiguration/"})}),"\n",(0,t.jsx)(n.p,{children:"This topic is very broad and might include things like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Default users, passwords"}),"\n",(0,t.jsx)(n.li,{children:"Unprotected paths of the application (remember nginx off-by-slash vulnerability)"}),"\n",(0,t.jsx)(n.li,{children:"Stack traces revealing information to the user"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vulnerable-and-outdated-components",children:"Vulnerable and Outdated Components"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components",children:"https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components"})}),"\n",(0,t.jsx)(n.p,{children:"Using old libraries might cause the application to be vulnerable to new attacks that recent versions of the library fix"}),"\n",(0,t.jsx)(n.p,{children:"When you are exploring this attack vector, check the repository of the library (if open source) and look for commits for the next versions. If you see something looking like a security fix, it's worth trying to replicate it in your setup."}),"\n",(0,t.jsx)(n.h2,{id:"identification-and-authentication-failures",children:"Identification and Authentication Failures"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/",children:"https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/"})}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Default/weak password"}),"\n",(0,t.jsx)(n.li,{children:"Allowing brute force attacks to guess username/password"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"software-and-data-integrity-failures",children:"Software and Data Integrity Failures"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/",children:"https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/"})}),"\n",(0,t.jsx)(n.p,{children:"Application that relies on plugins, libraries, etc.. from third-party must verify the integrity of the component. This also applies to the user input."}),"\n",(0,t.jsx)(n.p,{children:"If the user can see and modify a serialized payload, that payload should be handled with extra care."}),"\n",(0,t.jsx)(n.p,{children:"Additionally, CI/CD pipeline must be well secured, otherwise the attackers might modified the shipped software."}),"\n",(0,t.jsx)(n.h2,{id:"security-logging-and-monitoring-failures",children:"Security Logging and Monitoring Failures"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures",children:"https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures"})}),"\n",(0,t.jsx)(n.p,{children:"Not enough monitoring for scenarios like excessive number of failed login attemps, etc..."}),"\n",(0,t.jsx)(n.h2,{id:"server-side-request-forgery-ssrf",children:"Server-Side Request Forgery (SSRF)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29",children:"https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29"})}),"\n",(0,t.jsx)(n.p,{children:"This happens when an application fetches a resource from a third-pary based on the input provided by a user."}),"\n",(0,t.jsx)(n.p,{children:"For instance, in a template engine, the legitimate users might include an image stored in their webserver. However, an attacker might include their own crafted version of the image that includes malicious code."})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);