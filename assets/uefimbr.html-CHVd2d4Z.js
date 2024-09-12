import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,b as t,o as l}from"./app-DH_u4zeC.js";const s="/guide/assets/uefimbr1-DFwk-NcN.png",a="/guide/assets/uefimbr2-C_s5_9p5.png",r="/guide/assets/uefimbr3-xtTVxxAV.png",d="/guide/assets/uefimbr4-pfwlFwYO.png",p={};function u(m,e){return l(),n("div",null,[i(" ## How to make "),e[0]||(e[0]=t("h2",{id:"제작-방법",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#제작-방법"},[t("span",null,"제작 방법")])],-1)),i(` - Boot the computer using the traditional bios old-fashioned mode, and install the windows10 operating system
  The partition type must be MBR, and the partition layout must have a FAT32 partition `),e[1]||(e[1]=t("ul",null,[t("li",null,"기존 BIOS 구식 모드를 사용하여 컴퓨터를 부팅하고 Windows 10 운영 체제를 설치합니다. 파티션 유형은 MBR이어야 하고 파티션 레이아웃은 FAT32 파티션이어야 합니다.")],-1)),e[2]||(e[2]=t("figure",null,[t("img",{src:s,alt:"Install windows10 operating system",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Install windows10 operating system")],-1)),i(" - Format the first partition after installing the system as FAT32 "),e[3]||(e[3]=t("ul",null,[t("li",null,"시스템 설치 후 첫 번째 파티션을 FAT32로 포맷하세요.")],-1)),e[4]||(e[4]=t("figure",null,[t("img",{src:a,alt:"Partition view after installing the operating system",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Partition view after installing the operating system")],-1)),i(` - Boot the system using the Cloud Desktop VHD Offline Boot Client Initialization Tool, and execute the command
  bcdboot E:\\windows /s D: /f UEFI `),e[5]||(e[5]=t("ul",null,[t("li",null,"클라우드 데스크톱 VHD 오프라인 부팅 클라이언트 초기화 도구를 사용하여 시스템을 부팅하고 다음 명령을 실행합니다. bcdboot E:\\windows /s D: /f UEFI")],-1)),e[6]||(e[6]=t("figure",null,[t("img",{src:r,alt:"bcdboot",tabindex:"0",loading:"lazy"}),t("figcaption",null,"bcdboot")],-1)),i(" Here is a detailed reference for the command http://woshub.com/how-to-repair-deleted-efi-partition-in-windows-7/ "),e[7]||(e[7]=t("p",null,"다음은 명령에 대한 자세한 참조입니다. http://woshub.com/how-to-repair-deleted-efi-partition-in-windows-7",-1)),i(" - Boot the computer using uefi mode to test. "),e[8]||(e[8]=t("ul",null,[t("li",null,"테스트를 위해 UEFI 모드를 사용하여 컴퓨터를 부팅합니다.")],-1)),i(" - After passing the test, install the diskless client and upload. Please note that you must upload all partitions "),e[9]||(e[9]=t("ul",null,[t("li",null,"테스트 통과 후 디스크리스 클라이언트를 설치하고 업로드합니다. 모든 파티션을 업로드해야 합니다.")],-1)),e[10]||(e[10]=t("figure",null,[t("img",{src:d,alt:"Upload all partitions",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Upload all partitions")],-1))])}const w=o(p,[["render",u],["__file","uefimbr.html.vue"]]),y=JSON.parse('{"path":"/guide/reference/uefimbr.html","title":"BIOS 및 UEFI 듀얼 부팅 시스템 이미지를 만드는 방법","lang":"en-US","frontmatter":{"title":"BIOS 및 UEFI 듀얼 부팅 시스템 이미지를 만드는 방법","icon":"fa-solid fa-image","order":3,"category":["참고사항"],"tag":["How to make a Bios and UEFI dual boot system image"],"description":"제작 방법 기존 BIOS 구식 모드를 사용하여 컴퓨터를 부팅하고 Windows 10 운영 체제를 설치합니다. 파티션 유형은 MBR이어야 하고 파티션 레이아웃은 FAT32 파티션이어야 합니다. Install windows10 operating systemInstall windows10 operating system 시...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/reference/uefimbr.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"BIOS 및 UEFI 듀얼 부팅 시스템 이미지를 만드는 방법"}],["meta",{"property":"og:description","content":"제작 방법 기존 BIOS 구식 모드를 사용하여 컴퓨터를 부팅하고 Windows 10 운영 체제를 설치합니다. 파티션 유형은 MBR이어야 하고 파티션 레이아웃은 FAT32 파티션이어야 합니다. Install windows10 operating systemInstall windows10 operating system 시..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"How to make a Bios and UEFI dual boot system image"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BIOS 및 UEFI 듀얼 부팅 시스템 이미지를 만드는 방법\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"제작 방법","slug":"제작-방법","link":"#제작-방법","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"guide/reference/uefimbr.md","autoDesc":true}');export{w as comp,y as data};
