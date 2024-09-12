import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,b as e,o as l}from"./app-BCwBI7cb.js";const o="/guide/assets/personalset-D5eWlM3Z.png",r="/guide/assets/personalset1-CLr66NPg.png",a="/guide/assets/personaladd-BX-t-6kZ.png",d="/guide/assets/personaledit-CBFXAsYd.png",p="/guide/assets/personalset2-C5wAv6t1.png",u="/guide/assets/personallogin-2v-Saz-j.png",g="/guide/assets/personalshare-Db-zIoMS.png",m="/guide/assets/personalshareset-DP9GQteq.png",k="/guide/assets/personaliscsi-CdVlH50j.png",f="/guide/assets/personaliscsiset-Ddb5CRU4.png",y={};function S(c,t){return l(),n("div",null,[i(" ## Fixed personal disk "),t[0]||(t[0]=e("h2",{id:"개인-디스크-고정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#개인-디스크-고정"},[e("span",null,"개인 디스크 고정")])],-1)),i(" - Set the fixed personal disk root directory for each client machine "),t[1]||(t[1]=e("ul",null,[e("li",null,"각 클라이언트 시스템에 대한 고정 개인 디스크 루트 디렉터리 설정")],-1)),t[2]||(t[2]=e("figure",null,[e("img",{src:o,alt:"Personal disk root directory",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Personal disk root directory")],-1)),i(" - Set the personal disk path in the personal disk settings->advanced of the computer "),t[3]||(t[3]=e("ul",null,[e("li",null,"컴퓨터의 개인디스크 설정 -> 고급에서 개인디스크 경로를 설정하세요.")],-1)),t[4]||(t[4]=e("figure",null,[e("img",{src:r,alt:"Fixed personal disk settings",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Fixed personal disk settings")],-1)),i(" ## Roaming personal disk "),t[5]||(t[5]=e("h2",{id:"개인디스크-로밍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#개인디스크-로밍"},[e("span",null,"개인디스크 로밍")])],-1)),i(" - Add personal users in the user list view "),t[6]||(t[6]=e("ul",null,[e("li",null,"사용자 목록 보기에서 개인 사용자 추가")],-1)),t[7]||(t[7]=e("figure",null,[e("img",{src:a,alt:"Add personal user",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Add personal user")],-1)),i(" - Personal information includes: username, password, category and roaming personal disk settings "),t[8]||(t[8]=e("ul",null,[e("li",null,"개인정보에는 사용자 이름, 비밀번호, 카테고리, 로밍 개인 디스크 설정 등이 포함됩니다.")],-1)),t[9]||(t[9]=e("figure",null,[e("img",{src:d,alt:"Edit personal user",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Edit personal user")],-1)),i(` Name: Boot login account
Password: Boot login password
Category: Custom classification
Type: It can be a disk, system image, restore point, support roaming diskless boot.
Parent system image: When it is a restore point, the parent system image must be set.
Disk file path: The path where the disk file is saved
Copy: The formatted disk to be copied when creating a new disk
Capacity: The capacity of the new disk
Create new disk file: Whether to create a new disk file
Client machine drive letter: The specified drive letter of the virtual disk on the client machine

- Set the computer boot mode to must log in or display boot menu `),t[10]||(t[10]=e("p",null,"이름: 부팅 로그인 계정 비밀번호: 부팅 로그인 비밀번호 카테고리: 맞춤 분류 유형: 디스크, 시스템 이미지, 복원 지점, 로밍 디스크 없는 부팅 지원이 될 수 있습니다. 상위 시스템 이미지: 복원 지점인 경우 상위 시스템 이미지를 설정해야 합니다. 디스크 파일 경로: 디스크 파일이 저장되는 경로 복사: 새 디스크 생성 시 복사할 포맷된 디스크 용량: 새 디스크의 용량 새 디스크 파일 생성: 새 디스크 파일을 생성할지 여부 클라이언트 시스템 드라이브 문자: 클라이언트 시스템에 있는 가상 디스크의 지정된 드라이브 문자",-1)),t[11]||(t[11]=e("ul",null,[e("li",null,"컴퓨터 부팅 모드를 로그인하거나 부팅 메뉴를 표시하도록 설정합니다.")],-1)),t[12]||(t[12]=e("figure",null,[e("img",{src:p,alt:"Must log in before booting",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Must log in before booting")],-1)),i(" - The client machine will display the following login interface every time it PXE network boots "),t[13]||(t[13]=e("ul",null,[e("li",null,"클라이언트 시스템은 PXE 네트워크가 부팅될 때마다 다음 로그인 인터페이스를 표시합니다.")],-1)),t[14]||(t[14]=e("figure",null,[e("img",{src:u,alt:"Personal disk login",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Personal disk login")],-1)),i(" ## Shared cloud disk "),t[15]||(t[15]=e("h2",{id:"클라우드-디스크-공유",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#클라우드-디스크-공유"},[e("span",null,"클라우드 디스크 공유")])],-1)),i(` Shared cloud disk is to map the shared directory of the cloud desktop server to the client machine disk, such as: server directory "D:\\PC001Disk", shared as "PC001Disk", login name "PC001", password "123", mapped to "Z:" on the client machine.

Server share settings are as follows: `),t[16]||(t[16]=e("p",null,'공유 클라우드 디스크는 클라우드 데스크톱 서버의 공유 디렉터리를 클라이언트 컴퓨터 디스크에 매핑하는 것입니다. 예: 서버 디렉터리 "D:\\PC001Disk", "PC001Disk"로 공유, 로그인 이름 "PC001", 비밀번호 "123", 매핑됨 클라이언트 컴퓨터에서 "Z:"로 변경합니다.',-1)),t[17]||(t[17]=e("p",null,"서버 공유 설정은 다음과 같습니다.",-1)),t[18]||(t[18]=e("figure",null,[e("img",{src:g,alt:"Server share settings",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Server share settings")],-1)),i(" Cloud desktop computer settings are as follows: "),t[19]||(t[19]=e("p",null,"클라우드 데스크톱 컴퓨터 설정은 다음과 같습니다.",-1)),t[20]||(t[20]=e("figure",null,[e("img",{src:m,alt:"Shared cloud disk settings",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Shared cloud disk settings")],-1)),i(" ## iSCSI cloud disk "),t[21]||(t[21]=e("h2",{id:"iscsi-클라우드-디스크",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iscsi-클라우드-디스크"},[e("span",null,"iSCSI 클라우드 디스크")])],-1)),i(` iSCSI cloud disk server must be an independent server that supports iSCSI protocol, such as cloud desktop server or NAS.
- Set the third-party iSCSI cloud disk server IP to 192.168.1.8 `),t[22]||(t[22]=e("p",null,"iSCSI 클라우드 디스크 서버는 클라우드 데스크톱 서버, NAS 등 iSCSI 프로토콜을 지원하는 독립 서버여야 합니다.",-1)),t[23]||(t[23]=e("ul",null,[e("li",null,"타사 iSCSI 클라우드 디스크 서버 IP를 192.168.1.8로 설정합니다.")],-1)),t[24]||(t[24]=e("figure",null,[e("img",{src:k,alt:"iSCSI server IP settings",tabindex:"0",loading:"lazy"}),e("figcaption",null,"iSCSI server IP settings")],-1)),i(" - Set the login information on the computer, account PC001, password 123, mapped to Z: "),t[25]||(t[25]=e("ul",null,[e("li",null,"컴퓨터의 로그인 정보, 계정 PC001, 비밀번호 123을 Z에 매핑되도록 설정합니다.")],-1)),t[26]||(t[26]=e("figure",null,[e("img",{src:f,alt:"iSCSI cloud disk settings",tabindex:"0",loading:"lazy"}),e("figcaption",null,"iSCSI cloud disk settings")],-1))])}const b=s(y,[["render",S],["__file","personaldisk.html.vue"]]),v=JSON.parse('{"path":"/guide/server/personaldisk.html","title":"개인 디스크","lang":"en-US","frontmatter":{"title":"개인 디스크","icon":"fa-solid fa-person","order":11,"category":["데스크탑 UI"],"tag":["Personal disk"],"description":"개인 디스크 고정 각 클라이언트 시스템에 대한 고정 개인 디스크 루트 디렉터리 설정 Personal disk root directoryPersonal disk root directory 컴퓨터의 개인디스크 설정 -> 고급에서 개인디스크 경로를 설정하세요. Fixed personal disk settingsFixed ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/server/personaldisk.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"개인 디스크"}],["meta",{"property":"og:description","content":"개인 디스크 고정 각 클라이언트 시스템에 대한 고정 개인 디스크 루트 디렉터리 설정 Personal disk root directoryPersonal disk root directory 컴퓨터의 개인디스크 설정 -> 고급에서 개인디스크 경로를 설정하세요. Fixed personal disk settingsFixed ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Personal disk"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"개인 디스크\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"개인 디스크 고정","slug":"개인-디스크-고정","link":"#개인-디스크-고정","children":[]},{"level":2,"title":"개인디스크 로밍","slug":"개인디스크-로밍","link":"#개인디스크-로밍","children":[]},{"level":2,"title":"클라우드 디스크 공유","slug":"클라우드-디스크-공유","link":"#클라우드-디스크-공유","children":[]},{"level":2,"title":"iSCSI 클라우드 디스크","slug":"iscsi-클라우드-디스크","link":"#iscsi-클라우드-디스크","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.23,"words":370},"filePathRelative":"guide/server/personaldisk.md","autoDesc":true}');export{b as comp,v as data};
