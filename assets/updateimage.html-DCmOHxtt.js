import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as n,b as e,d as i,o}from"./app-BPnFUPha.js";const r={};function s(d,t){return o(),l("div",null,[n(" # Local VHD Image Update Guide "),t[0]||(t[0]=e("h1",{id:"로컬-vhd-이미지-업데이트-안내",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#로컬-vhd-이미지-업데이트-안내"},[e("span",null,"로컬 VHD 이미지 업데이트 안내")])],-1)),n(" This document introduces how to use the commands on the server to update the local VHD images on the client, as well as the status and options during the update process. "),t[1]||(t[1]=e("p",null,"이 문서에서는 서버에서 명령을 사용하여 클라이언트의 로컬 VHD 이미지를 업데이트하는 방법과 업데이트 프로세스 중 상태 및 옵션을 소개합니다.",-1)),n(" ## Image Update Overview "),t[2]||(t[2]=e("h2",{id:"이미지-업데이트-개요",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#이미지-업데이트-개요"},[e("span",null,"이미지 업데이트 개요")])],-1)),n(" ### Image and Restore Point Update Method "),t[3]||(t[3]=e("h3",{id:"이미지-및-복원-지점-업데이트-방법",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#이미지-및-복원-지점-업데이트-방법"},[e("span",null,"이미지 및 복원 지점 업데이트 방법")])],-1)),n(` The local VHD image is a virtual hard disk file used for offline booting, which contains data such as the operating system and applications. The restore point is a version of the image file, which can be used to restore or roll back to a certain point in time.

The image and restore point are updated in a block-by-block manner, only updating the changed blocks, which can save time and bandwidth. When updating, a temporary file is created first, copying the same blocks from the local and downloading the different blocks from the server or update source. After the update is completed, the temporary file is renamed to the new version of the file. `),t[4]||(t[4]=e("p",null,"로컬 VHD 이미지는 오프라인 부팅에 사용되는 가상 하드 디스크 파일로 운영 체제, 응용 프로그램 등의 데이터가 포함되어 있습니다. 복원 지점은 특정 시점으로 복원하거나 롤백하는 데 사용할 수 있는 이미지 파일의 버전입니다.",-1)),t[5]||(t[5]=e("p",null,"이미지와 복원 지점은 블록별로 업데이트되며 변경된 블록만 업데이트되므로 시간과 대역폭이 절약됩니다. 업데이트 시 임시 파일이 먼저 생성되어 로컬에서 동일한 블록을 복사하고 서버나 업데이트 소스에서 다른 블록을 다운로드합니다. 업데이트가 완료되면 임시 파일의 이름이 새 버전의 파일로 변경됩니다.",-1)),n(" ### Image Update Steps and Status "),t[6]||(t[6]=e("h3",{id:"이미지-업데이트-단계-및-상태",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#이미지-업데이트-단계-및-상태"},[e("span",null,"이미지 업데이트 단계 및 상태")])],-1)),n(` The new version of the file needs to be installed to the boot loader to start. After installation, you need to restart the computer to take effect.

The image update is divided into three steps:

- Step 1: Create a temporary file, copy and download blocks.
- Step 2: Rename the temporary file and install it to the boot loader.
- Step 3: Restart the computer and complete the update.

The image update has four statuses:

- Unfinished update: Step 1 has not started or has not been completed.
- Waiting for installation: Step 1 is completed, waiting for installation or executing step 2.
- Waiting for restart: Step 2 is completed, waiting for restart or executing step 3.
- Completed update: Step 3 is completed, update is completed, status after restart. `),t[7]||(t[7]=i("<p>시작하려면 파일의 새 버전을 부트 로더에 설치해야 합니다. 설치 후 적용하려면 컴퓨터를 다시 시작해야 합니다.</p><p>이미지 업데이트는 세 단계로 구분됩니다.</p><ul><li>1단계: 임시 파일을 생성하고 블록을 복사 및 다운로드합니다.</li><li>2단계: 임시 파일의 이름을 바꾸고 부트로더에 설치합니다.</li><li>3단계: 컴퓨터를 다시 시작하고 업데이트를 완료합니다.</li></ul><p>이미지 업데이트에는 네 가지 상태가 있습니다.</p><ul><li>미완료 업데이트 : 1단계가 시작되지 않았거나 완료되지 않았습니다.</li><li>설치 대기 중 : 1단계가 완료되어 설치를 기다리거나 2단계를 실행합니다.</li><li>재시작 대기 중 : 2단계가 완료되어 재시작을 기다리거나 3단계를 실행합니다.</li><li>업데이트 완료 : 3단계 완료, 업데이트 완료, 재시작 후 상태입니다.</li></ul>",5)),n(" ## Image Update Commands "),t[8]||(t[8]=e("h2",{id:"이미지-업데이트-명령",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#이미지-업데이트-명령"},[e("span",null,"이미지 업데이트 명령")])],-1)),n(` The image update commands are divided into two categories:

- Manual update commands: One-time commands executed on the server to update the image on the client. The client can also save them when offline, and execute them when online.
- Automatic update commands: Setting commands executed on the server to update the image on the client. The client will automatically execute them as long as it meets the update conditions. `),t[9]||(t[9]=e("p",null,"이미지 업데이트 명령은 두 가지 범주로 나뉩니다.",-1)),t[10]||(t[10]=e("ul",null,[e("li",null,"수동 업데이트 명령: 클라이언트의 이미지를 업데이트하기 위해 서버에서 실행되는 일회성 명령입니다. 클라이언트는 오프라인일 때 저장하고 온라인일 때 실행할 수도 있습니다."),e("li",null,"자동 업데이트 명령: 클라이언트의 이미지를 업데이트하기 위해 서버에서 실행되는 명령을 설정합니다. 클라이언트는 업데이트 조건을 충족하는 한 자동으로 실행합니다.")],-1)),n(" ### Manual Update Commands "),t[11]||(t[11]=e("h3",{id:"수동-업데이트-명령",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#수동-업데이트-명령"},[e("span",null,"수동 업데이트 명령")])],-1)),n(` There are several manual update commands:

- Manual update: Manually execute the next step.
- Manual update and install: Manually execute the next step until installation is complete.
- Manual update and restart: Manually execute the next step until restart.
- Manual update and delay restart: Manually execute the next step until delay restart. `),t[12]||(t[12]=e("p",null,"몇 가지 수동 업데이트 명령이 있습니다:",-1)),t[13]||(t[13]=e("ul",null,[e("li",null,"수동 업데이트: 다음 단계를 수동으로 실행합니다."),e("li",null,"수동 업데이트 및 설치: 설치가 완료될 때까지 다음 단계를 수동으로 실행합니다."),e("li",null,"수동 업데이트 및 재시작: 재시작할 때까지 다음 단계를 수동으로 실행합니다."),e("li",null,"수동 업데이트 및 지연 재시작: 지연 재시작까지 다음 단계를 수동으로 실행합니다.")],-1)),n(" ### Automatic Update Commands "),t[14]||(t[14]=e("h3",{id:"자동-업데이트-명령",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#자동-업데이트-명령"},[e("span",null,"자동 업데이트 명령")])],-1)),n(` There are several automatic update commands:

- Automatic update: Automatically execute the next step when meeting the update conditions.
- Automatic update and install: Automatically execute the next step until installation is complete when meeting the update conditions.
- Automatic update and restart: Automatically execute the next step until restart when meeting the update conditions.
- Automatic update and delay restart: Automatically execute the next step until delay restart when meeting the update conditions.
- Forced update: When meeting the update conditions, lock the screen and perform an update at startup, not allowing users to cancel.
- Automatic startup and perform an update: When meeting the update conditions, automatically wake up the computer in shutdown state, lock the screen and perform an update, not allowing users to cancel. `),t[15]||(t[15]=e("p",null,"몇 가지 자동 업데이트 명령이 있습니다:",-1)),t[16]||(t[16]=e("ul",null,[e("li",null,"자동 업데이트 : 업데이트 조건 만족 시 자동으로 다음 단계를 실행합니다."),e("li",null,"자동 업데이트 및 설치 : 업데이트 조건 만족 시 설치가 완료될 때까지 자동으로 다음 단계를 실행합니다."),e("li",null,"자동 업데이트 및 재시작 : 업데이트 조건 만족 시 재시작까지 다음 단계를 자동으로 실행합니다."),e("li",null,"자동 업데이트 및 지연 재시작 : 업데이트 조건 만족 시 지연 재시작까지 자동으로 다음 단계를 실행합니다."),e("li",null,"강제 업데이트 : 업데이트 조건 충족 시 화면을 잠그고, 시작 시 업데이트를 진행하며, 사용자가 취소할 수 없도록 합니다."),e("li",null,"자동 시작 및 업데이트 수행: 업데이트 조건 충족 시 종료된 컴퓨터를 자동으로 깨워 화면을 잠그고 업데이트를 수행하며, 사용자가 취소할 수 없습니다.")],-1)),n(" ## Delay Restart Option "),t[17]||(t[17]=e("h2",{id:"지연-재시작-옵션",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#지연-재시작-옵션"},[e("span",null,"지연 재시작 옵션")])],-1)),n(` The delay restart option means that after the update is completed, it will restart after a period of time. This allows the client to restart when it is not busy, avoiding affecting user usage.

The delay restart option has two parameters: effective time and idle time. Within the effective time range, if there is no user operation reaching idle time, it will restart. `),t[18]||(t[18]=e("p",null,"지연 재시작 옵션은 업데이트가 완료된 후 일정 시간 후에 다시 시작하는 것을 의미합니다. 이를 통해 클라이언트는 사용량이 없을 때 다시 시작하여 사용자 사용에 영향을 주지 않습니다.",-1)),t[19]||(t[19]=e("p",null,"지연 재시작 옵션에는 유효 시간과 유휴 시간이라는 두 가지 매개변수가 있습니다. 유효 시간 범위 내에서 유휴 시간에 도달한 사용자 작업이 없으면 다시 시작됩니다.",-1)),n(" ## P2P Update "),t[20]||(t[20]=e("h2",{id:"p2p-업데이트",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#p2p-업데이트"},[e("span",null,"P2P 업데이트")])],-1)),n(` P2P update is a technology that uses the network connection between clients in a local area network to share and transfer image and restore point files, thereby reducing the traffic demand on the server.

P2P update supports four modes, which can be selected according to different scenarios and needs:
- Update only from server: The client only obtains image and restore point files from the server, and does not use the P2P network.
- Update only from update source: The client only obtains image and restore point files from the specified update source, and does not use the server or other clients.
- Update automatically from server and update source: The client prefers to obtain image and restore point files from the specified update source, and if the update source is unavailable or slow, it obtains them from the server.
- Update automatically from all clients: The client prefers to obtain image and restore point files from other clients in the local area network, and if there are no available clients or they are slow, it obtains them from the server.
- Update automatically from all clients and server: The client obtains image and restore point files from both other clients in the local area network and the server, and automatically adjusts the download speed according to the network condition.

The P2P update source list refers to the specified update source IP addresses that the client looks for when updating in the local area network. The update source list is configured by the user, and can be other clients or dedicated servers. `),t[21]||(t[21]=e("p",null,"P2P 업데이트는 근거리 통신망에 있는 클라이언트 간 네트워크 연결을 이용해 이미지와 복원점 파일을 공유, 전송함으로써 서버의 트래픽 수요를 줄이는 기술이다.",-1)),t[22]||(t[22]=e("p",null,"P2P 업데이트는 다양한 시나리오와 필요에 따라 선택할 수 있는 4가지 모드를 지원합니다.",-1)),t[23]||(t[23]=e("ul",null,[e("li",null,"서버에서만 업데이트: 클라이언트는 서버에서 이미지 및 복원 지점 파일만 가져오고 P2P 네트워크를 사용하지 않습니다."),e("li",null,"업데이트 소스에서만 업데이트: 클라이언트는 지정된 업데이트 소스에서만 이미지 및 복원 지점 파일을 가져오고 서버나 다른 클라이언트를 사용하지 않습니다."),e("li",null,"서버 및 업데이트 소스에서 자동 업데이트: 클라이언트는 지정된 업데이트 소스에서 이미지 및 복원 지점 파일을 가져오는 것을 선호하며, 업데이트 소스를 사용할 수 없거나 느린 경우 서버에서 가져옵니다."),e("li",null,"모든 클라이언트에서 자동 업데이트: 클라이언트는 LAN에 있는 다른 클라이언트로부터 이미지 및 복원 지점 파일을 가져오는 것을 선호하며, 사용 가능한 클라이언트가 없거나 속도가 느린 경우 서버에서 가져옵니다."),e("li",null,"모든 클라이언트 및 서버에서 자동 업데이트: 클라이언트는 LAN에 있는 다른 클라이언트와 서버 모두에서 이미지 및 복원 지점 파일을 가져오고 네트워크 상태에 따라 다운로드 속도를 자동으로 조정합니다.")],-1)),t[24]||(t[24]=e("p",null,"P2P 업데이트 소스 목록은 LAN에서 업데이트할 때 클라이언트가 찾는 지정된 업데이트 소스 IP 주소를 나타냅니다. 업데이트 소스 목록은 사용자가 구성하며 다른 클라이언트 또는 전용 서버일 수 있습니다.",-1))])}const m=a(r,[["render",s],["__file","updateimage.html.vue"]]),h=JSON.parse('{"path":"/guide/reference/updateimage.html","title":"로컬 VHD 이미지 업데이트 가이드","lang":"en-US","frontmatter":{"title":"로컬 VHD 이미지 업데이트 가이드","icon":"fa-solid fa-arrow-trend-up","order":1,"category":["참고사항"],"tag":["Local VHD Image Update Guide"],"description":"로컬 VHD 이미지 업데이트 안내 이 문서에서는 서버에서 명령을 사용하여 클라이언트의 로컬 VHD 이미지를 업데이트하는 방법과 업데이트 프로세스 중 상태 및 옵션을 소개합니다. 이미지 업데이트 개요 이미지 및 복원 지점 업데이트 방법 로컬 VHD 이미지는 오프라인 부팅에 사용되는 가상 하드 디스크 파일로 운영 체제,...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/reference/updateimage.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"로컬 VHD 이미지 업데이트 가이드"}],["meta",{"property":"og:description","content":"로컬 VHD 이미지 업데이트 안내 이 문서에서는 서버에서 명령을 사용하여 클라이언트의 로컬 VHD 이미지를 업데이트하는 방법과 업데이트 프로세스 중 상태 및 옵션을 소개합니다. 이미지 업데이트 개요 이미지 및 복원 지점 업데이트 방법 로컬 VHD 이미지는 오프라인 부팅에 사용되는 가상 하드 디스크 파일로 운영 체제,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Local VHD Image Update Guide"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"로컬 VHD 이미지 업데이트 가이드\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"이미지 업데이트 개요","slug":"이미지-업데이트-개요","link":"#이미지-업데이트-개요","children":[{"level":3,"title":"이미지 및 복원 지점 업데이트 방법","slug":"이미지-및-복원-지점-업데이트-방법","link":"#이미지-및-복원-지점-업데이트-방법","children":[]},{"level":3,"title":"이미지 업데이트 단계 및 상태","slug":"이미지-업데이트-단계-및-상태","link":"#이미지-업데이트-단계-및-상태","children":[]}]},{"level":2,"title":"이미지 업데이트 명령","slug":"이미지-업데이트-명령","link":"#이미지-업데이트-명령","children":[{"level":3,"title":"수동 업데이트 명령","slug":"수동-업데이트-명령","link":"#수동-업데이트-명령","children":[]},{"level":3,"title":"자동 업데이트 명령","slug":"자동-업데이트-명령","link":"#자동-업데이트-명령","children":[]}]},{"level":2,"title":"지연 재시작 옵션","slug":"지연-재시작-옵션","link":"#지연-재시작-옵션","children":[]},{"level":2,"title":"P2P 업데이트","slug":"p2p-업데이트","link":"#p2p-업데이트","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.17,"words":951},"filePathRelative":"guide/reference/updateimage.md","autoDesc":true}');export{m as comp,h as data};
