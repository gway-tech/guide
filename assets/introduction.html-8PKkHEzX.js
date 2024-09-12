import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,b as t,e as o,f as i,o as s}from"./app-BCwBI7cb.js";const r={};function p(d,e){return s(),a("div",null,[n(" ## Introduction "),e[0]||(e[0]=t("h2",{id:"소개",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#소개"},[t("span",null,"소개")])],-1)),n(` **CloudDesktop** is a system management software integrating local VHD offline startup, PXE network startup and management interfaces.

The software supports packaging operating systems into VHD files for local startup, and also supports PXE network startup. It provides both traditional interface and web management platform to realize centralized management of clients. `),e[1]||(e[1]=t("p",null,[t("strong",null,"Cloud-i"),o("는 로컬 VHD 오프라인 부팅, PXE 네트워크 부팅 및 관리 인터페이스를 통합한 시스템 관리 소프트웨어입니다.")],-1)),e[2]||(e[2]=t("p",null,"이 소프트웨어는 로컬 부팅을 위해 운영 체제를 VHD 파일로 패키징하는 것을 지원하고 PXE 네트워크 부팅도 지원합니다. 클라이언트의 중앙 집중식 관리를 실현하기 위해 전통적인 인터페이스와 웹 관리 플랫폼을 모두 제공합니다.",-1)),n(" ## Product Introduction "),e[3]||(e[3]=t("h2",{id:"제품-소개",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#제품-소개"},[t("span",null,"제품 소개")])],-1)),n(` **CloudDesktop** implements the following core functions:

1. Support packaging operating systems into VHD format virtual disks for local startup, enabling system startup in offline environments.

2. Support PXE network startup to load operating systems from servers, realizing diskless startup.

3. Provide traditional interface for local management of server-side settings.

4. Provide web management platform for administrators to remotely monitor and manage clients.

5. Support Windows, Linux and domestic operating systems with strong compatibility.

6. Realize sharing management of game disks, printers and other resources.

7. Support a variety of advanced features including multi-system startup, personal disks, etc.

Compared with ordinary PXE network startup solutions, **CloudDesktop** has the advantages of offline local startup and improved management functions. It can adapt to more scenarios and greatly simplify management workload. `),e[4]||(e[4]=i("<p><strong>Cloud-i</strong>는 다음과 같은 핵심 기능을 구현합니다.</p><ol><li><p>로컬 부팅을 위해 운영 체제를 VHD 형식 가상 디스크로 패키징하여 오프라인 환경에서 시스템을 시작할 수 있도록 지원합니다.</p></li><li><p>PXE 네트워크 부팅을 지원하여 서버에서 운영 체제를 로드하여 디스크 없는 부팅을 실현합니다.</p></li><li><p>서버측 설정의 로컬 관리를 위한 기존 인터페이스를 제공합니다.</p></li><li><p>관리자가 클라이언트를 원격으로 모니터링하고 관리할 수 있는 웹 관리 플랫폼을 제공합니다.</p></li><li><p>강력한 호환성으로 Windows, Linux 및 국내 운영 체제를 지원합니다.</p></li><li><p>게임 디스크, 프린터 및 기타 리소스의 공유 관리를 실현합니다.</p></li><li><p>다중 시스템 시작, 개인 디스크 등 다양한 고급 기능을 지원합니다.</p></li></ol><p>일반 PXE 네트워크 부팅 솔루션과 비교하여 <strong>Cloud-i</strong>는 오프라인 로컬 시작 및 향상된 관리 기능의 장점을 가지고 있습니다. 더 많은 시나리오에 적응하고 관리 워크로드를 크게 단순화할 수 있습니다.</p>",3)),n(" ## PXE Network Startup Technology "),e[5]||(e[5]=t("h2",{id:"pxe-네트워크-부팅-기술",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pxe-네트워크-부팅-기술"},[t("span",null,"PXE 네트워크 부팅 기술")])],-1)),n(` PXE network startup is the key technology for **CloudDesktop** to batch start clients over the network.

Working Principles:

1. The client NIC requests IP and other information from the DHCP server.

2. The DHCP server returns startup information and TFTP server address.

3. The client downloads the boot file from the TFTP server.

4. Load the boot file and invoke the system image to start the operating system.

5. After startup, the operating system can load drivers and applications.

Advantages of PXE startup:

1. No local storage of operating system, network-loaded, enabling centralized management.

2. Batch quick diskless startup of multiple clients, saving time.

3. All clients have fully consistent operating systems and software environments.

4. No trace after startup, cleaned after shutdown, safe and reliable.

5. Support various Windows systems and Linux systems with strong compatibility. `),e[6]||(e[6]=i("<p>PXE 네트워크 부팅은 <strong>Cloud-i</strong>가 네트워크를 통해 클라이언트를 일괄 시작하는 핵심 기술입니다.</p><p>작동 원리:</p><ol><li><p>클라이언트 NIC는 DHCP 서버에 IP 및 기타 정보를 요청합니다.</p></li><li><p>DHCP 서버는 시작 정보와 TFTP 서버 주소를 반환합니다.</p></li><li><p>클라이언트는 TFTP 서버에서 부팅 파일을 다운로드합니다.</p></li><li><p>부팅 파일을 로드하고 시스템 이미지를 호출하여 운영 체제를 시작합니다.</p></li><li><p>시작 후 운영 체제는 드라이버와 응용 프로그램을 로드할 수 있습니다.</p></li></ol><p>PXE 부팅의 장점:</p><ol><li><p>운영 체제의 로컬 저장소가 없고 네트워크에 로드되어 중앙 집중식 관리가 가능합니다.</p></li><li><p>디스크 없이 여러 클라이언트를 일괄적으로 빠르게 시작하여 시간을 절약합니다.</p></li><li><p>모든 클라이언트는 완전히 일관된 운영 체제와 소프트웨어 환경을 갖추고 있습니다.</p></li><li><p>시동 후 흔적이 없으며 종료 후 청소되어 안전하고 신뢰할 수 있습니다.</p></li><li><p>강력한 호환성으로 다양한 Windows 시스템과 Linux 시스템을 지원합니다.</p></li></ol>",5)),n(" ## Local VHD Offline Startup Technology "),e[7]||(e[7]=t("h2",{id:"로컬-vhd-오프라인-부팅-기술",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#로컬-vhd-오프라인-부팅-기술"},[t("span",null,"로컬 VHD 오프라인 부팅 기술")])],-1)),n(" Local VHD startup is the unique core technology of **CloudDesktop**, which can start the system without a network. "),e[8]||(e[8]=t("p",null,[o("로컬 VHD 부팅은 네트워크 없이 시스템을 시작할 수 있는 "),t("strong",null,"Cloud-i"),o("만의 핵심 기술입니다.")],-1)),n(` Working Principles:

1. Make the operating system into a VHD format virtual disk file.

2. Copy the VHD file to the client via network or mobile device.

3. The client sets the local VHD disk as the first boot item.

4. Directly start up and load operating system files from the VHD.

Advantages of Local VHD:

1. No network required, enabling completely offline system startup.

2. Fast startup speed, based on local disk speed.

3. Can persistently save user data without loss after shutdown.

4. The client can still start up if the disk fails.

5. The administrator can complete deployment of all clients in seconds by updating the VHD. `),e[9]||(e[9]=i("<p>작동 원리:</p><ol><li><p>운영 체제를 VHD 형식의 가상 디스크 파일로 만듭니다.</p></li><li><p>VHD 파일을 네트워크 또는 모바일 장치를 통해 클라이언트에 복사합니다.</p></li><li><p>클라이언트는 로컬 VHD 디스크를 첫 번째 부팅 항목으로 설정합니다.</p></li><li><p>VHD에서 운영 체제 파일을 직접 시작하고 로드합니다.</p></li></ol><p>로컬 VHD의 장점:</p><ol><li><p>네트워크가 필요하지 않으므로 완전한 오프라인 시스템 부팅이 가능합니다.</p></li><li><p>로컬 디스크 속도를 기준으로 빠른 시작 속도.</p></li><li><p>종료 후에도 사용자 데이터를 손실 없이 지속적으로 저장할 수 있습니다.</p></li><li><p>디스크에 오류가 발생하더라도 클라이언트는 계속 시작할 수 있습니다.</p></li><li><p>관리자는 VHD를 업데이트하여 몇 초 안에 모든 클라이언트의 배포를 완료할 수 있습니다.</p></li></ol>",4)),n(" ## Traditional Management Interface "),e[10]||(e[10]=t("h2",{id:"기존-관리-인터페이스",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#기존-관리-인터페이스"},[t("span",null,"기존 관리 인터페이스")])],-1)),n(" **CloudDesktop** provides a fully-featured traditional interface to support local management of server-side settings. "),e[11]||(e[11]=t("p",null,[t("strong",null,"Cloud-i"),o("는 서버 측 설정의 로컬 관리를 지원하는 모든 기능을 갖춘 기존 인터페이스를 제공합니다.")],-1)),n(` It can achieve:

1. Manage client connection sessions.

2. View hardware and performance statistics.

3. Configure DHCP, TFTP and other network service parameters.

4. Upload and manage system images.

5. Allocate client address ranges, etc.

6. Set game disk, printer sharing parameters.

7. View logs and help information, etc.

The traditional interface is simple to operate with direct visualization of server-side settings. `),e[12]||(e[12]=i("<p>이를 통해 다음을 달성할 수 있습니다.</p><ol><li><p>클라이언트 연결 세션을 관리합니다.</p></li><li><p>하드웨어 및 성능 통계를 봅니다.</p></li><li><p>DHCP, TFTP 및 기타 네트워크 서비스 매개변수를 구성합니다.</p></li><li><p>시스템 이미지를 업로드하고 관리합니다.</p></li><li><p>클라이언트 주소 범위 등을 할당합니다.</p></li><li><p>게임 디스크, 프린터 공유 매개변수를 설정합니다.</p></li><li><p>로그 및 도움말 정보 등을 봅니다.</p></li></ol><p>기존 인터페이스는 서버측 설정을 직접 시각화하여 작동이 간단합니다.</p>",3)),n(" ## Web Management Platform "),e[13]||(e[13]=t("h2",{id:"웹-관리-플랫폼",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#웹-관리-플랫폼"},[t("span",null,"웹 관리 플랫폼")])],-1)),n(` **CloudDesktop** also provides a web management platform for administrators to remotely access via browsers.

Main Functions:

1. Remotely shutdown, restart clients.

2. View client runtime information and image versions.

3. Remotely login client desktops.

4. Batch upload and deploy images.

5. View real-time performance and traffic statistics.

6. Query various log information.

7. Unified configuration of client parameters, etc.

The web management enables centralized monitoring and management of the **CloudDesktop** system, greatly reducing management workload. `),e[14]||(e[14]=i("<p><strong>Cloud-i</strong>는 관리자가 브라우저를 통해 원격으로 액세스할 수 있는 웹 관리 플랫폼도 제공합니다.</p><p>주요 기능:</p><ol><li><p>원격으로 클라이언트를 종료하고 다시 시작합니다.</p></li><li><p>클라이언트 런타임 정보 및 이미지 버전을 봅니다.</p></li><li><p>클라이언트 데스크톱에 원격으로 로그인합니다.</p></li><li><p>이미지를 일괄 업로드하고 배포합니다.</p></li><li><p>실시간 성능 및 트래픽 통계를 봅니다.</p></li><li><p>다양한 로그 정보를 조회해보세요.</p></li><li><p>클라이언트 매개변수 등의 통합 구성</p></li></ol><p>웹 관리를 통해 <strong>Cloud-i</strong> 시스템을 중앙 집중식으로 모니터링하고 관리할 수 있어 관리 작업량이 크게 줄어듭니다.</p>",4)),n(" ## Typical Application Scenarios "),e[15]||(e[15]=t("h2",{id:"일반적인-애플리케이션-시나리오",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#일반적인-애플리케이션-시나리오"},[t("span",null,"일반적인 애플리케이션 시나리오")])],-1)),n(` **CloudDesktop** is well suited for the following scenarios:

1. Internet cafes and game console management

2. Deployment of computer teaching classrooms

3. Training and exam lab environments

4. Public reading areas

5. Temporary venues and events

6. Standardized desktop deployment within enterprises

By combining PXE network startup and local VHD startup, **CloudDesktop** can effectively adapt to various usage scenarios and greatly simplify client management work and improve stability and efficiency. `),e[16]||(e[16]=i("<p><strong>Cloud-i</strong>는 다음 시나리오에 매우 적합합니다.</p><ol><li><p>PC방 및 게임기 관리</p></li><li><p>컴퓨터 교육 교실 배치</p></li><li><p>교육 및 시험실 환경</p></li><li><p>공개 독서 공간</p></li><li><p>임시 장소 및 행사</p></li><li><p>기업 내 표준화된 데스크탑 배포</p></li></ol><p>PXE 네트워크 부팅과 로컬 VHD 부팅을 결합함으로써 <strong>Cloud-i</strong>는 다양한 사용 시나리오에 효과적으로 적응하고 클라이언트 관리 작업을 크게 단순화하며 안정성과 효율성을 향상시킬 수 있습니다.</p>",3)),n(" ## Conclusion "),e[17]||(e[17]=t("h2",{id:"결론",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#결론"},[t("span",null,"결론")])],-1)),n(" **CloudDesktop** perfectly combines PXE network startup, local VHD offline startup, traditional interface and web management platform. It can efficiently batch deploy clients and realize unified centralized management, simplifying management workload. It also supports Windows and Linux multi-systems with unique technical advantages and extensive application scenarios. "),e[18]||(e[18]=t("p",null,[t("strong",null,"Cloud-i"),o("는 PXE 네트워크부팅, 로컬 VHD 오프라인 부팅, 기존 인터페이스 및 웹 관리 플랫폼을 완벽하게 결합합니다. 클라이언트를 효율적으로 일괄 배포하고 통합된 중앙 집중식 관리를 실현하여 관리 워크로드를 단순화할 수 있습니다. 또한 고유한 기술적 이점과 광범위한 애플리케이션 시나리오를 갖춘 Windows 및 Linux 다중 시스템을 지원합니다.")],-1))])}const c=l(r,[["render",p],["__file","introduction.html.vue"]]),g=JSON.parse('{"path":"/demo/introduction.html","title":"제품 소개","lang":"en-US","frontmatter":{"title":"제품 소개","icon":"fa-solid fa-circle-info","order":1,"category":["Get Started"],"tag":["Product Introduction"],"description":"소개 Cloud-i는 로컬 VHD 오프라인 부팅, PXE 네트워크 부팅 및 관리 인터페이스를 통합한 시스템 관리 소프트웨어입니다. 이 소프트웨어는 로컬 부팅을 위해 운영 체제를 VHD 파일로 패키징하는 것을 지원하고 PXE 네트워크 부팅도 지원합니다. 클라이언트의 중앙 집중식 관리를 실현하기 위해 전통적인 인터페이스...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/demo/introduction.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"제품 소개"}],["meta",{"property":"og:description","content":"소개 Cloud-i는 로컬 VHD 오프라인 부팅, PXE 네트워크 부팅 및 관리 인터페이스를 통합한 시스템 관리 소프트웨어입니다. 이 소프트웨어는 로컬 부팅을 위해 운영 체제를 VHD 파일로 패키징하는 것을 지원하고 PXE 네트워크 부팅도 지원합니다. 클라이언트의 중앙 집중식 관리를 실현하기 위해 전통적인 인터페이스..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Product Introduction"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"제품 소개\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"소개","slug":"소개","link":"#소개","children":[]},{"level":2,"title":"제품 소개","slug":"제품-소개","link":"#제품-소개","children":[]},{"level":2,"title":"PXE 네트워크 부팅 기술","slug":"pxe-네트워크-부팅-기술","link":"#pxe-네트워크-부팅-기술","children":[]},{"level":2,"title":"로컬 VHD 오프라인 부팅 기술","slug":"로컬-vhd-오프라인-부팅-기술","link":"#로컬-vhd-오프라인-부팅-기술","children":[]},{"level":2,"title":"기존 관리 인터페이스","slug":"기존-관리-인터페이스","link":"#기존-관리-인터페이스","children":[]},{"level":2,"title":"웹 관리 플랫폼","slug":"웹-관리-플랫폼","link":"#웹-관리-플랫폼","children":[]},{"level":2,"title":"일반적인 애플리케이션 시나리오","slug":"일반적인-애플리케이션-시나리오","link":"#일반적인-애플리케이션-시나리오","children":[]},{"level":2,"title":"결론","slug":"결론","link":"#결론","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.05,"words":914},"filePathRelative":"demo/introduction.md","autoDesc":true}');export{c as comp,g as data};
