import{_ as n}from"./PEmain-BCaBjhgA.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as l,b as t,e as o,o as r}from"./app-CSDmL_QQ.js";const d="/guide/assets/format-BG2-E39m.png",s="/guide/assets/setip-DvtaEfSL.png",p="/guide/assets/pedown-DM1yqTng.png",h="/guide/assets/setvhdboot-6xM42jw8.png",m="/guide/assets/vhdboot-DusgKtaV.png",u="/guide/assets/vhdvirtualdisk-CRGpnYK5.png",g={};function v(c,e){return r(),i("div",null,[l(" ## Initialize local disk "),e[0]||(e[0]=t("h2",{id:"로컬-디스크-초기화",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#로컬-디스크-초기화"},[t("span",null,"로컬 디스크 초기화")])],-1)),l(" $~~~~$Copy or burn the ISO file of the PE tool to a USB drive, boot from the USB drive, and you will see the main interface. Use the Format Disk function to initialize the local disk. "),e[1]||(e[1]=t("p",null,"PE 도구의 ISO 파일을 USB 드라이브에 복사하거나 굽고 USB 드라이브에서 부팅하면 기본 인터페이스가 표시됩니다. 디스크 포맷 기능을 사용하여 로컬 디스크를 초기화하세요.",-1)),e[2]||(e[2]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("img",{src:n,alt:"",loading:"lazy"}),o(),t("br"),o("Main interface")]),t("th",null,[t("img",{src:d,alt:"",loading:"lazy"}),o(),t("br"),o("Format disk")])])])],-1)),l(" ## Download operating system image "),e[3]||(e[3]=t("h2",{id:"운영체제-이미지-다운로드",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#운영체제-이미지-다운로드"},[t("span",null,"운영체제 이미지 다운로드")])],-1)),l(" $~~~~$After setting the local network card IP, enter the cloud desktop server IP to download the image "),e[4]||(e[4]=t("p",null,"로컬 네트워크 카드 IP를 설정한 후 클라우드 데스크탑 서버 IP를 입력하여 이미지를 다운로드하세요.",-1)),e[5]||(e[5]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("img",{src:s,alt:"",loading:"lazy"}),o(),t("br"),o("Set IP")]),t("th",null,[t("img",{src:p,alt:"",loading:"lazy"}),t("br"),o("Download image")])])])],-1)),l(" ## Install local vhd boot "),e[6]||(e[6]=t("h2",{id:"로컬-vhd-부팅-설치",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#로컬-vhd-부팅-설치"},[t("span",null,"로컬 VHD 부팅 설치")])],-1)),l(` $~~~~$After installing the downloaded image to the local disk, you can boot it 
`),e[7]||(e[7]=t("p",null,"다운로드한 이미지를 로컬 디스크에 설치한 후 부팅하시면 됩니다.",-1)),l(" ![Install local vhd boot](setvhdboot.png) "),e[8]||(e[8]=t("figure",null,[t("img",{src:h,alt:"로컬 VHD 부팅 설치",tabindex:"0",loading:"lazy"}),t("figcaption",null,"로컬 VHD 부팅 설치")],-1)),l(" ## Boot from local vhd "),e[9]||(e[9]=t("h2",{id:"로컬-vhd에서-부팅",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#로컬-vhd에서-부팅"},[t("span",null,"로컬 vhd에서 부팅")])],-1)),l(` $~~~~$Remove the USB drive with the PE tool, set the local disk to boot, and you can 
boot the VHD system image `),e[10]||(e[10]=t("p",null,"PE 도구를 사용하여 USB 드라이브를 제거하고 로컬 디스크를 부팅하도록 설정하면 VHD 시스템 이미지를 부팅할 수 있습니다",-1)),e[11]||(e[11]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("img",{src:m,alt:"",loading:"lazy"}),o(),t("br"),o("System Image Selection for Booting")]),t("th",null,[t("img",{src:u,alt:"",loading:"lazy"}),t("br"),o("vhd virtual disk")])])])],-1))])}const S=a(g,[["render",v],["__file","vhdboot.html.vue"]]),D=JSON.parse('{"path":"/demo/vhdboot.html","title":"DYNADISK vhd 오프라인 부팅","lang":"en-US","frontmatter":{"title":"DYNADISK vhd 오프라인 부팅","icon":"fa-brands fa-docker","order":8,"category":["Quick Start"],"tag":["Local vhd offline boot"],"description":"로컬 디스크 초기화 PE 도구의 ISO 파일을 USB 드라이브에 복사하거나 굽고 USB 드라이브에서 부팅하면 기본 인터페이스가 표시됩니다. 디스크 포맷 기능을 사용하여 로컬 디스크를 초기화하세요. 운영체제 이미지 다운로드 로컬 네트워크 카드 IP를 설정한 후 클라우드 데스크탑 서버 IP를 입력하여 이미지를 다운로드하...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/demo/vhdboot.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"DYNADISK vhd 오프라인 부팅"}],["meta",{"property":"og:description","content":"로컬 디스크 초기화 PE 도구의 ISO 파일을 USB 드라이브에 복사하거나 굽고 USB 드라이브에서 부팅하면 기본 인터페이스가 표시됩니다. 디스크 포맷 기능을 사용하여 로컬 디스크를 초기화하세요. 운영체제 이미지 다운로드 로컬 네트워크 카드 IP를 설정한 후 클라우드 데스크탑 서버 IP를 입력하여 이미지를 다운로드하..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i"}],["meta",{"property":"article:tag","content":"Local vhd offline boot"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DYNADISK vhd 오프라인 부팅\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"로컬 디스크 초기화","slug":"로컬-디스크-초기화","link":"#로컬-디스크-초기화","children":[]},{"level":2,"title":"운영체제 이미지 다운로드","slug":"운영체제-이미지-다운로드","link":"#운영체제-이미지-다운로드","children":[]},{"level":2,"title":"로컬 VHD 부팅 설치","slug":"로컬-vhd-부팅-설치","link":"#로컬-vhd-부팅-설치","children":[]},{"level":2,"title":"로컬 vhd에서 부팅","slug":"로컬-vhd에서-부팅","link":"#로컬-vhd에서-부팅","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"demo/vhdboot.md","autoDesc":true}');export{S as comp,D as data};
