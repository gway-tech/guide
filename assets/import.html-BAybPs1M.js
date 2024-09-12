import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,b as t,e as n,o as l}from"./app-CSDmL_QQ.js";const a="/guide/assets/importcmd-DmajIDTX.png",s="/guide/assets/importnetwork-_ybBRzCA.png",d="/guide/assets/importrule-CpnoG0RQ.png",m="/guide/assets/importtxt-Bno3Qw0H.png",u="/guide/assets/importtxt1-OKLbI_cR.png",c="/guide/assets/importtxt2-CEOPXNM4.png",p="/guide/assets/importtxt3-EpxdHi0t.png",g={};function h(f,e){return l(),r("div",null,[i(" # Command "),e[0]||(e[0]=t("h1",{id:"명령",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#명령"},[t("span",null,"명령")])],-1)),i(" There are many ways to batch add client machines, please operate in the user menu that pops up by right-clicking in the client machine view "),e[1]||(e[1]=t("p",null,"클라이언트 컴퓨터를 일괄 추가하는 방법에는 여러 가지가 있습니다. 클라이언트 컴퓨터 보기에서 마우스 오른쪽 버튼을 클릭하면 나타나는 사용자 메뉴에서 작업하십시오.",-1)),i(" ![Batch add and import computer command](importcmd.png) "),e[2]||(e[2]=t("figure",null,[t("img",{src:a,alt:"컴퓨터 명령 일괄 추가 및 가져오기",tabindex:"0",loading:"lazy"}),t("figcaption",null,"컴퓨터 명령 일괄 추가 및 가져오기")],-1)),i(" ## Method one: Turn on all the client machines first, and then use the scan network function to add client machines "),e[3]||(e[3]=t("h2",{id:"방법-1-먼저-모든-클라이언트-컴퓨터를-켠-다음-네트워크-스캔-기능을-사용하여-클라이언트-컴퓨터를-추가합니다",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#방법-1-먼저-모든-클라이언트-컴퓨터를-켠-다음-네트워크-스캔-기능을-사용하여-클라이언트-컴퓨터를-추가합니다"},[t("span",null,"방법 1: 먼저 모든 클라이언트 컴퓨터를 켠 다음 네트워크 스캔 기능을 사용하여 클라이언트 컴퓨터를 추가합니다.")])],-1)),i(" ![Scan network](importnetwork.png) "),e[4]||(e[4]=t("figure",null,[t("img",{src:s,alt:"네트워크 스캔",tabindex:"0",loading:"lazy"}),t("figcaption",null,"네트워크 스캔")],-1)),i(" ## Method two: Use the batch add command to batch add users according to certain rules "),e[5]||(e[5]=t("h2",{id:"방법-2-일괄-추가-명령을-사용하여-특정-규칙에-따라-사용자를-일괄-추가합니다",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#방법-2-일괄-추가-명령을-사용하여-특정-규칙에-따라-사용자를-일괄-추가합니다"},[t("span",null,"방법 2: 일괄 추가 명령을 사용하여 특정 규칙에 따라 사용자를 일괄 추가합니다.")])],-1)),i(" ![Batch add rules](importrule.png) "),e[6]||(e[6]=t("figure",null,[t("img",{src:d,alt:"일괄 추가 규칙",tabindex:"0",loading:"lazy"}),t("figcaption",null,"일괄 추가 규칙")],-1)),i(` 1. Specify the name rule of the client machine: set the prefix, middle number and suffix of the machine name
2. Specify the start and end IP of the client machine, and you can generate client machines according to the rules. The disadvantage is that MAC cannot be generated `),e[7]||(e[7]=t("ol",null,[t("li",null,"클라이언트 컴퓨터의 이름 규칙을 지정합니다. 컴퓨터 이름의 접두사, 중간 번호 및 접미사를 설정합니다."),t("li",null,"클라이언트 머신의 시작 및 종료 IP를 지정하면 규칙에 따라 클라이언트 머신을 생성할 수 있습니다. 단점은 MAC을 생성할 수 없다는 것입니다.")],-1)),i(" ## Method three: Use plain text file to import client machines, assuming there is a plain text file with the following format "),e[8]||(e[8]=t("h2",{id:"방법-3-다음-형식의-일반-텍스트-파일이-있다고-가정하고-일반-텍스트-파일을-사용하여-클라이언트-컴퓨터를-가져옵니다",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#방법-3-다음-형식의-일반-텍스트-파일이-있다고-가정하고-일반-텍스트-파일을-사용하여-클라이언트-컴퓨터를-가져옵니다"},[t("span",null,"방법 3: 다음 형식의 일반 텍스트 파일이 있다고 가정하고 일반 텍스트 파일을 사용하여 클라이언트 컴퓨터를 가져옵니다.")])],-1)),i(" Use the import from text file command, you can get the following dialog box "),e[9]||(e[9]=t("p",null,"텍스트 파일에서 가져오기 명령을 사용하면 다음 대화 상자가 나타날 수 있습니다.",-1)),e[10]||(e[10]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("img",{src:m,alt:"",loading:"lazy"}),n(),t("br"),n("텍스트 파일에서 일괄 추가")]),t("th",null,[t("img",{src:u,alt:"",loading:"lazy"}),n(),t("br"),n("Preview")])])])],-1)),i(" When your text file format is different, you can specify other separators and column numbers for each data. If the file does not contain computer name and IP information, you can click the button on the right of the column number to specify the auto-generation rule. Click OK to complete the import "),e[11]||(e[11]=t("p",null,"텍스트 파일 형식이 다른 경우 각 데이터에 대해 다른 구분 기호와 열 번호를 지정할 수 있습니다. 파일에 컴퓨터 이름과 IP 정보가 포함되어 있지 않은 경우 열 번호 오른쪽에 있는 버튼을 클릭하여 자동 생성 규칙을 지정할 수 있습니다. 확인을 클릭하여 가져오기를 완료하세요.",-1)),e[12]||(e[12]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,[t("img",{src:c,alt:"",loading:"lazy"}),n(),t("br"),n("규칙 조정")]),t("th",null,[t("img",{src:p,alt:"",loading:"lazy"}),n(),t("br"),n("열 조정")])])])],-1)),i(" ## Method four: Use Import from CCBoot command, import CCBoot configuration file AccInfo.ini "),i(" ## Method five: Use Import from Ruiqi command, import Ruiqi configuration file wks.ini "),e[13]||(e[13]=t("h2",{id:"방법-4-ccboot에서-가져오기-명령을-사용하여-ccboot-구성-파일-accinfo-ini-가져오기",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#방법-4-ccboot에서-가져오기-명령을-사용하여-ccboot-구성-파일-accinfo-ini-가져오기"},[t("span",null,"방법 4: CCBoot에서 가져오기 명령을 사용하여 CCBoot 구성 파일 AccInfo.ini 가져오기")])],-1)),e[14]||(e[14]=t("h2",{id:"방법-5-ruiqi에서-가져오기-명령을-사용하여-ruiqi-구성-파일-wks-ini-가져오기",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#방법-5-ruiqi에서-가져오기-명령을-사용하여-ruiqi-구성-파일-wks-ini-가져오기"},[t("span",null,"방법 5: Ruiqi에서 가져오기 명령을 사용하여 Ruiqi 구성 파일 wks.ini 가져오기")])],-1))])}const x=o(g,[["render",h],["__file","import.html.vue"]]),C=JSON.parse('{"path":"/guide/server/import.html","title":"클라이언트 일괄 추가","lang":"en-US","frontmatter":{"title":"클라이언트 일괄 추가","icon":"fa-solid fa-users-rectangle","order":12,"category":["데스크탑 UI"],"tag":["Batch add computers"],"description":"명령 클라이언트 컴퓨터를 일괄 추가하는 방법에는 여러 가지가 있습니다. 클라이언트 컴퓨터 보기에서 마우스 오른쪽 버튼을 클릭하면 나타나는 사용자 메뉴에서 작업하십시오. 컴퓨터 명령 일괄 추가 및 가져오기컴퓨터 명령 일괄 추가 및 가져오기 방법 1: 먼저 모든 클라이언트 컴퓨터를 켠 다음 네트워크 스캔 기능을 사용하여...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/server/import.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"클라이언트 일괄 추가"}],["meta",{"property":"og:description","content":"명령 클라이언트 컴퓨터를 일괄 추가하는 방법에는 여러 가지가 있습니다. 클라이언트 컴퓨터 보기에서 마우스 오른쪽 버튼을 클릭하면 나타나는 사용자 메뉴에서 작업하십시오. 컴퓨터 명령 일괄 추가 및 가져오기컴퓨터 명령 일괄 추가 및 가져오기 방법 1: 먼저 모든 클라이언트 컴퓨터를 켠 다음 네트워크 스캔 기능을 사용하여..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i"}],["meta",{"property":"article:tag","content":"Batch add computers"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"클라이언트 일괄 추가\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"방법 1: 먼저 모든 클라이언트 컴퓨터를 켠 다음 네트워크 스캔 기능을 사용하여 클라이언트 컴퓨터를 추가합니다.","slug":"방법-1-먼저-모든-클라이언트-컴퓨터를-켠-다음-네트워크-스캔-기능을-사용하여-클라이언트-컴퓨터를-추가합니다","link":"#방법-1-먼저-모든-클라이언트-컴퓨터를-켠-다음-네트워크-스캔-기능을-사용하여-클라이언트-컴퓨터를-추가합니다","children":[]},{"level":2,"title":"방법 2: 일괄 추가 명령을 사용하여 특정 규칙에 따라 사용자를 일괄 추가합니다.","slug":"방법-2-일괄-추가-명령을-사용하여-특정-규칙에-따라-사용자를-일괄-추가합니다","link":"#방법-2-일괄-추가-명령을-사용하여-특정-규칙에-따라-사용자를-일괄-추가합니다","children":[]},{"level":2,"title":"방법 3: 다음 형식의 일반 텍스트 파일이 있다고 가정하고 일반 텍스트 파일을 사용하여 클라이언트 컴퓨터를 가져옵니다.","slug":"방법-3-다음-형식의-일반-텍스트-파일이-있다고-가정하고-일반-텍스트-파일을-사용하여-클라이언트-컴퓨터를-가져옵니다","link":"#방법-3-다음-형식의-일반-텍스트-파일이-있다고-가정하고-일반-텍스트-파일을-사용하여-클라이언트-컴퓨터를-가져옵니다","children":[]},{"level":2,"title":"방법 4: CCBoot에서 가져오기 명령을 사용하여 CCBoot 구성 파일 AccInfo.ini 가져오기","slug":"방법-4-ccboot에서-가져오기-명령을-사용하여-ccboot-구성-파일-accinfo-ini-가져오기","link":"#방법-4-ccboot에서-가져오기-명령을-사용하여-ccboot-구성-파일-accinfo-ini-가져오기","children":[]},{"level":2,"title":"방법 5: Ruiqi에서 가져오기 명령을 사용하여 Ruiqi 구성 파일 wks.ini 가져오기","slug":"방법-5-ruiqi에서-가져오기-명령을-사용하여-ruiqi-구성-파일-wks-ini-가져오기","link":"#방법-5-ruiqi에서-가져오기-명령을-사용하여-ruiqi-구성-파일-wks-ini-가져오기","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"guide/server/import.md","autoDesc":true}');export{x as comp,C as data};
