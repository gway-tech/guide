import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as n,b as t,d as a,o as l}from"./app-jsmukNCe.js";const r="/guide/assets/question1-e9kyHsNT.jpg",s={};function d(c,e){return l(),o("div",null,[n(" ## Local VHD Offline Boot Issues "),e[0]||(e[0]=t("h2",{id:"로컬-vhd-오프라인-부팅-문제",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#로컬-vhd-오프라인-부팅-문제"},[t("span",null,"로컬 VHD 오프라인 부팅 문제")])],-1)),n(" - After booting locally from VHD, I have already turned off the hibernation function, but the computer still goes black and cannot be awakened. How can I solve this problem? "),e[1]||(e[1]=t("ul",null,[t("li",null,"VHD에서 로컬로 부팅한 후 이미 최대 절전 모드 기능을 껐지만 컴퓨터가 여전히 검은색으로 표시되고 절전 모드를 해제할 수 없습니다. 이 문제를 어떻게 해결할 수 있나요?")],-1)),e[2]||(e[2]=t("figure",null,[t("img",{src:r,alt:"intel management engine interface",tabindex:"0",loading:"lazy"}),t("figcaption",null,"intel management engine interface")],-1)),n(' Please turn off the "Allow the computer to turn off this device to save power" option for "intel management engine interface". '),e[3]||(e[3]=t("p",null,'"인텔 관리 엔진 인터페이스"에 대한 "전원을 절약하기 위해 컴퓨터가 이 장치를 끌 수 있음" 옵션을 끄십시오.',-1)),n(" ## PXE Network Boot Issues "),e[4]||(e[4]=t("h2",{id:"pxe-네트워크-부팅-문제",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pxe-네트워크-부팅-문제"},[t("span",null,"PXE 네트워크 부팅 문제")])],-1)),n(` - Q: My network card ROM boots to ipxe's "Initialising devices" and stops. How can I solve this?
  Please edit the user and set it directly to "Use compatible PXE boot". Note that this mode will start slower, but it does not affect the speed after entering the window system.

- Q: Why does the image I made blue screen after PXE network boot?
  There are several situations that will cause this phenomenon
1. Network card driver version error or not installed roll blue screen.
2. The client has installed anti-virus software, such as nod32, etc.
3. The client is not installed, please reinstall and upload again.
4. After installing the ISD client, you need to restart the machine before uploading the image.

- Q: How much virtual memory should be set for the client machine?
  The client virtual memory is recommended to set the size to avoid insufficient virtual memory. The larger the client memory, the better. Example: minimum 4096 maximum 4096

- Q: What are the port requirements and network port security settings for PXE network boot?
  First of all, cloud desktop will use the following ports: 67 (DHCP), 69 (TFTP), 3260 (iSCSI), 3265 (management port). If you have a firewall or anti-virus software installed on your server, you need to make sure these ports are open.

- Q: Why does data go wrong after saving the image?
  Saving the image requires such operations:
1. First right-click on the client you want to operate in the user list on the server side, click the "Super User" command, and then turn on the corresponding client
2. After installing the software or updating the game, turn off the client, and then click the "Super User" command on the server again. The system will automatically prompt to save the write-back data.

- Q: How to upgrade from an old version?
  Please go to the official website to download the new version, you must stop the service before installation.

- Q: What is the working mode of ssd cache?
  After ssd is full, the data read later continues to cache, but ssd file size does not change, only the content is still changing.

- Q: Can I use my own cache with supercache?
  You can't use cloud desktop cache icachex with supercache together, they can be used separately.

- Q: How to reduce boot read traffic more effectively?
  You can consider from several aspects
1. System difference, different OS versions will have a lot of difference in read traffic.
2. System optimization, system optimization is necessary to a certain extent. Example: Turn off system pre-read, etc.

- Q: I changed servers how do I keep my original settings?
  Back up the set file from the original server, note that if some disk paths are different between the two servers, you need to reset them.

- Q: I uploaded an image file and encountered network transmission failure. How can I solve it? There are several situations that will cause this phenomenon
1. The server disk space where the image file is stored is insufficient.
2. Network problem, network disconnection, network card does not support sending large packets.

- Q: Why do some machines with the same configuration and same image package fail to enter the system after Windows scrolling?
  There are generally two reasons for this phenomenon:
1. There is an IP conflict with DHCP assigned IP in LAN.
2. The write-back disk is full.

- Q: Client boot dhcp after appearing PRESS A KEY TO REBOOT ?
1. No image file specified for booting or image package damaged.
2. Unable to load the set boot ip after booting.
3. Other DHCP interference, such as routers and switches.
4. The motherboard's bios has a problem and needs to be upgraded. `),e[5]||(e[5]=a("<ul><li><p>Q: 내 네트워크 카드 ROM이 ipxe의 &quot;초기화 장치&quot;로 부팅되고 중지됩니다. 이 문제를 어떻게 해결할 수 있나요? 사용자를 편집하여 &quot;호환 가능한 PXE 부팅 사용&quot;으로 직접 설정하십시오. 이 모드는 느리게 시작되지만 윈도우 시스템에 들어간 후의 속도에는 영향을 미치지 않습니다.</p></li><li><p>Q: PXE 네트워크 부팅 후 이미지에 블루 스크린이 나타나는 이유는 무엇입니까? 이 현상을 일으키는 몇 가지 상황이 있습니다.</p></li></ul><ol><li>네트워크 카드 드라이버 버전 오류 또는 설치되지 않은 블루 스크린이 나타납니다.</li><li>클라이언트가 nod32 등과 같은 바이러스 백신 소프트웨어를 설치했습니다.</li><li>클라이언트가 설치되지 않았습니다. 재설치 후 다시 업로드해주세요.</li><li>ISD 클라이언트를 설치한 후 이미지를 업로드하기 전에 컴퓨터를 다시 시작해야 합니다.</li></ol><ul><li><p>Q: 클라이언트 시스템에 가상 메모리를 얼마나 설정해야 합니까? 가상 메모리가 부족하지 않도록 클라이언트 가상 메모리 크기를 설정하는 것이 좋습니다. 클라이언트 메모리는 클수록 좋습니다. 예: 최소 4096 최대 4096</p></li><li><p>Q: PXE 네트워크 부팅을 위한 포트 요구 사항과 네트워크 포트 보안 설정은 무엇입니까? 우선 클라우드 데스크탑은 67(DHCP), 69(TFTP), 3260(iSCSI), 3265(관리 포트) 포트를 사용합니다. 서버에 방화벽이나 바이러스 백신 소프트웨어가 설치되어 있는 경우 이러한 포트가 열려 있는지 확인해야 합니다.</p></li><li><p>Q: 이미지를 저장한 후 데이터가 잘못된 이유는 무엇입니까? 이미지를 저장하려면 다음과 같은 작업이 필요합니다.</p></li></ul><ol><li>먼저 서버 측 사용자 목록에서 조작하려는 클라이언트를 마우스 오른쪽 버튼으로 클릭하고 &quot;슈퍼 유저&quot; 명령을 클릭한 후 해당 클라이언트를 켭니다.</li><li>소프트웨어를 설치하거나 게임을 업데이트한 후 클라이언트를 끄고 서버에서 &quot;수퍼유저&quot; 명령을 다시 클릭하세요. 시스템은 자동으로 후기입 데이터를 저장하라는 메시지를 표시합니다.</li></ol><ul><li><p>Q: 이전 버전에서 업그레이드하는 방법은 무엇입니까? 새 버전을 다운로드하려면 공식 웹사이트로 이동하세요. 설치하기 전에 서비스를 중지해야 합니다.</p></li><li><p>Q: SSD 캐시의 작동 모드는 무엇입니까? SSD가 가득 차면 나중에 읽은 데이터가 계속 캐시되지만 SSD 파일 크기는 변경되지 않고 콘텐츠만 계속 변경됩니다.</p></li><li><p>Q: 슈퍼캐시와 함께 자체 캐시를 사용할 수 있나요? 클라우드 데스크톱 캐시 icachex를 슈퍼캐시와 함께 사용할 수 없으며 별도로 사용할 수 있습니다.</p></li><li><p>Q: 부팅 읽기 트래픽을 보다 효과적으로 줄이는 방법은 무엇입니까? 여러 측면에서 고려해 볼 수 있습니다</p></li></ul><ol><li>시스템 차이, OS 버전에 따라 읽기 트래픽에 많은 차이가 있습니다.</li><li>시스템 최적화, 시스템 최적화는 어느 정도 필요합니다. 예: 시스템 미리 읽기 등을 끄십시오.</li></ol><ul><li><p>Q: 서버를 변경했는데 원래 설정을 유지하려면 어떻게 해야 하나요? 원본 서버에서 설정 파일을 백업하세요. 두 서버 간에 일부 디스크 경로가 다를 경우 재설정해야 합니다.</p></li><li><p>Q: 이미지 파일을 업로드했는데 네트워크 전송에 실패했습니다. 어떻게 해결할 수 있나요? 이 현상을 일으키는 몇 가지 상황이 있습니다.</p></li></ul><ol><li>이미지 파일이 저장되어 있는 서버 디스크 공간이 부족합니다.</li><li>네트워크 문제, 네트워크 연결 끊김, 네트워크 카드는 대용량 패킷 전송을 지원하지 않습니다.</li></ol><ul><li>Q: Windows 스크롤 후 동일한 구성 및 동일한 이미지 패키지를 가진 일부 시스템이 시스템에 진입하지 못하는 이유는 무엇입니까? 이 현상에는 일반적으로 두 가지 이유가 있습니다.</li></ul><ol><li>LAN에서 DHCP 할당 IP와 IP 충돌이 있습니다.</li><li>후기입 디스크가 가득 찼습니다.</li></ol><ul><li>Q: 재부팅하려면 키를 누르세요? 표시된 후 클라이언트가 dhcp를 부팅합니까?</li></ul><ol><li>부팅에 지정된 이미지 파일이 없거나 이미지 패키지가 손상되었습니다.</li><li>부팅 후 설정된 부팅 IP를 로드할 수 없습니다.</li><li>라우터 및 스위치와 같은 기타 DHCP 간섭.</li><li>마더보드의 BIOS에 문제가 있어 업그레이드가 필요합니다.</li></ol>",12))])}const p=i(s,[["render",d],["__file","question.html.vue"]]),m=JSON.parse('{"path":"/guide/reference/question.html","title":"자주 묻는 질문","lang":"en-US","frontmatter":{"title":"자주 묻는 질문","icon":"fa-solid fa-circle-question","order":8,"category":["참고사항"],"tag":["Frequently Asked Questions"],"description":"로컬 VHD 오프라인 부팅 문제 VHD에서 로컬로 부팅한 후 이미 최대 절전 모드 기능을 껐지만 컴퓨터가 여전히 검은색으로 표시되고 절전 모드를 해제할 수 없습니다. 이 문제를 어떻게 해결할 수 있나요? intel management engine interfaceintel management engine interf...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/reference/question.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"자주 묻는 질문"}],["meta",{"property":"og:description","content":"로컬 VHD 오프라인 부팅 문제 VHD에서 로컬로 부팅한 후 이미 최대 절전 모드 기능을 껐지만 컴퓨터가 여전히 검은색으로 표시되고 절전 모드를 해제할 수 없습니다. 이 문제를 어떻게 해결할 수 있나요? intel management engine interfaceintel management engine interf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Frequently Asked Questions"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"자주 묻는 질문\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"로컬 VHD 오프라인 부팅 문제","slug":"로컬-vhd-오프라인-부팅-문제","link":"#로컬-vhd-오프라인-부팅-문제","children":[]},{"level":2,"title":"PXE 네트워크 부팅 문제","slug":"pxe-네트워크-부팅-문제","link":"#pxe-네트워크-부팅-문제","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.68,"words":804},"filePathRelative":"guide/reference/question.md","autoDesc":true}');export{p as comp,m as data};
