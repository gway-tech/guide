import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,b as e,o as r}from"./app-BCwBI7cb.js";const s="/guide/assets/set-DbyU11gn.png",o={};function l(d,t){return r(),a("div",null,[i(" ## Settings Options Interface "),t[0]||(t[0]=e("h2",{id:"설정-옵션-인터페이스",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#설정-옵션-인터페이스"},[e("span",null,"설정 옵션 인터페이스")])],-1)),i(" ![Settings Options](set.png) "),t[1]||(t[1]=e("figure",null,[e("img",{src:s,alt:"설정 옵션",tabindex:"0",loading:"lazy"}),e("figcaption",null,"설정 옵션")],-1)),i(" ## Basic Settings "),t[2]||(t[2]=e("h2",{id:"기본-세팅",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#기본-세팅"},[e("span",null,"기본 세팅")])],-1)),i(` Writeback Directory: Used to store the data written by the client machine after PXE network booting, that is, the temporary data written by the client machine to the disk. That is, the so-called writeback (work) directory, which is placed in the writeback subdirectory on the server side by default. You can set multiple writeback directories, and the system will automatically balance the writeback file storage directories of multiple client machines.
Per User Writeback Size Limit: When you need to limit the size of the writeback data written by the client machine, please set it to an appropriate value. When it is too small, the client machine will have a blue screen phenomenon.
Allow Super User to Update Server Disk: When you need to update the files on the server's disk on the client machine, please select this option. In this mode, you do not need to save the writeback data anymore, and the writeback data will be directly written to the server disk. During the super user's online period, the data disk on the server cannot be accessed.
System Image Upload Directory: The storage directory for client machine image uploads, which is the boot subdirectory on the server side by default.
Administrator Password: The authentication password when the auxiliary server accepts management from the main server. `),t[3]||(t[3]=e("p",null,"쓰기 저장 디렉터리: PXE 네트워크 부팅 후 클라이언트 컴퓨터에서 쓴 데이터, 즉 클라이언트 컴퓨터에서 디스크에 쓴 임시 데이터를 저장하는 데 사용됩니다. 즉, 기본적으로 서버 측 writeback 하위 디렉터리에 배치되는 소위 writeback(작업) 디렉터리입니다. 여러 쓰기 저장 디렉터리를 설정할 수 있으며 시스템은 여러 클라이언트 시스템의 쓰기 저장 파일 저장소 디렉터리의 균형을 자동으로 조정합니다. 사용자별 쓰기 저장 크기 제한: 클라이언트 시스템에서 쓰는 쓰기 저장 데이터의 크기를 제한해야 하는 경우 적절한 값으로 설정하십시오. 크기가 너무 작으면 클라이언트 컴퓨터에 블루 스크린 현상이 발생합니다. 슈퍼 유저가 서버 디스크를 업데이트하도록 허용: 클라이언트 시스템에서 서버 디스크의 파일을 업데이트해야 하는 경우 이 옵션을 선택하십시오. 이 모드에서는 더 이상 쓰기 저장 데이터를 저장할 필요가 없으며 쓰기 저장 데이터가 서버 디스크에 직접 기록됩니다. 슈퍼유저의 온라인 기간 동안에는 서버의 데이터 디스크에 접근할 수 없습니다. 시스템 이미지 업로드 디렉터리: 클라이언트 컴퓨터 이미지 업로드를 위한 저장소 디렉터리로, 기본적으로 서버측 부팅 하위 디렉터리입니다. 관리자 비밀번호: 보조 서버가 주 서버로부터 관리를 수락할 때의 인증 비밀번호입니다.",-1)),i(" ## DHCP Settings "),t[4]||(t[4]=e("h2",{id:"dhcp-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dhcp-설정"},[e("span",null,"DHCP 설정")])],-1)),i(` Enable DHCP and TFTP Services: Whether to start DHCP and TFTP functions, which are necessary functions for client machine PXE network booting.
DHCP Server: Specify the IP address of the DHCP service, which will automatically fill in the following settings after specifying.
Start IP and End IP: The start IP and end IP range of DHCP service automatically assigned to new client machines.
Subnet Mask, Gateway, Preferred DNS and Alternate DNS Addresses: The network settings sent by DHCP service to client machines. `),t[5]||(t[5]=e("p",null,"DHCP 및 TFTP 서비스 활성화: 클라이언트 시스템 PXE 네트워크 부팅에 필요한 기능인 DHCP 및 TFTP 기능을 시작할지 여부입니다. DHCP 서버: DHCP 서비스의 IP 주소를 지정합니다. 지정 후 다음 설정이 자동으로 채워집니다. 시작 IP 및 끝 IP: DHCP 서비스의 시작 IP 및 끝 IP 범위는 새 클라이언트 시스템에 자동으로 할당됩니다. 서브넷 마스크, 게이트웨이, 기본 DNS 및 대체 DNS 주소: DHCP 서비스가 클라이언트 컴퓨터로 전송한 네트워크 설정입니다.",-1)),i(" ## Multi-Server Settings "),t[6]||(t[6]=e("h2",{id:"다중-서버-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#다중-서버-설정"},[e("span",null,"다중 서버 설정")])],-1)),i(` Automatic Load Balancing: When there are multiple servers in the LAN, please set this option. It can achieve dual-server hot backup and load balancing.
IP List: The server list manually added when manually load balancing multiple servers `),t[7]||(t[7]=e("p",null,"자동 로드 밸런싱: LAN에 여러 서버가 있는 경우 이 옵션을 설정하십시오. 이중 서버 핫 백업 및 로드 밸런싱을 달성할 수 있습니다. IP 목록: 여러 서버를 수동으로 로드 밸런싱할 때 수동으로 추가하는 서버 목록",-1)),i(" # Computer Settings "),t[8]||(t[8]=e("h1",{id:"컴퓨터-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#컴퓨터-설정"},[e("span",null,"컴퓨터 설정")])],-1)),i(` Disable Client Machine Status Statistics: Whether to turn off client machine status statistics function
Time to Display Operating System List (Seconds): When there are multiple system images for client machines, a system selection list menu will be displayed when client machines start up. Here you can set the display time of the list.
Personal Disk Directory: The root directory of personal disks in shared directory form.
Personal Cloud Disk Server IP: The IP of a separate iscsi personal disk server. `),t[9]||(t[9]=e("p",null,"클라이언트 컴퓨터 상태 통계 비활성화: 클라이언트 컴퓨터 상태 통계 기능을 끌지 여부 운영 체제 목록 표시 시간(초): 클라이언트 컴퓨터에 대한 시스템 이미지가 여러 개 있는 경우 클라이언트 컴퓨터가 시작될 때 시스템 선택 목록 메뉴가 표시됩니다. 여기서 목록 표시 시간을 설정할 수 있습니다. 개인 디스크 디렉터리: 공유 디렉터리 형태의 개인 디스크의 루트 디렉터리입니다. 개인 클라우드 디스크 서버 IP: 별도의 iscsi 개인 디스크 서버의 IP입니다.",-1)),i(" ## New Computer Default Settings "),t[10]||(t[10]=e("h2",{id:"새로운-컴퓨터-기본-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#새로운-컴퓨터-기본-설정"},[e("span",null,"새로운 컴퓨터 기본 설정")])],-1)),i(` Automatically Add New Computers: Whether to allow automatic addition of new client machines. When there is a DHCP request, PXE network boot request, iSCSI connection request or client connection request, if the client does not exist, a new user will be automatically added.
Naming Rules: Set the naming rules for new computers automatically added through DHCP.
Category: The default category of new computers
System Image: The default system image for automatically added new client machines. (You can drag and drop each image up and down to adjust the display order)
Data Disk: The disk list of automatically added new users.
Network Boot Mode: The mode used by new computers for pxe network booting `),t[11]||(t[11]=e("p",null,"새 컴퓨터 자동 추가: 새 클라이언트 컴퓨터의 자동 추가를 허용할지 여부입니다. DHCP 요청, PXE 네트워크 부팅 요청, iSCSI 연결 요청 또는 클라이언트 연결 요청이 있을 때 클라이언트가 없으면 새 사용자가 자동으로 추가됩니다. 명명 규칙: DHCP를 통해 자동으로 추가되는 새 컴퓨터에 대한 명명 규칙을 설정합니다. 범주: 새 컴퓨터의 기본 범주 시스템 이미지: 자동으로 추가된 새 클라이언트 컴퓨터의 기본 시스템 이미지입니다. (각 이미지를 위아래로 드래그 앤 드롭하여 표시 순서를 조정할 수 있습니다) 데이터 디스크: 자동으로 추가된 신규 사용자의 디스크 목록입니다. 네트워크 부팅 모드: pxe 네트워크 부팅을 위해 새 컴퓨터에서 사용하는 모드입니다.",-1)),i(" ## New Computer Name Naming Rules "),t[12]||(t[12]=e("h2",{id:"새로운-컴퓨터-이름-규칙-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#새로운-컴퓨터-이름-규칙-설정"},[e("span",null,"새로운 컴퓨터 이름 규칙 설정")])],-1)),i(" New Computer Name Naming Rules: When there is a DHCP request or a client connection request, new computer name generation rules. "),t[13]||(t[13]=e("p",null,"새 컴퓨터 이름 규칙: DHCP 요청 또는 클라이언트 연결 요청이 있는 경우 새 컴퓨터 이름 생성 규칙입니다.",-1))])}const u=n(o,[["render",l],["__file","set.html.vue"]]),p=JSON.parse('{"path":"/guide/web/set.html","title":"설정","lang":"en-US","frontmatter":{"title":"설정","icon":"fa-solid fa-gear","order":2,"category":"웹 UI","tag":"Settings","description":"설정 옵션 인터페이스 설정 옵션설정 옵션 기본 세팅 쓰기 저장 디렉터리: PXE 네트워크 부팅 후 클라이언트 컴퓨터에서 쓴 데이터, 즉 클라이언트 컴퓨터에서 디스크에 쓴 임시 데이터를 저장하는 데 사용됩니다. 즉, 기본적으로 서버 측 writeback 하위 디렉터리에 배치되는 소위 writeback(작업) 디렉터리입...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/web/set.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"설정"}],["meta",{"property":"og:description","content":"설정 옵션 인터페이스 설정 옵션설정 옵션 기본 세팅 쓰기 저장 디렉터리: PXE 네트워크 부팅 후 클라이언트 컴퓨터에서 쓴 데이터, 즉 클라이언트 컴퓨터에서 디스크에 쓴 임시 데이터를 저장하는 데 사용됩니다. 즉, 기본적으로 서버 측 writeback 하위 디렉터리에 배치되는 소위 writeback(작업) 디렉터리입..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Settings"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"설정\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"설정 옵션 인터페이스","slug":"설정-옵션-인터페이스","link":"#설정-옵션-인터페이스","children":[]},{"level":2,"title":"기본 세팅","slug":"기본-세팅","link":"#기본-세팅","children":[]},{"level":2,"title":"DHCP 설정","slug":"dhcp-설정","link":"#dhcp-설정","children":[]},{"level":2,"title":"다중 서버 설정","slug":"다중-서버-설정","link":"#다중-서버-설정","children":[]},{"level":2,"title":"새로운 컴퓨터 기본 설정","slug":"새로운-컴퓨터-기본-설정","link":"#새로운-컴퓨터-기본-설정","children":[]},{"level":2,"title":"새로운 컴퓨터 이름 규칙 설정","slug":"새로운-컴퓨터-이름-규칙-설정","link":"#새로운-컴퓨터-이름-규칙-설정","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"guide/web/set.md","autoDesc":true}');export{u as comp,p as data};
