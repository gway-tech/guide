import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,b as e,o as i}from"./app-BCwBI7cb.js";const s="/guide/assets/computerlist-CGEc-MvO.png",r="/guide/assets/computeredit-Bc3UU2Jv.png",l={};function d(u,t){return i(),a("div",null,[n(" ## Computer List "),t[0]||(t[0]=e("h2",{id:"컴퓨터-목록",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#컴퓨터-목록"},[e("span",null,"컴퓨터 목록")])],-1)),n(" ![Computer List](computerlist.png) "),t[1]||(t[1]=e("figure",null,[e("img",{src:s,alt:"컴퓨터 목록",tabindex:"0",loading:"lazy"}),e("figcaption",null,"컴퓨터 목록")],-1)),n(" The computer list is a display of all the managed computers, showing their names, IP and MAC addresses, and other attributes. You can customize the order, visibility, and width of the columns. You can also define the order of the rows, the sorting category, and other ways to display them. "),t[2]||(t[2]=e("p",null,"컴퓨터 목록은 관리되는 모든 컴퓨터를 표시하며 해당 컴퓨터의 이름, IP 및 MAC 주소, 기타 속성을 보여줍니다. 열의 순서, 가시성 및 너비를 사용자 정의할 수 있습니다. 행 순서, 정렬 범주 및 기타 표시 방법을 정의할 수도 있습니다.",-1)),n(" ## Add/Edit Computer "),t[3]||(t[3]=e("h2",{id:"컴퓨터-추가-편집",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#컴퓨터-추가-편집"},[e("span",null,"컴퓨터 추가/편집")])],-1)),n(" ![Computer Properties](computeredit.png) "),t[4]||(t[4]=e("figure",null,[e("img",{src:r,alt:"컴퓨터 속성",tabindex:"0",loading:"lazy"}),e("figcaption",null,"컴퓨터 속성")],-1)),n(" ### Basic "),t[5]||(t[5]=e("h3",{id:"기본",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#기본"},[e("span",null,"기본")])],-1)),n(` Name: The custom name of the client computer.
Note: Note information
IP: The IP address of the computer.
Physical Address: The MAC address of the computer's network card.
Category: The category of the client machine, which makes it easy to manage and set in batches.
System Disk: Set the boot image for the current client. When multiple system images are selected, a system boot selection menu will be displayed.
Data Disk: You can optionally mount the server disk partitions you need. When you select all, all the added disks will be automatically mounted.
Preservation Mode (Network Boot) / Preservation Mode (Local Boot): When this option is selected, the client machine will not restore the system image every time it restarts. The personal data of the operating system is preserved. `),t[6]||(t[6]=e("p",null,"이름: 클라이언트 컴퓨터의 사용자 정의 이름입니다. 참고: 참고 정보 IP: 컴퓨터의 IP 주소입니다. 물리적 주소: 컴퓨터 네트워크 카드의 MAC 주소입니다. 범주: 클라이언트 시스템의 범주로, 일괄 관리 및 설정이 용이합니다. 시스템 디스크: 현재 클라이언트의 부팅 이미지를 설정합니다. 여러 시스템 이미지를 선택하면 시스템 부팅 선택 메뉴가 표시됩니다. 데이터 디스크: 필요한 서버 디스크 파티션을 선택적으로 마운트할 수 있습니다. 전체를 선택하면 추가된 모든 디스크가 자동으로 마운트됩니다. 보존 모드(네트워크 부팅)/보존 모드(로컬 부팅): 이 옵션을 선택하면 클라이언트 컴퓨터가 다시 시작될 때마다 시스템 이미지를 복원하지 않습니다. 운영 체제의 개인 데이터는 보존됩니다.",-1)),n(" ### Advanced "),t[7]||(t[7]=e("h3",{id:"고급",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#고급"},[e("span",null,"고급")])],-1)),n(` Enable DHCP for local boot: Whether to enable DHCP automatic IP allocation function for network card when booting locally offline VHD.
Network Boot DHCP Server: When booting PXE over network, specify the server network card IP that assigns IP to client machine. The default 0.0.0.0 is to automatically select.
Subnet Mask, Gateway, Preferred DNS, Alternate DNS: The network settings of the client machine. If not set, the global settings will be used.
Boot Mode: Allow network boot, prohibit network boot, must log in before booting, boot from local disk, boot menu, log in after local boot
Network Boot Mode: Legacy, Compatible, Windows10, UEFI, Legacy(VLAN), Compatible(VLAN), Windows10(VLAN), UEFI(VLAN), UEFI SNPONLY, UEFI IPXE, UEFI SHELL
Write-back Disk: Customize the server write-back disk settings for this computer when booting over network
Windows Key: After setting the Windows key, the client machine will automatically enter the key to register the operating system after booting. `),t[8]||(t[8]=e("p",null,"로컬 부팅을 위해 DHCP 활성화: 로컬 오프라인 VHD를 부팅할 때 네트워크 카드에 대한 DHCP 자동 IP 할당 기능을 활성화할지 여부입니다. 네트워크 부팅 DHCP 서버: 네트워크를 통해 PXE를 부팅하는 경우 클라이언트 시스템에 IP를 할당하는 서버 네트워크 카드 IP를 지정합니다. 기본값 0.0.0.0은 자동으로 선택됩니다. 서브넷 마스크, 게이트웨이, 기본 DNS, 대체 DNS: 클라이언트 시스템의 네트워크 설정입니다. 설정하지 않으면 전역 설정이 사용됩니다. 부팅 모드: 네트워크 부팅 허용, 네트워크 부팅 금지, 부팅 전에 로그인해야 함, 로컬 디스크에서 부팅, 부팅 메뉴, 로컬 부팅 후 로그인 네트워크 부팅 모드: 레거시, 호환 가능, Windows10, UEFI, 레거시(VLAN), 호환 가능(VLAN), Windows10(VLAN), UEFI(VLAN), UEFI SNPONLY, UEFI IPXE, UEFI SHELL 후기입 디스크: 네트워크를 통해 부팅할 때 이 컴퓨터에 대한 서버 후기입 디스크 설정을 사용자 정의합니다. Windows 키: Windows 키를 설정한 후 클라이언트 시스템은 부팅 후 운영 체제를 등록하기 위해 자동으로 키를 입력합니다.",-1)),n(" ### Update Options "),t[9]||(t[9]=e("h3",{id:"업데이트-옵션",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#업데이트-옵션"},[e("span",null,"업데이트 옵션")])],-1)),n(` Update Mode: Manual Update, Manual Update and Install, Manual Update and Restart, Manual Update and Delayed Restart, Automatic Update, Automatic Update and Install, Automatic Update and Restart, Automatic Update and Delayed Restart, Forced Update, Automatic Update after Booting
P2P Mode: Only update from server, only update from other update sources, automatically update from server and update sources, automatically update from all client machines, automatically update from server and all client machines
Update Source IP List: Set the client machine IP that acts as an update source. One IP per line. Multiple lines indicate multiple update sources. `),t[10]||(t[10]=e("p",null,"업데이트 모드: 수동 업데이트, 수동 업데이트 및 설치, 수동 업데이트 및 다시 시작, 수동 업데이트 및 지연된 다시 시작, 자동 업데이트, 자동 업데이트 및 설치, 자동 업데이트 및 다시 시작, 자동 업데이트 및 지연된 다시 시작, 강제 업데이트, 부팅 후 자동 업데이트 P2P 모드: 서버에서만 업데이트, 다른 업데이트 소스에서만 업데이트, 서버 및 업데이트 소스에서 자동 업데이트, 모든 클라이언트 컴퓨터에서 자동 업데이트, 서버 및 모든 클라이언트 컴퓨터에서 자동 업데이트 업데이트 소스 IP 목록: 업데이트 소스 역할을 하는 클라이언트 컴퓨터 IP를 설정합니다. 한 줄에 하나의 IP입니다. 여러 줄은 여러 업데이트 소스를 나타냅니다.",-1)),n(" ### Configuration "),t[11]||(t[11]=e("h3",{id:"구성",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#구성"},[e("span",null,"구성")])],-1)),n(` Screen Resolution: The custom screen resolution that is automatically modified after the client machine boots up.
USB Drive: You can disable read/write access to USB drives or read-only access.
Default Printer: You can set which printer is default.
Default Input Method: You can set default input method
Memory Cache / Disk Cache: Set the cache size of all disks on the client machine. You must first install disk cache component on client machine. Memory cache uses client machine's memory as write cache. File cache uses local SSD installed on client machine as secondary cache. `),t[12]||(t[12]=e("p",null,"화면 해상도: 클라이언트 컴퓨터가 부팅된 후 자동으로 수정되는 사용자 정의 화면 해상도입니다. USB 드라이브: USB 드라이브에 대한 읽기/쓰기 액세스 또는 읽기 전용 액세스를 비활성화할 수 있습니다. 기본 프린터: 기본 프린터를 설정할 수 있습니다. 기본 입력 방법: 기본 입력 방법을 설정할 수 있습니다. 메모리 캐시/디스크 캐시: 클라이언트 컴퓨터에 있는 모든 디스크의 캐시 크기를 설정합니다. 먼저 클라이언트 컴퓨터에 디스크 캐시 구성 요소를 설치해야 합니다. 메모리 캐시는 클라이언트 시스템의 메모리를 쓰기 캐시로 사용합니다. 파일 캐시는 클라이언트 시스템에 설치된 로컬 SSD를 보조 캐시로 사용합니다.",-1)),n(" ### Watermark "),t[13]||(t[13]=e("h3",{id:"워터마크",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#워터마크"},[e("span",null,"워터마크")])],-1)),n(` Screen watermark is a digital watermark technology that displays an image or text on the screen to identify and track screen content. It can prevent unauthorized screenshots and screen recordings and effectively prevent sensitive information leakage.
There are many ways to set up screen watermarks. Users can customize watermark text content, font size color position transparency etc. `),t[14]||(t[14]=e("p",null,"스크린 워터마크는 화면 내용을 식별하고 추적하기 위해 화면에 이미지나 텍스트를 표시하는 디지털 워터마크 기술입니다. 무단 스크린샷 및 화면 녹화를 방지하고 민감한 정보 유출을 효과적으로 방지할 수 있습니다. 화면 워터마크를 설정하는 방법에는 여러 가지가 있습니다. 사용자는 워터마크 텍스트 내용, 글꼴 크기 색상 위치 투명도 등을 사용자 정의할 수 있습니다.",-1)),n(" ### Personal Disk "),t[15]||(t[15]=e("h3",{id:"개인-디스크",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#개인-디스크"},[e("span",null,"개인 디스크")])],-1)),n(" Personal disk is a fixed disk used to store personal data of client machines. It can have multiple sources. Server files server shared directories and third-party iscsi cloud disks. "),t[16]||(t[16]=e("p",null,"개인 디스크는 클라이언트 컴퓨터의 개인 데이터를 저장하는 데 사용되는 고정 디스크입니다. 여러 소스를 가질 수 있습니다. 서버 파일 서버 공유 디렉터리 및 타사 iscsi 클라우드 디스크.",-1)),n(" ### Personal Profile "),t[17]||(t[17]=e("h3",{id:"개인-프로필",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#개인-프로필"},[e("span",null,"개인 프로필")])],-1)),n(` Windows personal profile refers to some files and folders stored on computer that record user's personal settings preferences documents etc. Windows personal profile mainly includes two parts:

- Registry configuration unit. This is a file named NTuser.dat which saves user's registry-based preferences and configurations. Registry configuration unit is loaded by system when user logs in and mapped to HKEY_CURRENT_USER registry entry.
- A set of configuration file folders in file system. These folders are stored in profile directory according to user. These folders contain subfolders and data used by applications and other system components such as documents desktop start menu etc.

The main working principle is to transfer specified files or directories to hidden directory on local disk. This can effectively separate personal data from system image and realize multiple users using same image. It can let each user have their own independent working environment and also facilitate backup and recovery of user data. `),t[18]||(t[18]=e("p",null,"Windows 개인 프로필은 사용자의 개인 설정 기본 설정 문서 등을 기록하는 컴퓨터에 저장된 일부 파일 및 폴더를 의미합니다. Windows 개인 프로필은 주로 두 부분으로 구성됩니다.",-1)),t[19]||(t[19]=e("ul",null,[e("li",null,"레지스트리 구성 단위. 이는 사용자의 레지스트리 기반 기본 설정 및 구성을 저장하는 NTuser.dat라는 파일입니다. 레지스트리 구성 단위는 사용자가 로그인하고 HKEY_CURRENT_USER 레지스트리 항목에 매핑될 때 시스템에 의해 로드됩니다."),e("li",null,"파일 시스템의 구성 파일 폴더 세트입니다. 이 폴더는 사용자에 따라 프로필 디렉터리에 저장됩니다. 이러한 폴더에는 응용 프로그램 및 문서 데스크탑 시작 메뉴 등과 같은 기타 시스템 구성 요소에서 사용되는 하위 폴더와 데이터가 포함되어 있습니다.")],-1)),t[20]||(t[20]=e("p",null,"주요 작동 원리는 지정된 파일이나 디렉터리를 로컬 디스크의 숨겨진 디렉터리로 전송하는 것입니다. 이를 통해 시스템 이미지에서 개인 데이터를 효과적으로 분리하고 동일한 이미지를 사용하는 여러 사용자를 구현할 수 있습니다. 이를 통해 각 사용자는 자신만의 독립적인 작업 환경을 가질 수 있으며 사용자 데이터의 백업 및 복구도 용이하게 됩니다.",-1))])}const m=o(l,[["render",d],["__file","computer.html.vue"]]),h=JSON.parse('{"path":"/guide/web/computer.html","title":"컴퓨터 관리","lang":"en-US","frontmatter":{"title":"컴퓨터 관리","icon":"fa-solid fa-desktop","order":4,"category":"웹 UI","tag":"Computer Management","description":"컴퓨터 목록 컴퓨터 목록컴퓨터 목록 컴퓨터 목록은 관리되는 모든 컴퓨터를 표시하며 해당 컴퓨터의 이름, IP 및 MAC 주소, 기타 속성을 보여줍니다. 열의 순서, 가시성 및 너비를 사용자 정의할 수 있습니다. 행 순서, 정렬 범주 및 기타 표시 방법을 정의할 수도 있습니다. 컴퓨터 추가/편집 컴퓨터 속성컴퓨터 속성...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/web/computer.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"컴퓨터 관리"}],["meta",{"property":"og:description","content":"컴퓨터 목록 컴퓨터 목록컴퓨터 목록 컴퓨터 목록은 관리되는 모든 컴퓨터를 표시하며 해당 컴퓨터의 이름, IP 및 MAC 주소, 기타 속성을 보여줍니다. 열의 순서, 가시성 및 너비를 사용자 정의할 수 있습니다. 행 순서, 정렬 범주 및 기타 표시 방법을 정의할 수도 있습니다. 컴퓨터 추가/편집 컴퓨터 속성컴퓨터 속성..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Computer Management"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"컴퓨터 관리\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"컴퓨터 목록","slug":"컴퓨터-목록","link":"#컴퓨터-목록","children":[]},{"level":2,"title":"컴퓨터 추가/편집","slug":"컴퓨터-추가-편집","link":"#컴퓨터-추가-편집","children":[{"level":3,"title":"기본","slug":"기본","link":"#기본","children":[]},{"level":3,"title":"고급","slug":"고급","link":"#고급","children":[]},{"level":3,"title":"업데이트 옵션","slug":"업데이트-옵션","link":"#업데이트-옵션","children":[]},{"level":3,"title":"구성","slug":"구성","link":"#구성","children":[]},{"level":3,"title":"워터마크","slug":"워터마크","link":"#워터마크","children":[]},{"level":3,"title":"개인 디스크","slug":"개인-디스크","link":"#개인-디스크","children":[]},{"level":3,"title":"개인 프로필","slug":"개인-프로필","link":"#개인-프로필","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.01,"words":902},"filePathRelative":"guide/web/computer.md","autoDesc":true}');export{m as comp,h as data};
